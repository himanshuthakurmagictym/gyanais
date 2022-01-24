import React, { useRef, useEffect } from 'react';
import Brudcrums from "../../../components/Fontend/Brudcrums";
import Link from 'next/link'
import APIs from '../../../config.js';
import {useAppContext} from '../../../components/Fontend/Layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

import dynamic from 'next/dynamic'
import Chatbox from "../../../components/Fontend/Chatbox";
import Whiteboard from "../../../components/Fontend/Whiteboard";

const Webcamerasforst = dynamic(
  () => import('../../../components/Fontend/Webcameras'),
  { ssr: false }
)

function Coursevideo({videodetails}) {
    
    return (
        <>
        <Brudcrums />
              <section> 
              <div className="container-fluid">   
              <section className="testimonials2 topbrumb" id="testimonials2-e">   
                     
                <div className="container-fluid">
                
                          <div className="row justify-content-center">  
                                                         
                              <div className="card col-12 col-md-9">
                               <h2 className="mbr-fonts-style mbr-section-title align-center  display-2">{videodetails.video_title} </h2>
                                  <Whiteboard />     
                              </div>
                              <div className="card col-12 col-md-3">
                                  <div className='rightside '>
                                        <div className='webcam'> 
                                                <Webcamerasforst />                                  
                                        </div>
                                        <div className='roomchat'>
                                                <Chatbox />
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

export default Coursevideo
export const getServerSideProps = async (context) =>{
    const { params } = context;
    const {coursevideoid} = params;
   
    const res = await fetch(`${APIs.base_url}student/coursevideo/videoDetails/${coursevideoid}`);
    const datas = await res.json()
    
        const URLS = APIs.base_url+"payment/status";
        //console.log(datas)
        const sendData = JSON.stringify({category_id: datas.data.category_id, user: context.req.cookies['cid'] })
       console.log(datas.data['category_id'])
        const ress = await fetch(URLS, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
            body:sendData,
        });
       
       const paymentconfirm =  await ress.json();
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
                    }
                }

            }
     
      


    
    //console.log(datas) 
   

}