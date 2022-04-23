import React, { useRef, useState, useEffect } from 'react';
import Brudcrums from "../../../components/Fontend/Brudcrums";
import Link from 'next/link'
import APIs from '../../../config.js';
import {useAppContext} from '../../../components/Fontend/Layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import {io} from 'socket.io-client';
// import cookie from 'js-cookie'
import dynamic from 'next/dynamic'
import Chatbox from "../../../components/Fontend/Chatbox";
import Whiteboard from "../../../components/Fontend/Whiteboard";

const Webcamerasforst = dynamic(
  () => import('../../../components/Fontend/Webcameras'),
  { ssr: false }
)
const Whiteboarddyn = dynamic(
    () => import('../../../components/Fontend/Whiteboard'),
    { ssr: false }
  )


function Coursevideo({videodetails, userid, coursevideoid, roles, handleclassbutton, recordingwhiteboard}) {

    const isuser = useAppContext();
    const roomid= videodetails._id;
    const [users, setusers] = useState([])
    const [userdetail, setUserDetail] = useState("");
    
    const [handleclass, sethandleclass] = useState(handleclassbutton);
    const [socket, setSocket] = useState(null);


    useEffect(()=>{
        setSocket(io(APIs.base_url_home));
       
       },[])
    
       useEffect(()=>{
        setUserDetail(isuser);
       
    },[isuser])

    useEffect(()=>{
      
    },[handleclass])

    useEffect(()=>{
        
            //create room
            socket?.emit("create-session-room", { userid, coursevideoid })
            //getroom details
            socket?.on("get-session-room", (data)=>{
                if(data){    
                    // console.log(userdetail);
                    socket?.emit('join-session-room', { userdetail, coursevideoid, data });
                }

            });

       },[userdetail])
            
   
       useEffect(()=>{
        socket?.on("receivedclassbutton", (data)=>{
            sethandleclass(data);
          
        })
       },[socket])

    return (
        <>
  <Brudcrums />
    <section className="testimonials2 topbrumb" id="testimonials2-e"> 

                
             
               <div className="container-fluid"  id="screenrecorder">
                
                            <div className="row justify-content-center">  
                                         
                              <div className="card col-12 col-md-9">
                             
                               <h2 className="mbr-fonts-style mbr-section-title align-center  display-2">{videodetails.video_title} </h2>
                                 <div className='whiteboardmain'>
                                  <Whiteboarddyn socket={socket} roomid={videodetails._id} userRole={roles} coursevideoid={coursevideoid}/>   
                                  </div>  
                            </div>
                              <div className="card col-12 col-md-3">
                                  <div className='rightside '>
                                        <div className='webcam'> 
                                                <Webcamerasforst socket={socket} userid={userid} roomid={videodetails._id} userRole={roles} handleclassbutton={handleclassbutton}/>                                  
                                        </div>
                                        <div className='roomchat'>
                                                <Chatbox socket={socket} userid={userid} roomid={videodetails._id}/>
                                        </div>
                                  </div>      
                              </div> 
                          </div>                                         
                </div>
                
    </section>           
        </>
    )
}

export default Coursevideo
export const getServerSideProps = async (context) =>{
    const { params } = context;
    const {coursevideoid} = params;
   
    const res = await fetch(`${APIs.base_url}student/coursevideo/videoDetails/${coursevideoid}`);
    const datas = await res.json();
    //console.log(datas)
    
        // Perform localStorage action
    //    const getuserid = datas.data.course_id.teacher_id;
    //    const userid = context.req.cookies['cid']
        
         //video is available in room id or not
        //  const resroom = await fetch(`${APIs.base_url}getroom/${coursevideoid}`);
        //  const isRoomid =await resroom.json();
           
        //checking class over or not

 
       
           

    
        const URLS = APIs.base_url+"payment/status";
        //console.log(datas)
        const sendData = JSON.stringify({category_id: datas.data.category_id, user: context.req.cookies['cid'] })
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
            // if(paymentconfirm.status_code !== 200){
              
            //     return {
            //         redirect: {
            //         permanent: true,
            //         destination: `/student/subscription/${paymentconfirm.category_id}`,
            //       },
            //       props:{},
            //     }

              
            // }else{

                return {
                    props: {
                        videodetails: datas.data,
                        userid: context.req.cookies['cid'],
                        coursevideoid,
                        roles: context.req.cookies['role'],
                        handleclassbutton: datas.data.handleclassbutton,
                        recordingwhiteboard: datas.data.recordedVideo
                    }
                }

            // }
     
      


    
    //console.log(datas) 
   

}