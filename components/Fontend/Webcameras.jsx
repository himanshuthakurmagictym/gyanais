

import React, {useEffect, useRef} from 'react'
import { useRecordWebcam } from 'react-record-webcam'

function Webcameras() {

  const recordWebcam = useRecordWebcam();

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
  
  };
    
   
    const videoRef = useRef(null);

  useEffect(() => {
    recordWebcam.open
  }, []);

 

    return (
        <>
        {/* <video ref={videoRef} /> */}

        {/* <p>Camera status: {recordWebcam.status}</p> */}
      {/* <button onClick={recordWebcam.open}>Open camera</button>
      <button onClick={recordWebcam.start}>Start recording</button>
      <button onClick={recordWebcam.stop}>Stop recording</button>
      <button onClick={recordWebcam.retake}>Retake recording</button>
      <button onClick={recordWebcam.download}>Download recording</button>
      <button onClick={saveFile}>Save file to server</button> */}
    
     
       
        </>
    )
}

export default Webcameras
