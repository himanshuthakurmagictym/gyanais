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


function Coursevideo({videodetails, userid, coursevideoid, roles, handleclassbutton, recordingwhiteboard, courseid}) {

    const isuser = useAppContext();
    const roomid= videodetails._id;
    const [users, setusers] = useState([])
    const [userdetail, setUserDetail] = useState("");
    const [screenrecordingstatus, setScreenrecordingstatus] = useState(null);
    const [handleclassstatus, sethandleclassstatus] = useState(handleclassbutton);
    const [handleclass, sethandleclass] = useState(handleclassbutton);
    const [socket, setSocket] = useState(null);
    const [Messagebar, setMessagebar] =useState("");
    const [streamstartstatus, setStreamstartstatus] =useState(2)
  


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

       useEffect(()=>{
        
            if(screenrecordingstatus === 1){
               

                if(Messagebar !== "Recording has been completed"){
                    setMessagebar("Please dont close or refresh the screen until data will save");
                }
            
                socket?.emit("recordingstatus", { userid, coursevideoid })
              
            }

            socket?.on("getrecordingdetails", (completeddata)=>{    
                setMessagebar(completeddata);
            });
           
       },[screenrecordingstatus][socket])


       

    return (
        <>
  <Brudcrums />
    <section className="testimonials2 topbrumb" id="testimonials2-e"> 

                
             
               <div className="container-fluid"  id="screenrecorder">
                
                            <div className="row justify-content-center">  
                                         
                              <div className="card col-12 col-md-9 margintopminus">
                             
                               {/* <h2 className="mbr-fonts-style mbr-section-title align-center  display-2">{videodetails.video_title} </h2> */}
                               {(roles === APIs.roles[0])?
                               <h2 className="mbr-fonts-style mbr-section-title align-center  display-2">{Messagebar} </h2>
                               :""}
                                 <div className='whiteboardmain'>
                                  <Whiteboarddyn socket={socket} roomid={videodetails._id} userRole={roles} course_id={courseid} coursevideoid={coursevideoid} userid={userid} screenrecordingstatus={screenrecordingstatus}/>   
                                  </div>  
                            </div>
                              <div className="card col-12 col-md-3">
                              {(roles === APIs.roles[0])?
                              <div className="camerabutton ">
                                  {/* <button className='btn-success ' onClick={e=>{screenrecordingstatus == 0?setScreenrecordingstatus(1):setScreenrecordingstatus(0);}}>{screenrecordingstatus == 0?"Start Recording":"Stop Recording"}</button> */}
                                {/* <button className='btn-success ' onClick={e=>{(setStreamstartstatus(1))}}>Open Camera</button>
                                <button className='btn-success ' onClick={e=>{setStreamstartstatus(2)}}>Stop Camera</button> */}
                                {/* <button className='btn-success ' onClick={e=>{(handleclassstatus == 0)? sethandleclassstatus(1):sethandleclassstatus(0), screenrecordingstatus == 0?setScreenrecordingstatus(1):setScreenrecordingstatus(0), streamstartstatus == 2?setStreamstartstatus(1):setStreamstartstatus(2) }}>{(handleclassstatus == 0)? "Start Class":"Stop Class"}</button> */}

                                {recordingwhiteboard == 1?
                                <>
                                {handleclassstatus == 0?
                                <button className='btn-success ' onClick={e=>{ sethandleclassstatus(1), setScreenrecordingstatus(0), setStreamstartstatus(1) }}>Start Class</button>
                                :<button className='btn-success ' disabled>Start Class</button>}
                                {handleclassstatus == 1?
                                <button className='btn-success ' onClick={e=>{ sethandleclassstatus(2), setScreenrecordingstatus(1), setStreamstartstatus(2)}}>Stop Class</button>
                                :<button className='btn-success ' disabled>Stop Class</button>}
                                </>:
                                <>
                                {handleclassstatus == 0?
                                <button className='btn-success ' onClick={e=>{ sethandleclassstatus(1),  setStreamstartstatus(1) }}>Start Class</button>
                                :<button className='btn-success ' disabled>Start Class</button>}
                                {handleclassstatus == 1?
                                <button className='btn-success ' onClick={e=>{ sethandleclassstatus(2),  setStreamstartstatus(2)}}>Stop Class</button>
                                :<button className='btn-success ' disabled>Stop Class</button>}
                                </>}

                                </div>
                                :""}



                                  <div className='rightside '>
                                        <div className='webcam'> 
                                                <Webcamerasforst socket={socket} userid={userid} roomid={videodetails._id} userRole={roles} handleclassbutton={handleclassstatus} course_id={courseid} streamstartstatus={streamstartstatus} screenrecordingstatus={screenrecordingstatus}/>                                  
                                        </div>
                                        <div className='roomchat'>
                                                <Chatbox socket={socket} userid={userid} roomid={videodetails._id} userRole={roles}/>
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
    // console.log(datas)
    
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
            //course_id     }

              
            // }else{

                return {
                    props: {
                        videodetails: datas.data,
                        courseid: datas.data.course_id?._id,
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