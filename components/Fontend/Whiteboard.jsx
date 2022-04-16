import React, { useRef, useEffect, useState } from 'react';
import APIs from '../../config';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import io from 'socket.io-client';


const Whiteboard = ({socket, roomid, userRole, coursevideoid}) =>{
    const canvasRef = useRef(null);
      const widref = useRef(null);  
    const colorsRef = useRef(null);
    const socketRef = useRef();
    const [pdffile, setFile] = useState("");
    const [allimages, setAllimages] = useState("");
    const [pdffiledetails, setpdffiledetails] = useState("");
    // const recordWebcam = useRecordWebcam();
    const notify = (data)=>{
      if(data.status_code === 200){
        // console.log(data);
         
          toast.success(data.message,{autoClose:2000});
      }else{
          toast.error(data.message,{autoClose:2000});
      }
    }

    const uploadimages = (e)=>{
     e.preventDefault();
        console.log(e.target.files)
      const uploadimage = APIs.base_url+"teacher/uploadimages" 
      fetch(uploadimage, {
        method: 'POST',
        headers: {
          "Content-Type":"application/json"
        },
        body:JSON.stringify({})
      })
    }

    const getpdfdetails = () => {
      const pdfdetails = APIs.base_url+"teacher/getpdfdetails";
      setpdffiledetails(pdfdetails)
    }
    const getallimages = () => {

      const allimagesAPI = APIs.base_url+"teacher/getallimages";
      const allImages =  fetch(allimagesAPI, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({roomid:roomid})
      })
      setAllimages(allimages)
    }

    const deletepdffile = ()=>{

      const deletepdffiledetails = fetch("teacher/deletePdfFile").then(res=> notify(res)).catch(err => console.log(err));
      
    }
    const sendpdffile = async(e)=>{
       e.preventDefault();
       setFile(e.target.files[0])
       console.log(e.target.files[0])
       console.log("pdf upload")
       const URLS = APIs.base_url+"teacher/videoPdfUpload/uploadfile";
      const body = new FormData();
        body.append("pdfName", e.target.files[0]);
        body.append("roomid", roomid);
        body.append("courseid", coursevideoid);
        body.append("videoid", roomid);
       

      //console.log(sendmaildata);
      const result = await fetch(URLS,{
          method: "POST",
          // headers: {
          //   'Accept': 'application/json',
          //   'Access-Control-Allow-Origin': '*',
          //    "Content-Type": "multipart/form-data",
          //   },
          body
      }).then(res => res.json()).then(res  => notify(res)).catch(err => console.log(err)); 

    }
  
    useEffect(() => {
  
      // --------------- getContext() method returns a drawing context on the canvas-----
        const parentref = widref.current;
  
      const canvas = canvasRef.current;
      const test = colorsRef.current;
      const contexts = canvas.getContext('2d');
   
      // ----------------------- Colors --------------------------------------------------
  
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
          contexts.lineWidth = 50;
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
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
         canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        // canvas.width = '600';
        // canvas.height = '600';

      };
  
      window.addEventListener('resize', onResize, false);
      onResize();
  
      // ----------------------- socket.io connection ----------------------------
      const onDrawingEvent = (data) => {
        //console.log(data)
        const w = canvas.width;
        const h = canvas.height;
        drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
      }
  
      socketRef.current = socket;
     socketRef.current?.on("draw", onDrawingEvent);
    }, [socket]);
  

    return(
        <>
                {allimages}
                {allimages?allimages.map((pdfImages)=>(
                console.log(pdfImages),
               <Image src={`${APIs.base_url}${pdfImages.imagePath}`}  layout="responsive" /> 
            )
            ):""}
                <canvas ref={canvasRef} className="whiteboard" > 
                </canvas>
               {(userRole === APIs.roles[0])?
              
                        <div ref={colorsRef} className="colors cursorlink">
                                <div className="color black" />
                                <div className="color red" />
                                <div className="color green" />
                                <div className="color blue" />
                                <div className="color yellow" />
                                <div className="color white" />   


                                <div className="rightSide-color">
                                      <div className='imageuploaded'>
                                      <input type="file" multiple onChange={(e)=>{uploadimages(e)}} className='uploadfile' title='image update' accept="image/*"/>
                                            
                                      </div>
                                      {pdffiledetails?
                                      <div className="fileupload"> 
                                            <input type="file" onChange={(e)=>{deletepdffile(e)}} className='uploadfile' title='delete' accept=".pdf"/>
                                      </div>
                                       :
                                       <div className="fileupload"> 
                                            <input type="file" onChange={(e)=>{sendpdffile(e)}} className='uploadfile'title='Upload'  accept=".pdf"/>
                                       </div>
                                       }
                                </div>     
                        </div>
                         
                         
              :""}
        </> 
    )

}

export default Whiteboard;