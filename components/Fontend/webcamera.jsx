

import React, {useEffect, useRef} from 'react'
import useScreenRecorder from "use-screen-recorder";

function Webcamera() {

   
    
   
    const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 }, audio: true })
      .then(stream => {

        var options = {
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: 2500000,
            mimeType: 'video/mp4'
          }

          var mediaRecorder = new MediaRecorder(stream,options);
            m = mediaRecorder;

            m.mimeType; // would return 'video/mp4'

        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

    return (
        <>
        <video ref={videoRef} />
     
       
        </>
    )
}

export default Webcamera
