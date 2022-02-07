

import React, {useEffect, useRef} from 'react'
// import { useRecordWebcam } from 'react-record-webcam'
import APIs from '../../config';

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" },
};

function Webcameras({socket, roomid, userRole}) {

  
const videoscream = useRef(null)

  useEffect(()=>{

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(stream => {
      console.log(stream)
      videoscream.current.srcObject = stream;
    })

    
  },[])


  function handleCanPlay() {
    videoscream.current.play();
  }
  // const recordWebcam = useRecordWebcam();

    return (
        <>
        <div className="camerabutton">
        
          {(userRole === APIs.roles[0])?
          <>
        {/* <button onClick={recordWebcam.open}>Open Camera</button>
       <button onClick={recordWebcam.stop}>Stop Camera</button> */}
       </>
       :""}
       </div>
      <video ref={videoscream} autoPlay muted width='100%' height='100%'/>
    
        </>
    )
}

export default Webcameras
