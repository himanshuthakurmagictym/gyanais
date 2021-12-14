import Brudcrums from "../../components/Fontend/Brudcrums"
import React, { useRef, useEffect } from 'react';
import io from 'socket.io-client';
function Coursevideo() {
    const canvasRef = useRef(null);
    const colorsRef = useRef(null);
    const socketRef = useRef();
   


    return (
        <>
        <Brudcrums />
              <section> 
              <div className="container-fluid">   
              <section className="testimonials2 topbrumb" id="testimonials2-e">
            
              <div className="container-fluid">
                        <div className="row justify-content-center">     
                            
                        <div className="card col-12 col-md-9">
                            <div className='whiteboardmain'>
                                    <canvas className="whiteboard"></canvas>
                            </div>      
                            </div>
                            <div className="card col-12 col-md-3">
                                    <div className='rightside '>
                                    <div className='webcam'> dfd</div>
                                            <div className='roomchat'>
                                            <div className='heading'>Messages</div>
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
