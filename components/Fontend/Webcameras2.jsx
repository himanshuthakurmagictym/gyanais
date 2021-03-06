

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



function Webcameras({socket, roomid, userid, userRole}) {
 
  const router  = useRouter();

//const peerConnections = {};
const videoscream = useRef(null)
const clientvideoscream = useRef(null)
const audiodev = useRef(null)
const [streamstart, setStreamstart] =useState(null)
const [stream, setStream] =useState("")
const [audioDevices, setaudioDevices] =useState([])
// const [peerConnections, setpeerConnections] =useState([])
const config = {
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302",
    },
  ],
};
// const [peerConnectionclient, setpeerConnectionclient] =useState(new RTCPeerConnection(config))




//   useEffect(()=>{
//     if(streamstart){
//     navigator.mediaDevices.getUserMedia({
//       video: { facingMode: "user" },
//       audio: {
//         echoCancellationType: 'system',
//         echoCancellation: true,
//         noiseSuppression: true,
//         sampleRate:24000,
//         sampleSize:16,
//         channelCount:2,
//         volume:0
//       }
//     }).then(stream => {
      
//       if(streamstart == 1){
//         console.log(stream)
//       videoscream.current.srcObject = stream;
//       videoscream.current.volume = 0;
//       setStream(stream)


//       // getDevices();

//       // function getDevices() {
//       //   navigator.mediaDevices.enumerateDevices()
//       //   .then( function(devices) {
//       //         devices.forEach(function(device) {
//       //             if(device.kind == "audioinput"){
//       //               setaudioDevices([...audioDevices, device])
//       //               console.log(device)
//       //             }
//       //     });
         
//       //   })

        
//       // }
      
      


//         socket.emit("broadcaster");
//         let peerConnections = {};
//         socket.on("watcher", id => {
//           const peerConnection = new RTCPeerConnection(config);
//           peerConnections[id] = peerConnection;
        
//           // let stream = video.srcObject;
//           stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
            
//           peerConnection.onicecandidate = event => {
//             if (event.candidate) {
//               socket.emit("candidate", id, event.candidate);
//             }
//           };
        
//           peerConnection
//             .createOffer()
//             .then(sdp => peerConnection.setLocalDescription(sdp))
//             .then(() => {
//               socket.emit("offer", id, peerConnection.localDescription);
//             });
//         });


//         socket.on("answer", (id, description) => {
//          peerConnections[id].setRemoteDescription(description);
//         });
        
//         socket.on("candidate", (id, candidate) => {
//          peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
//         });
      
        
        
//         window.onunload = window.onbeforeunload = () => {
//            socket.close();
//         };

//       }
      
//       if(streamstart == 2){
//         stream.getTracks().forEach(function(track) {
//           track.stop();
//           videoscream.current.srcObject = null;
//           router.reload()
//         });

//         socket.on("disconnectPeer", id => {
//           peerConnections[id].close();
//           peerConnections[id] = null;
//           console.log(id)
//           //how to delte any array from array
//           // const arr = [...peerConnections];
//           // const index = arr.findIndex((item)=> item.id !== id)
//           // setpeerConnections(index);
//           delete peerConnections[id];
//         });


//       }
//     })
//   } 
//   },[streamstart])

 useEffect(()=>{
  if((userRole === APIs.roles[1])){
    let peerConnectionclient;
    socket?.on("offer", (id, description) => {
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
          socket?.emit("answer", id, peerConnectionclient.localDescription);
        });

        
        peerConnectionclient.ontrack = event => {
          console.log(event.streams[0])
        
        clientvideoscream.current.srcObject = event.streams[0];
      };

      
      
      peerConnectionclient.onicecandidate = event => {
        if (event.candidate) {
        
          socket?.emit("candidate", id, event.candidate);
        }
      };
    });

    socket?.on("candidate", (id, candidate) => {
     
      peerConnectionclient
        .addIceCandidate(new RTCIceCandidate(candidate))
        .catch(e => console.error(e));
    });
   
    socket?.on("connect", () => {
      socket?.emit("watcher");
    });
    
    socket?.on("broadcaster", () => {
      socket?.emit("watcher");
    });
    
    window.onunload = window.onbeforeunload = () => {
      //socket.close();
      //  peerConnectionclient.close();
       peerConnectionclient = null;
    };


  }
 },[])

  
  // const recordWebcam = useRecordWebcam();

    return (
        <>
        
        
        <video ref={clientvideoscream} playsInline autoPlay muted width='100%' height='100%'/>
  
       
     
    
        </>
    )
}

export default Webcameras
