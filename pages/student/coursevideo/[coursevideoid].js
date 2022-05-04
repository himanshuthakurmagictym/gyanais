import React, { useRef, useState, useEffect } from 'react';
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
import Whiteboard from "../../../components/Fontend/Whiteboard";

const Webcamerasforst = dynamic(
  () => import('../../../components/Fontend/Webcameras'),
  { ssr: false }
)



function Coursevideo({videodetails, userid, coursevideoid, roles, handleclassbutton}) {

    const isuser = useAppContext();
    const roomid= videodetails._id;
    const [users, setusers] = useState([])
    const [userdetail, setUserDetail] = useState("");
    const [socket, setSocket] = useState(null);
    const [handleclass, sethandleclass] = useState(handleclassbutton);
    

    useEffect(()=>{
        setSocket(io(APIs.base_url_home));
       },[])
    
       useEffect(()=>{
        setUserDetail(isuser);
    },[isuser])

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
              <section> 
              <div className="container-fluid">   
              {handleclass == 1?
              <section className="testimonials2 topbrumb" id="testimonials2-e">   
                     
                <div className="container-fluid">
                
                          <div className="row justify-content-center">  
                                                         
                              <div className="card col-12 col-md-9 margintopminus">
                               {/* <h2 className="mbr-fonts-style mbr-section-title align-center  display-2">{videodetails.video_title} </h2> */}
                                  <Whiteboard socket={socket} roomid={videodetails._id} userRole={roles} coursevideoid={coursevideoid} userid={userid}/>     
                              </div>
                              <div className="card col-12 col-md-3">
                                  <div className='rightside '>
                                        <div className='webcam'> 
                                                <Webcamerasforst socket={socket} roomid={videodetails._id} userRole={roles}/>                                  
                                        </div>
                                        <div className='roomchat'>
                                                <Chatbox socket={socket} userid={userid} roomid={videodetails._id}/>
                                        </div>
                                  </div>      
                              </div>
                          </div>                                         
                </div>
            </section>
            : 
        
        <section className="testimonials2 topbrumb classover" id="testimonials2-e">
        <div className="container">
                
                <div className="row justify-content-center">  
                                               
                    <div className="card col-12 col-md-12 text-center">
                        <h1 className="mbr-fonts-style mbr-section-title align-center  display-2">Class Will Start</h1>
                      <a href="/courses" className='btn btn-form btn-success'>Back To Courses</a>
                    </div>
                </div>
        </div>
        </section>
}
           
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
                        handleclassbutton: datas.data.handleclassbutton
                    }
                }

            }
     
      


    
    //console.log(datas) 
   

}