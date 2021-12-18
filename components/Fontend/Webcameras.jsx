

import React, {useEffect, useRef} from 'react'
import { useRecordWebcam } from 'react-record-webcam'

function Webcameras() {

  const recordWebcam = useRecordWebcam();

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
  
  };
    
   
  //   const videoRef = useRef(null);

  // useEffect(() => {
  //   getVideo();
  // }, [videoRef]);

  // const getVideo = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: { width: 300 }, audio: true })
  //     .then(stream => {

        // var options = {
        //     audioBitsPerSecond: 128000,
        //     videoBitsPerSecond: 2500000,
        //     mimeType: 'video/mp4'
        //   }

        //   var mediaRecorder = new MediaRecorder(stream,options);
        //     m = mediaRecorder;

        //     m.mimeType; // would return 'video/mp4'

  //       let video = videoRef.current;
  //       video.srcObject = stream;
  //       video.play();
  //     })
  //     .catch(err => {
  //       console.error("error:", err);
  //     });
  // };

    return (
        <>
        {/* <video ref={videoRef} /> */}

        <p>Camera status: {recordWebcam.status}</p>
      <button onClick={recordWebcam.open}>Open camera</button>
      <button onClick={recordWebcam.start}>Start recording</button>
      <button onClick={recordWebcam.stop}>Stop recording</button>
      <button onClick={recordWebcam.retake}>Retake recording</button>
      <button onClick={recordWebcam.download}>Download recording</button>
      <button onClick={saveFile}>Save file to server</button>
      <video ref={recordWebcam.webcamRef} autoPlay muted />
      <video ref={recordWebcam.previewRef} autoPlay muted loop />
     
       
        </>
    )
}

export default Webcameras
