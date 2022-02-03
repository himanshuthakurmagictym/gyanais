

import React, {useEffect, useRef} from 'react'
import { useRecordWebcam } from 'react-record-webcam'

function Webcameras({socket, roomid}) {

  const recordWebcam = useRecordWebcam();


 

    return (
        <>
        <div className="camerabutton">
        <button onClick={recordWebcam.open}>Open Camera</button>
       <button onClick={recordWebcam.stop}>Stop Camera</button>
       </div>
      <video ref={recordWebcam.webcamRef} autoPlay muted width='100%' height='100%'/>
    
        </>
    )
}

export default Webcameras
