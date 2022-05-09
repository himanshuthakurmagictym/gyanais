import React, { useRef, useState, useEffect, MutableRefObject } from 'react';
import Brudcrums from "../../../components/Fontend/Brudcrums";
import Link from 'next/link'
import APIs from '../../../config.js';
import {useAppContext} from '../../../components/Fontend/Layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import {io} from 'socket.io-client';
import cookie from 'js-cookie'
import dynamic from 'next/dynamic'
import Chatbox from "../../../components/Fontend/Chatbox";
import CanvasVideo from "../../../components/student/CanvasVideo"


function finalvideo({videodetails, userid, coursevideoid, roles, course_id, camvideodetail}) {

    const isuser = useAppContext();
    const roomid= videodetails._id;
    const [users, setusers] = useState([])
    const [userdetail, setUserDetail] = useState("");
    const [socket, setSocket] = useState(null);
    const canvasRef = useRef(null);
    const refcanvassourse = useRef(null);
    const refcanvassoursecam = useRef(null);
   
 
   
    
    useEffect(() => {
      refcanvassourse.current.onplay = () => {
        refcanvassoursecam.current.play();
      };
      refcanvassourse.current.onpause = () => {
        refcanvassoursecam.current.pause();
      };

      refcanvassourse.current.onpause = () => {
        refcanvassoursecam.current.pause();
      };

      refcanvassourse.current.onseeked = () => {
        refcanvassoursecam.current.currentTime = refcanvassourse.current.currentTime;
      };
      refcanvassoursecam.current.controls = false;

    //   const canvas = canvasRef.current;
    //   const contexts = canvas.getContext('2d');
      
    //   window.devicePixelRatio=2; //Clear Text
    //   var scale = window.devicePixelRatio; 
    //   var sizeWidth = refcanvassourse.current.offsetWidth;
    //   var sizeHeight = refcanvassourse.current.offsetHeight;
    //   // canvas.style.width = sizeWidth + "px";
    //   //   canvas.style.height = sizeHeight + "px";
    //     canvas.width = Math.floor(sizeWidth * scale);
    //     canvas.height = Math.floor(sizeHeight * scale);
    
    //   refcanvassourse.current.addEventListener('play', function () {
    //     var $this = this; //cache
    //     (function loop() {
          
    //         if (!$this.paused && !$this.ended) {
    //           contexts.imageSmoothingEnabled = false;
    //           contexts.drawImage(refcanvassourse.current, 0, 0, canvas.width, canvas.height);
    //             setTimeout(loop, 1000 / 60); // drawing at 30fps
    //         }
    //     })();
    // }, 0);

    },[])


    

    
  
    return (
        <>
        <Brudcrums />
              <section> 
              <div className="container-fluid">   
            
              <section className="testimonials2 topbrumb" id="testimonials2-e">   
                     
                <div className="container-fluid">
                           
                          <div className="row justify-content-center">  
                                              
                              <div className="card col-12 col-md-9 ">
                               <h2 className="mbr-fonts-style mbr-section-title align-center  display-2">{videodetails.roomid.video_title} </h2>
                               {videodetails?
                               <>
                               

                               {/* <video id="videoPlayer" width="650" controls muted="muted" autoplay>
                            <source src="http://localhost:5000/api/student/avideo/626a6e47cbb930097135efb9" type="video/webm" />
                            </video> */}


                               <video ref={refcanvassourse} src={`${APIs.base_url}student/avideo/${videodetails.roomid._id}`} controlsList="nodownload noplaybackrate " disablePictureInPicture className='recordedvideo' controls ></video>
                               </>
                               :""}
                                 {/* <canvas ref={canvasRef}></canvas>     */}
                                
                         
                              </div>
                              <div className="card col-12 col-md-3">
                                  <div className='rightside '>
                                        <div className='webcam'> 
                                       
                                        {camvideodetail?

                                           
                                        <video ref={refcanvassoursecam} src={`${APIs.base_url}student/camvideo/${camvideodetail.roomid._id}`} controls className='recordedvideo'  controlsList="nodownload noplaybackrate " disablePictureInPicture></video>
                                        :""}
                                                                         
                                        </div>
                                        <div className='roomchat'>
                                                <Chatbox socket={socket} userid={userid} roomid={videodetails._id} userRole={roles}/>
                                        </div>
                                  </div>      
                              </div>
                          </div>                                         
                </div>
            </section>
           
           
              </div>
           </section>
        </> 
           
    )
}

export default finalvideo
export const getServerSideProps = async (context) =>{
    const { params } = context;
    const {coursevideoid} = params;

    const res = await fetch(`${APIs.base_url}student/recordedvideodetail`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify({roomid:coursevideoid}),
    });
    const datas = await res.json()

    const resultcam = await fetch(`${APIs.base_url}student/recordedcamvideodetail`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify({roomid:coursevideoid}),
    });
    const camvideo = await resultcam.json(); 
        const URLS = APIs.base_url+"payment/status";
        //console.log(datas)
        const sendData = JSON.stringify({category_id: datas.data?.roomid?.category_id, user: context.req.cookies['cid'] })
      // console.log(sendData)
        const ress = await fetch(URLS, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
            body:sendData,
        });
       
       const paymentconfirm =  await ress.json();
       //console.log(paymentconfirm)
            if(paymentconfirm.status_code !== 200){
              
                return {
                    redirect: {
                    permanent: true,
                    destination: `/student/subscription/${paymentconfirm.category_id}`,
                  },
                  props:{},
                }

              
            }else{

                return {
                    props: {
                        videodetails: datas.data,
                        userid: context.req.cookies['cid'],
                        coursevideoid,
                        roles: context.req.cookies['role'],
                        course_id: datas.data.roomid.course_id,
                        camvideodetail:camvideo.data
                    }
                }

            }
     
      


    
    //console.log(datas) 
   

}