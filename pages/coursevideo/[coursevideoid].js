import React, { useRef, useEffect } from 'react';
import Brudcrums from "../../components/Fontend/Brudcrums";


import dynamic from 'next/dynamic'
import Chatbox from "../../components/Fontend/Chatbox";
import Whiteboard from "../../components/Fontend/Whiteboard";

const Webcamerasforst = dynamic(
  () => import('../../components/Fontend/Webcameras'),
  { ssr: false }
)

function Coursevideo() {
    
    return (
        <>
        <Brudcrums />
              <section> 
              <div className="container-fluid">   
              <section className="testimonials2 topbrumb" id="testimonials2-e">            
                <div className="container-fluid">
                          <div className="row justify-content-center">                                 
                              <div className="card col-12 col-md-9">
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
