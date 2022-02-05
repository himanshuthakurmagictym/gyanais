

import React, {useEffect, useRef} from 'react'
import { useRecordWebcam } from 'react-record-webcam'
import APIs from '../../config';

function Webcameras({socket, roomid, userRole}) {

  const recordWebcam = useRecordWebcam();

    return (
        <>
        <div className="camerabutton">
        
          {(userRole === APIs.roles[0])?
          <>
        <button onClick={recordWebcam.open}>Open Camera</button>
       <button onClick={recordWebcam.stop}>Stop Camera</button>
       </>
       :""}
       </div>
      <video ref={recordWebcam.webcamRef} autoPlay muted width='100%' height='100%'/>
    
        </>
    )
}

export default Webcameras
