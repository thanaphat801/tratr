import React, { useState, useRef ,useEffect } from "react";
import {Camera} from "react-camera-pro";

const Upload_1 = () => {
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);

  // useEffect(() => {
  //   const a = camera.current.getNumberOfCameras()
  //   console.log(a);
  //  }, [a]);



  const checkCamera = () => {
    if (camera.facingMode == 'user'){
      alert("1")
    } else {
      alert("user")

    }
  }
  function flipImage(image) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    // Load the image into a new Image object
    const img = new Image();
    img.src = image;
  
    // Wait for the image to load
    img.onload = () => {
      // Set the canvas to the same size as the image
      canvas.width = img.width;
      canvas.height = img.height;
  
      // Translate to the center of the canvas
      ctx.translate(img.width, 0);
  
      // Scale the x-axis by -1 to flip the image
      ctx.scale(-1, 1);
  
      // Draw the image onto the canvas
      ctx.drawImage(img, 0, 0);
    };
  
    // Return the data URL of the canvas
    return canvas.toDataURL();
  }

  return (
    <div className=" w-96 h-56">
     <Camera ref={camera}
     facingMode={'user'}
      aspectRatio={4 / 3} 
      numberOfCamerasCallback={setNumberOfCameras} 
      style={{ transform: 'scaleX(-1)' }}/>
     <img src={image} alt='Image preview' 
     className={`${numberOfCameras > 1 ? 'transform scale-x-[-1]' : ''}`}/>
<button
  onClick={() => {
    const photo = camera.current.takePhoto();
    if (camera.current.facingMode === 'user') {
      const flippedPhoto = flipImage(photo); // Assume you have a function to flip the image
      setImage(flippedPhoto);
    } else {
      setImage(photo);
    }
  }}
>
  Take photo
</button>
      <button
        hidden={numberOfCameras <= 1}
        onClick={()=>{
          camera.current.switchCamera();
        }}
      >
        Switch camera
      </button>

      <button
        onClick={checkCamera}
      >
       camera
      </button>
      
    </div>
  );
}

export default Upload_1;