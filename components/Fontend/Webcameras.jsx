

import React, {useEffect, useRef} from 'react'
import { useState } from 'react';
import {useRouter} from 'next/router'

// import { useRecordWebcam } from 'react-record-webcam'
import APIs from '../../config';

// Media contrains
const constraints = {
  video: { facingMode: "user" },
  // Uncomment to enable audio
   audio: true,
};

let mediaRecorder = null;
let dataChunks = [];

function Webcameras({socket, roomid, userid, userRole, handleclassbutton, course_id, streamstartstatus, screenrecordingstatus}) {
 
  const router  = useRouter();

  useEffect(()=>{
    setStreamstart(streamstartstatus)
  },[streamstartstatus])

  useEffect(()=>{
    sethandleclass(handleclassbutton)
    
  },[handleclassbutton])

//const peerConnections = {};
const videoscream = useRef(null)
const clientvideoscream = useRef(null)
const audiodev = useRef(null)
const [streamstart, setStreamstart] =useState(null)
const [clientcall, Setclientcall] =useState(null)
const [audiovalue, setaudiovalue] =useState("")
const [handleclass, sethandleclass] =useState(handleclassbutton)
const [audioDevices, setaudioDevices] =useState([])
// const [peerConnections, setpeerConnections] =useState([])
const [screenrecording, setScreenrecording] = useState(0);
const [mediaRecorderstatus, setmediaRecorderstatus] = useState("");
const [screenStream, setscreenStream] = useState();
const [voiceStream, setvoiceStream] = useState();

const config = {
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302",
    },
  ],
};
// const [peerConnectionclient, setpeerConnectionclient] =useState(new RTCPeerConnection(config))


useEffect(()=>{
  socket.emit("handleclassbutton", {handleclass, roomid})

},[handleclass])

  useEffect(()=>{
    if(streamstart){
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: {
        echoCancellationType: 'system',
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate:24000,
        sampleSize:16,
        channelCount:2,
        volume:0.9
      }
    }).then(stream => {
      
      if(streamstart == 1){


      setscreenStream(stream);


      videoscream.current.srcObject = stream;
      videoscream.current.volume = 0;
      socket.emit("broadcaster");
      // setStream(stream)
      Setclientcall(1)


      // getDevices();

      // function getDevices() {
      //   navigator.mediaDevices.enumerateDevices()
      //   .then( function(devices) {
      //         devices.forEach(function(device) {
      //             if(device.kind == "audioinput"){
      //               setaudioDevices([...audioDevices, device])
      //               console.log(device)
      //             }
      //     });
         
      //   })

        
      // }

      let peerConnections = {};
      socket.on("watcher", id => {
        const peerConnection = new RTCPeerConnection(config);
        peerConnections[id] = peerConnection;
      
        // let stream = video.srcObject;
        stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
          
        peerConnection.onicecandidate = event => {
          if (event.candidate) {
           
            socket.emit("candidate", id, event.candidate);
          }
        };
      
        peerConnection
          .createOffer()
          .then(sdp => peerConnection.setLocalDescription(sdp))
          .then(() => {
            console.log("offer", id)
            socket.emit("offer", id, peerConnection.localDescription);
          });
      });
  
  
      socket.on("answer", (id, description) => {
        console.log("awnswer", id, description)
       peerConnections[id].setRemoteDescription(description);
      });
      
      socket.on("candidate", (id, candidate) => {
        console.log("candidate", id, candidate)
       peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
      });
    
      
      
      window.onunload = window.onbeforeunload = () => {
         socket.close();
      };
      

    }

   

      if(streamstart == 2){
        stream.getTracks().forEach(function(track) {
          track.stop();
          videoscream.current.srcObject = null;
          // router.reload()
        });
        mediaRecorder?.stop();
        socket.on("disconnectPeer", id => {
          peerConnections[id].close();
          peerConnections[id] = null;
        
          //how to delte any array from array
          // const arr = [...peerConnections];
          // const index = arr.findIndex((item)=> item.id !== id)
          // setpeerConnections(index);
          delete peerConnections[id];
        });


      }
    })
  } 
  },[streamstart])

 useEffect(()=>{
  if((userRole === APIs.roles[1])){
    let peerConnectionclient;
    socket.on("offer", (id, description) => {
       peerConnectionclient = new RTCPeerConnection(config);
         
    //   console.log(peerConnectionclient);
    //   setpeerConnectionclient(prevState => ({
    //     ...prevState,
    //     setRemoteDescription(description)
    //  })).then(() => peerConnectionclient.createAnswer())
    //    .then(sdp => peerConnectionclient.setLocalDescription(sdp))
    //    .then(() => {
    //      socket.emit("answer", id, peerConnectionclient.localDescription);
    //    });
      peerConnectionclient
        .setRemoteDescription(description)
        .then(() => peerConnectionclient.createAnswer())
        .then(sdp => peerConnectionclient.setLocalDescription(sdp))
        .then(() => {
          socket.emit("answer", id, peerConnectionclient.localDescription);
        });

        
        peerConnectionclient.ontrack = (event) => {
          
        
        // clientvideoscream.current.srcObject = event.streams[0];
        
       if (clientvideoscream.current) clientvideoscream.current.srcObject = event.streams[0];
     
      //  clientvideoscream.current?.defaultMuted = false;
        
      };

      
      
      peerConnectionclient.onicecandidate = event => {
        if (event.candidate) {
          // console.log(`event candicate ${event.candidate}`)
          socket.emit("candidate", id, event.candidate);
        }
      };
    });

    socket.on("candidate", (id, candidate) => {
      // console.log(`candidate call ${candidate}`)
      peerConnectionclient
        .addIceCandidate(new RTCIceCandidate(candidate))
        .catch(e => console.error(e));
        // console.log(peerConnectionclient)
    });
   
    socket.on("connect", () => {
      // console.log(`waching `)
        
      socket.emit("watcher");
    });
    
    socket.on("broadcaster", () => {
     
      socket.emit("watcher");
    });
    
    window.onunload = window.onbeforeunload = () => {
        socket.close();
      //  peerConnectionclient.close();
       peerConnectionclient = null;
    };


  }
 },[clientcall])

  const enableAudio = ()=> {
   if(audiovalue == 0){
  clientvideoscream.current.muted = false;
  setaudiovalue(1);
   }else{
    clientvideoscream.current.muted = true;
    setaudiovalue(0);
   }
  }

   
 

useEffect(()=>{
let mediaStream;
if (screenStream  && !mediaRecorder) {
mediaStream = new MediaStream([
  ...screenStream.getVideoTracks(),
  // ...voiceStream.getAudioTracks()
])

    setScreenrecording(1)
    // mediaRecorder instance
    mediaRecorder = new MediaRecorder(mediaStream)
    
    mediaRecorder.ondataavailable = ({ data }) => {
      dataChunks.push(data)
      socket?.emit('camscreenData:start', {data, roomid})
    }
    mediaRecorder.onstop = stoprecording
    mediaRecorder.start(1000)
    setmediaRecorderstatus(mediaRecorder.state)       

}
},[screenrecordingstatus])
// },[screenStream, screenrecordingstatus])


const stoprecording = ()=>{
    console.log("stop recording")
    socket?.emit('camscreenData:end', {roomid, course_id})
    setScreenrecording(0);
    // mediaRecorder?.stop();
   
    setmediaRecorderstatus(mediaRecorder?.state)
    const videoBlob = new Blob(dataChunks, {
      type: 'video/webm'
    })
    
    screenStream?.getTracks().forEach((track) => track?.stop());
    // voiceStream?.getTracks().forEach((track) => track?.stop());
    // const videoSrc = URL.createObjectURL(videoBlob)
    // videoRef.current.src = videoSrc
    mediaRecorder = null
    dataChunks = []
}

  

    return (
        <>
        
        
          {(userRole === APIs.roles[0])?
          <>
          {/* <div className="camerabutton ">
        <button className='btn-success ' onClick={e=>{(setStreamstart(1))}}>Open Camera</button>
       <button className='btn-success ' onClick={e=>{setStreamstart(2)}}>Stop Camera</button>
       <button className='btn-success ' onClick={e=>{(handleclass == 0)? sethandleclass(1):sethandleclass(0)}}>{(handleclass == 0)? "Start Class":"Stop Class"}</button>
      </div> */}
      <video ref={videoscream} autoPlay muted width='100%' height='100%'/>
       </>
       :
       <>
        <div className="camerabutton">
        <button className="btn-info" onClick={e=>{enableAudio()}}>{(audiovalue == 1)? "Audio Disabled":" Audio Enabled"}</button>
        </div>
        <video ref={clientvideoscream} autoPlay playsInline muted width='100%' height='100%'/>
       </>
       }
      
        
       
     
    
      </>
    )
}

export default Webcameras
