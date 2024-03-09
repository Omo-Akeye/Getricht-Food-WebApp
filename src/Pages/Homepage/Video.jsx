import React, { lazy, useRef, useState } from 'react'

export default function Video() {
    const videoRef = useRef(null);
    const [isPlaying, setPlaying] = useState(false);
  
    const handlePlayPause = () => {
      const video = videoRef.current;
  
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
  
      setPlaying(!isPlaying);
    };
  return (
    <div className='relative w-full h-screen'>
    <video ref={videoRef} className='absolute inset-0 object-cover w-full h-full' >
      <source src="/images/istockphoto-857947444-640_adpp_is.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <button className=' bg-primary' onClick={handlePlayPause}>
     <img src="/images/Play.png" alt="" className=' absolute  pointer md:left-[50%] top-[40%] left-[35%]' />
    </button>
  </div>
  )
}
