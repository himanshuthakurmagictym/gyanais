import { useRecordWebcam } from 'react-record-webcam'
import React from 'react'

function webcamera() {
    const recordWebcam = useRecordWebcam();
    return (
        <>
          <p>Camera status: {recordWebcam.status}</p>
      <button onClick={recordWebcam.open}>Open camera</button>
      <button onClick={recordWebcam.start}>Start recording</button>   
        </>
    )
}

export default webcamera
