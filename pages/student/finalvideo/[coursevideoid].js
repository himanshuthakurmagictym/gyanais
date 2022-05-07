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

      const canvas = canvasRef.current;
      const contexts = canvas.getContext('2d');
    
      refcanvassourse.current.addEventListener('play', function () {
        var $this = this; //cache
        (function loop() {
          
            if (!$this.paused && !$this.ended) {
              contexts.imageSmoothingEnabled = false;
              contexts.drawImage(refcanvassourse.current, 0, 0, canvas.width, canvas.height);
                setTimeout(loop, 1000 / 60); // drawing at 30fps
            }
        })();
    }, 0);

    },[])


    

    
  
    return (
        <>
        <Brudcrums />
              <section> 
              <div className="container-fluid">   
            
              <section className="testimonials2 topbrumb" id="testimonials2-e">   
                     
                <div className="container-fluid">
                           
                          <div className="row justify-content-center">  
                                              
                              <div className="card col-12 col-md-9 margintopminus">
                               <h2 className="mbr-fonts-style mbr-section-title align-center  display-2">{videodetails.roomid.video_title} </h2>
                               {videodetails?
                               <>
                               <video ref={refcanvassourse} src={`${APIs.base_url_home}${videodetails.filePath}`} controlsList="nodownload noplaybackrate " disablePictureInPicture className='recordedvideo' controls ></video>
                                
                               {/* <canvas ref={canvasRef} className='recordedvideo'> </canvas> */}
                               </>
                              // <CanvasVideo
                              //   autoPlay={true}
                              //   height={330}
                              //   loop={true}
                              //   muted={true}
                              //   ref="videocanvas"
                              //   src={videoSrc}
                              //   width={600}
                              // />
                              // {`${APIs.base_url_home}${videodetails.filePath}`}
                               :""}
                                 {/* <canvas ref={canvasRef}></canvas>     */}
                                
                              {/* <button onClick={onPlayBtnClick}>Play</button>
                              <button onClick={onPauseBtnClick}>Pause</button> */}
                              </div>
                              <div className="card col-12 col-md-3">
                                  <div className='rightside '>
                                        <div className='webcam'> 
                                       
                                        {camvideodetail?

                                           
                                        <video ref={refcanvassoursecam} src={`${APIs.base_url_home}${camvideodetail.filePath}`} controls className='recordedvideo'  controlsList="nodownload noplaybackrate " disablePictureInPicture></video>
                                        :""}
                                         <canvas> </canvas>                                    
                                        </div>
                                        <div className='roomchat'>
                                                {/* <Chatbox socket={socket} userid={userid} roomid={videodetails._id}/> */}
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
      console.log(coursevideoid);
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
    const camvideo = await resultcam.json()
   
        // Perform localStorage action
    //    const getuserid = datas.data.course_id.teacher_id;
    //    const userid = context.req.cookies['cid']
        
         //video is available in room id or not
        //  const resroom = await fetch(`${APIs.base_url}getroom/${coursevideoid}`);
        //  const isRoomid =await resroom.json();
           
        
       
           

    
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