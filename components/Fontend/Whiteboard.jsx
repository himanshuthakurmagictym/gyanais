import React, { useRef, useEffect, useState } from 'react';
import APIs from '../../config';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
import { useStopwatch  } from 'react-timer-hook';
// import RecordRTC, { invokeSaveAsDialog } from 'recordrtc';
// import io from 'socket.io-client';
let mediaRecorder = null;
let dataChunks = [];

const Whiteboard = ({socket, roomid, userRole, coursevideoid, userid, course_id, screenrecordingstatus}) =>{
  const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfAsImageSrc, setpdfAsImageSrc] = useState("");
    const [pollmodel, setpollmodel] = useState(false);
    
    function onDocumentLoadSuccesss({ numPages }) {
      setNumPages(numPages);
    }

    useEffect(()=>{
      screenrecordingstatus == 0?startrecording():mediaRecorder?.stop();
    },
    [screenrecordingstatus])
    const canvasRef = useRef(null);
    const imageRef = useRef(null);
      const widref = useRef(null);  
    const colorsRef = useRef(null);
    const videoRef = useRef();
    const socketRef = useRef();
    const [screenrecording, setScreenrecording] = useState(0);
    const [pdffile, setFile] = useState("");
    const [allimages, setAllimages] = useState("");
    const [mediaRecorderstatus, setmediaRecorderstatus] = useState("");
    const [slidetime, setslidetime] = useState(0);
    const [progressbar, setprogressbar] = useState("");
    const [progressbarpercentage, setprogressbarpercentage] = useState("");
    const [allquestions, setallquestions] = useState("");
    const [pdffiledetails, setpdffiledetails] = useState("");
    const [screenStream, setscreenStream] = useState();
    const [voiceStream, setvoiceStream] = useState();
    const [mcqNumber, setmcqNumber] = useState(1);
    // const recordWebcam = useRecordWebcam();
    //console.log(allimages)
    const notify = (data)=>{
     

      if(data.status_Code === 200){
       
        setprogressbar(2);
        setprogressbarpercentage(100);
          toast.success(data.message,{autoClose:2000});
      }else{
          toast.error(data.message,{autoClose:2000});
      }
    }

    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      resume,
      start,
      pause,
      reset,
    } = useStopwatch({ autoStart: false });
    
    
   const sendpoll = ()=>{

     
     if(mcqNumber<=allquestions.length){
     const finalarray = mcqNumber - 1;
     const mcqsid = allquestions[finalarray].mcqsid;
     const questionid = allquestions[finalarray]._id;
     const question = allquestions[finalarray].question;
     const question_timestamp = `{hours}:{minutes}:{seconds}`;
    socket?.emit('pollquestion', {mcqNumber, roomid, userid, mcqsid, questionid, question, question_timestamp});
     }
    setmcqNumber(mcqNumber<allquestions.length?++mcqNumber:"Finished");

   }

   const submitpollanswer = async(option)=>{
   
    // console.log(pollmodel.question);
    // console.log(option);
    await fetch(APIs.base_url+"student/mcq/answerUpdate", {
      method: "POST",
      headers: {
       "Content-Type": "application/json",
         },
body:JSON.stringify({userid:userid, question:pollmodel._id, answer:option, correctanswer:pollmodel.option, mcqsid:pollmodel.mcqsid})
    }).then(res=>res.json()).then(res=>{notify(res.data), setpollmodel(false)}).catch(er=>console.log(er))
   }

 const startrecording = (e)=>{
   
      navigator.mediaDevices?.getUserMedia({
          audio: true
          }).then((audiostream)=>{
            setvoiceStream(audiostream);
             const canvasStream = canvasRef?.current?.captureStream();
                setscreenStream(canvasStream);
                // console.log(canvasStream)
                start();
              })
  }


 useEffect(()=>{
  let mediaStream;
  if (screenStream && voiceStream && !mediaRecorder) {
    mediaStream = new MediaStream([
      ...screenStream.getVideoTracks(),
      ...voiceStream.getAudioTracks()
    ])

        setScreenrecording(1)
        // mediaRecorder instance
        mediaRecorder = new MediaRecorder(mediaStream)
        
        mediaRecorder.ondataavailable = ({ data }) => {
          dataChunks.push(data)
          socketRef.current.emit('screenData:start', {data, roomid})
        }
        mediaRecorder.onstop = stoprecording
        mediaRecorder.start(1000)
        setmediaRecorderstatus(mediaRecorder.state)       

  }

 },[screenStream, voiceStream])


    const stoprecording = ()=>{
        console.log("stop recording")
        socketRef?.current.emit('screenData:end', {roomid, course_id})
        setScreenrecording(0);
        // mediaRecorder?.stop();
        pause();
        setmediaRecorderstatus(mediaRecorder?.state)
        const videoBlob = new Blob(dataChunks, {
          type: 'video/webm'
        })
        
        screenStream?.getTracks().forEach((track) => track?.stop());
	      voiceStream?.getTracks().forEach((track) => track?.stop());
        // const videoSrc = URL.createObjectURL(videoBlob)
        // videoRef.current.src = videoSrc
        mediaRecorder = null
        dataChunks = []
    }

   
    useEffect(()=>{
      const allquestion = APIs.base_url+"teacher/getallquestion";
      fetch(allquestion,{
        method: "POST",
         headers: {
          "Content-Type": "application/json",
            },
        body: JSON.stringify({videoid:roomid})
    }).then(res => res.json()).then(res  => {setallquestions(res.data)}).catch(err => console.log(err));
    },[])


    useEffect(() => {
      window.addEventListener('beforeunload', alertUser)
      return () => {
        window.removeEventListener('beforeunload', alertUser)
      }

    }, [])
    const alertUser = e => {
      e.preventDefault()
      e.returnValue = ''
    }

    const uploadimages = async(e)=>{
     e.preventDefault();
        //console.log(e.target.files)
      const uploadimage = APIs.base_url+"teacher/uploadimages" 
      const body = new FormData();
      body.append("images", e.target.files);
      body.append("roomid", roomid);
      body.append("courseid", coursevideoid);
      body.append("videoid", roomid);
      const result = await fetch(uploadimage,{
        method: "POST",
    
        body
    }).then(res => res.json()).then(res  => notify(res)).catch(err => console.log(err));
    }
   

    useEffect(async()=>{
      const pdfdetails = APIs.base_url+"teacher/getpdfdetails";
      await fetch(pdfdetails,{
        method: "POST",
         headers: {
          "Content-Type": "application/json",
            },
        body: JSON.stringify({roomid:roomid})
    }).then(res => res.json()).then(res  =>{
      setpdffiledetails(res.data.coursevideopdf_pathUrl);
       setPageNumber(parseInt(res.data.slideNumber));
    }).catch(err => console.log(err));
      
    },[roomid])

    useEffect(async()=>{
    socketRef?.current?.emit("sendpagenumber", {roomid, pageNumber});
    },[pageNumber])


    const sendpdffile = async(e)=>{
       e.preventDefault();
       setFile(e.target.files[0])
      //  console.log(e.target.files[0])
      //  console.log("pdf upload")
       const URLS = APIs.base_url+"teacher/videoPdfUpload/uploadfile";
      const body = new FormData();
        body.append("pdfName", e.target.files[0]);
        body.append("roomid", roomid);
        body.append("courseid", coursevideoid);
        body.append("teacherid", userid);
        body.append("videoid", roomid);
        setprogressbar(1);
        setprogressbarpercentage(10);

      //console.log(sendmaildata);
      const result = await fetch(URLS,{
          method: "POST",
          // headers: {
          //   'Accept': 'application/json',
          //   'Access-Control-Allow-Origin': '*',
          //    "Content-Type": "multipart/form-data",
          //   },
          body
      }).then(res => res.json()).then(res=>notify(res)).catch(err => console.log(err)); 

    }
    
    const leftslide = ()=>{  
      const totoalslide = allimages.length;
      // console.log(totoalslide);
        if(slidetime < totoalslide-1){  
         
          setslidetime(slidetime + 1)
          // console.log(slidetime);
        }else{
          if(slidetime = totoalslide){
            setslidetime(0)
          }
        }
    }

    const rightslide = ()=>{
      const totoalslide = allimages.length;
      // console.log(totoalslide)
        if(slidetime == 0 ){  
          setslidetime(totoalslide-1)
         
        }else{
          if(slidetime < totoalslide){ 
            setslidetime(slidetime - 1)
            // console.log(slidetime);
          }
        }
       
    }


   useEffect(()=>{

    const canvas = canvasRef.current;
      const contexts = canvas.getContext('2d');
      // imageRef?.current?.onload = () =>{
      // imageRef?.current?.crossOrigin = "Anonymous";
       contexts?.drawImage(imageRef?.current, 0, 0, canvas.width, canvas.height)
      // }
    },[socket][imageRef])

    useEffect(()=>{
      socket?.emit("backgroundimage",{roomid, slidetime});
    },[slidetime])
    
    useEffect(() => {

      socket?.on("handlebackgroundimage", slidetime=>{
      
          if(userRole === APIs.roles[1]){
            setslidetime(slidetime)
          }
        })

      // const allimagesAPI = APIs.base_url+"teacher/getallimages";
      //  fetch(allimagesAPI, {
      //   method: 'POST',
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({roomid:roomid})
      // }).then(res => res.json()).then(res  => setAllimages(res.data) ).catch(err => console.log(err)); 
      socket?.on("receivePollQuestion", ({mcqNumber, roomid, userid, mcqsid, questionid, question})=>{
          //code for popup
          setpollmodel({mcqNumber, roomid, userid, mcqsid, questionid, question})
      })
      
        //code for popup
        socket?.on("receivepagenumber", (pageNumber)=>{
          //code for popup
          setPageNumber(pageNumber);
      })
      // --------------- getContext() method returns a drawing context on the canvas-----
 
      const canvas = canvasRef.current;
      const test = colorsRef.current;
      const contexts = canvas.getContext('2d');

      // ----------------------- Colors --------------------------------------------------
      window.devicePixelRatio=2; //Clear Text
      var scale = window.devicePixelRatio; 
      // var sizeWidth = canvas.offsetWidth;
      // var sizeHeight = canvas.offsetHeight;
      // canvas.style.width = sizeWidth + "px";
      //   canvas.style.height = sizeHeight + "px";
        canvas.width = Math.floor(canvas.width * scale);
        canvas.height = Math.floor(canvas.height * scale);
      
      // imageRef?.current?.onload = () =>{
      //   imageRef?.current?.crossOrigin = "Anonymous";
      //    contexts?.drawImage(imageRef?.current, 0, 0, canvas.width, canvas.height)
      //   }
      

      const colors = document.getElementsByClassName('color');
      // console.log(colors, 'the colors');
      // console.log(test);
      // set the current color
      const current = {
        color: 'black',
      };
      
      // helper that will update the current color
      const onColorUpdate = (e) => {
        current.color = e.target.className.split(' ')[1];
      };
  
      // loop through the color elements and add the click event listeners
      for (let i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', onColorUpdate, false);
      }
      let drawing = false;
  
      // ------------------------------- create the drawing ----------------------------
    
      const drawLine = (x0, y0, x1, y1, color, emit) => {
        contexts.beginPath();
        contexts.moveTo(x0, y0);
        contexts.lineTo(x1, y1);
        contexts.strokeStyle = color;
      
        if(color == 'white'){
          // contexts.lineWidth = 50;      
           contexts.clearRect(0, 0, canvas.width, canvas.height)
            imageRef.current.crossOrigin = "Anonymous";
           contexts?.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height)
           
               
        }else{
        
        contexts.lineWidth = 2;
        }
        contexts.stroke();
        contexts.closePath();
  
        if (!emit) { return; }
        const w = canvas.width;
        const h = canvas.height;


        const whitedata = {
          x0: x0 / w,
          y0: y0 / h,
          x1: x1 / w,
          y1: y1 / h,
          color,
        }
  

        

        socketRef.current?.emit("draw-coordinates", {roomid, whitedata});



      };
   
      const getTopCanvasDif = () => {
        let rec = canvas.getBoundingClientRect();
        return rec.top;
      }
      const getLeftCanvasDif = () => {
        let rec = canvas.getBoundingClientRect();
        return rec.left;
      }
  
      // ---------------- mouse movement --------------------------------------
  
      const onMouseDown = (e) => {
        drawing = true;
        current.x = (e.clientX || e.touches[0].clientX) - getLeftCanvasDif();
        current.y = (e.clientY || e.touches[0].clientY) - getTopCanvasDif();
      };
  
      const onMouseMove = (e) => {
        if (!drawing) { return; }
        drawLine(current.x, current.y, (e.clientX || e.touches[0].clientX) - getLeftCanvasDif(), (e.clientY || e.touches[0].clientY) - getTopCanvasDif(), current.color, true);
        current.x = (e.clientX || e.touches[0].clientX) - getLeftCanvasDif();
        current.y = (e.clientY || e.touches[0].clientY) - getTopCanvasDif(); 
      };
  
      const onMouseUp = (e) => {
        if (!drawing) { return; }
        drawing = false;
        drawLine(current.x, current.y, (e.clientX || e.touches[0].clientX) - getLeftCanvasDif(), (e.clientY || e.touches[0].clientY) - getTopCanvasDif(), current.color, true);
      };
  
      // ----------- limit the number of events per second -----------------------
  
      const throttle = (callback, delay) => {
        let previousCall = new Date().getTime();
        return function() {
          const time = new Date().getTime();
  
          if ((time - previousCall) >= delay) {
            previousCall = time;
            callback.apply(null, arguments);
          }
        };
      };
  
      // -----------------add event listeners to our canvas ----------------------
      if(userRole === APIs.roles[0]){
      canvas.addEventListener('mousedown', onMouseDown, false);
      canvas.addEventListener('mouseup', onMouseUp, false);
      canvas.addEventListener('mouseout', onMouseUp, false);
      canvas.addEventListener('mousemove', throttle(onMouseMove, 10), false);
  
      // Touch support for mobile devices
      canvas.addEventListener('touchstart', onMouseDown, false);
      canvas.addEventListener('touchend', onMouseUp, false);
      canvas.addEventListener('touchcancel', onMouseUp, false);
      canvas.addEventListener('touchmove', throttle(onMouseMove, 10), false);
    }
      // -------------- make the canvas fill its parent component -----------------
  
      const onResize = () => {
        // canvas.width = width;
        // canvas.height = height;
        if(userRole === APIs.roles[1]){
      //    window.devicePixelRatio=2;
      //   canvas.width = Math.floor(canvas.width * scale);
      //  canvas.height = Math.floor(canvas.height * scale);
       contexts?.drawImage(imageRef?.current, 0, 0, canvas.width, canvas.height)
        }else{
          //teacher panel
        //   window.devicePixelRatio=2;
        //   canvas.width = Math.floor(canvas.width * scale);
        //  canvas.height = Math.floor(canvas.height * scale);
         canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        contexts?.drawImage(imageRef?.current, 0, 0, canvas.width, canvas.height)
      }

      };
  
      window.addEventListener('resize', onResize, true);
      onResize();
  
      // ----------------------- socket.io connection ----------------------------
      const onDrawingEvent = (data) => {
        //console.log(data)
        const w = canvas.width;
        const h = canvas.height;
        drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
        // imageRef.current.crossOrigin = "Anonymous";
        // contexts?.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height)
      }
  
      socketRef.current = socket;
     socketRef.current?.on("draw", onDrawingEvent);
    }, [socket]);
  
    function GraphCMSImageLoader({ src, width }) {
      const relativeSrc = (src) => src.split("/").pop();
    
      return `${(src)}`;
    }

    const onDocumentLoadSuccess = () => {
      const importPDFCanvas = document.querySelector('.import-pdf-page canvas');
     setpdfAsImageSrc(importPDFCanvas.toDataURL());
     
    };

   
  

    return(
        <>



              {/* <video controls ref={videoRef}></video> */}
              <ToastContainer />
               {(userRole === APIs.roles[0])?
              <>
              {/* <button className='btn-success ' onClick={e=>{screenrecording == 0?startrecording():mediaRecorder?.stop();}}>{screenrecording == 0?"Start Recording":"Stop Recording"}</button> */}
              {mediaRecorderstatus?<div className="recordingbox">{mediaRecorderstatus}</div> :""}
              {mediaRecorderstatus?<div className="recordingbox">
                <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
              </div>:""}
                </>
              :""}
             
                {/* <img className="imagehide" ref={imageRef} src={`${APIs.base_url_home}${allimages?allimages[slidetime]?.imagePath:""}`} width="100" height="100" alt="test" /> */}
                <img className="imagehide" ref={imageRef} src={pdfAsImageSrc} width="100" height="100" alt="test" />
                <Document file={`${APIs.base_url_home}${pdffiledetails}`} onLoadSuccess={onDocumentLoadSuccesss}>
                                 <Page  className="import-pdf-page imagehide"
                                 onRenderSuccess={onDocumentLoadSuccess}
                                 pageNumber={pageNumber}   renderTextLayer={false}  />
                </Document>
                {(pollmodel)?
                <div className="modal showmodel" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">{pollmodel.question}?</h5>
                              <button type="button" className="close" onClick={()=>{setpollmodel(false)}} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body"> 
                              <button className="btn btn-success" onClick={()=>{submitpollanswer("option_1")}}>A</button>
                              <button className="btn btn-success" onClick={()=>{submitpollanswer("option_2")}}>B</button>
                              <button className="btn btn-success" onClick={()=>{submitpollanswer("option_3")}}>C</button>
                              <button className="btn btn-success" onClick={()=>{submitpollanswer("option_4")}}>D</button>
                              <button className="btn btn-success" onClick={()=>{submitpollanswer("option_5")}}>E</button>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                  :""}
                {/* <canvas ref={canvasRef} className="whiteboard" style={{
                          backgroundImage: `url(${APIs.base_url_home}${allimages?allimages[slidetime].imagePath:""})`,
                          width:"100%",
                          height:"100%",
                          backgroundRepeat: "repeat-y",
                          backgroundPosition: 'center',
                          backgroundSize: 'contain',
                      }}>

                      
                </canvas> */}

             
     
                <canvas ref={canvasRef} className="whiteboard" >   
                </canvas>
                
               {(userRole === APIs.roles[0])?
                        <>
                        <div ref={colorsRef} className="colors cursorlink">
                                <div className="color black" />
                                <div className="color red" />
                                <div className="color green" />
                                <div className="color blue" />
                                <div className="color yellow" />
                                <div className="color white" />   
                                

                                <div className="rightSide-color">
                                    <div className='leftslider' onClick={()=>{setPageNumber(pageNumber<numPages?++pageNumber:1)}}>
                                      <button className='uploadfile'></button>  
                                     
                                    </div>
                                    <div className='rightslider' onClick={()=>{setPageNumber(pageNumber==1?numPages:--pageNumber)}}>
                                   <button className='uploadfile'></button>
                                    </div>

                                    <div className="mcqpoll"  onClick={()=>{sendpoll()}}> 
                                    <FontAwesomeIcon icon={faSquarePollVertical}/>
                                    </div>
                                    <div className="mcqpoll2"> 
                                    Ques:{mcqNumber}
                                    </div>
                            

                                      {/* <div className='imageuploaded'>
                                      <input type="file" multiple onChange={(e)=>{uploadimages(e)}} className='uploadfile' title='image update' accept="image/*"/>
                                            
                                      </div> */}
                                      {/* {pdffiledetails?
                                        <div className="fileupload"> 
                                                 <input type="file" onChange={(e)=>{deletepdffile(e)}} className='uploadfile' title='delete' accept=".pdf"/> 
                                          </div>
                                       :
                                       <div className="fileupload"> 
                                       {progressbar == 1?
                                       <progress className="progressbarnew" id="file" value={progressbarpercentage} max="100"></progress>
                                       :""}
                                             <input type="file" onChange={(e)=>{sendpdffile(e)}} className='uploadfile'title='Upload'  accept=".pdf"/>
                                       </div>
                                       } */}
                                </div>     
                        </div>

                     </>    
                         
              :""}
        </> 
    )

}

export default Whiteboard;