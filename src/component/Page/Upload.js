import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Camera } from "react-camera-pro";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import bg_upload from "../image/bg_upload.jpg";

const Upload_4 = () => {
  const camera = useRef(null);
  const [openphoto, setOpenphoto] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null); // สร้างตัวแปรอ้างอิง
  const [images, setImages] = useState([]); // Define images state

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handlePhotoClick = async () => {
    setOpenphoto(true);
  };

  const errorMessages = {
    noCameraAccessible: 'ไม่พบกล้อง กรุณากดปุ่ม รีเฟรชหน้าจอ เพื่อย้อนกลับไปหน้าแรก',
    permissionDenied: 'ไม่ได้รับอนุญาตให้เข้าถึงกล้อง กรุณาอนุญาตให้เข้าถึงกล้อง',
    switchCamera: 'ไม่สามารถสลับกล้องได้ กรุณาลองใหม่อีกครั้ง',
    canvasError: 'เกิดข้อผิดพลาดในการแสดงภาพ กรุณาลองใหม่อีกครั้ง',
  };

  const switchCamera = () => {
    camera.current.switchCamera();
  };

  const handleCaptureClick = async () => {
    if (camera.current) {
      const photoUrl = await camera.current.takePhoto();
      fetch(photoUrl)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], 'image.png', { type: 'image/png', lastModified: Date.now() });
          setPhoto(file);
          const previewUrl = URL.createObjectURL(file);
          setPreviewUrl(previewUrl);
          setOpenphoto(false);
        })
        .catch(error => {
          console.error('Error fetching and converting photo:', error);
        });
    }
    if (camera.current && camera.current.video) {
      const stream = camera.current.video.srcObject;
      if (stream) {
          stream.getTracks().forEach(track => track.stop());
      }
  }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Generate a preview URL for the selected file
    const previewUrl = URL.createObjectURL(file);
    setPreviewUrl(previewUrl);
    // Reset the value of the file input to allow the same file to be uploaded again
    event.target.value = null;
  };

  const handleCancel = () => {
    if (camera.current && camera.current.video) {
      const stream = camera.current.video.srcObject;
      if (stream) {
          stream.getTracks().forEach(track => track.stop());
      }
  }
    setSelectedFile(null);
    setPreviewUrl("");
    setIsSubmitted(false);
    setPhoto(null);
    setOpenphoto(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile && !photo) return;

    const formData = new FormData();
    const fileToUpload = selectedFile ? selectedFile : photo;
    formData.append("image", fileToUpload, fileToUpload.name);

    axios
      .post("http://127.0.0.1:5000/search_image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("File uploaded successfully:", response.data);

        const images = response.data.results.map((result) => {
          return {
            filename: result.filename,
            topic: result.topic,
            description: result.description,
            image: result.image,
          };
        });

        setImages(images);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  return (
    <div className="relative">
      <img
        src={bg_upload}
        alt="Background Image"
        className="opacity-50 w-screen h-screen object-cover"
      ></img>

      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <div className="text-2xl mb-2 md:text-4xl lg:text-5xl sm:mb-4 md:mb-10 text-center font-prompt ">
          ระบบค้นหาด้วยภาพ
        </div>

        <div className="text-2xl mb-2 md:text-4xl lg:text-5xl sm:mb-4 md:mb-10 text-center font-prompt ">
          สำหรับวัดปรมัยยิกาวาส
        </div>

        <div className="text-lg mb-3 sm:text-xl md:text-2xl lg:text-3xl sm:mb-4 md:mb-10 text-center font-prompt">
          อัพโหลดรูป แล้วค้นพบเรื่องราวที่ซ่อนอยู่ในรูปภาพของคุณ
        </div>

        <div className="w-[350px] flex justify-between">
          <Button
            variant="gradient"
            color="amber"
            className={`font-prompt text-xl hover:-translate-y-1 hover:scale-110 rounded-full ${windowWidth > 540 ? " w-40 h-14" : " w-40 h-14"} `}
            onClick={handlePhotoClick}
          >
            ถ่ายรูป
          </Button>

          <Button
            variant="gradient"
            color="blue"
            className={`font-prompt text-xl hover:-translate-y-1 hover:scale-110 rounded-full ${windowWidth > 540 ? " w-40 h-14" : " w-40 h-14"} `}
            onClick={handleButtonClick}
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef} // เชื่อมตัวแปรอ้างอิงกับ input
              onChange={handleFileChange}
            />
            อัปโหลดรูป
          </Button>
        </div>

        {/* การทำงานในส่วนของ PopUp ถ่ายรูป เมื่อทำการกดปุ่มแล้วเด้ง PopUp */}
        {openphoto && (
          <Dialog open={true} size={"xxl"}>
            <img
              src={bg_upload}
              alt="Background Image"
              className="opacity-50 w-screen h-screen object-cover"
            />
            <div className="absolute flex items-center justify-center w-screen h-screen">
              <div className="flex flex-col items-center justify-center rounded-xl shadow-lg bg-white w-[550px] h-[650px] ">
                
                <Camera ref={camera}
                  facingMode={'environment'}
                  aspectRatio={4 / 3}
                  errorMessages={errorMessages}
                />

                <div className="mt-4 flex justify-around w-full">
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleCancel}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>

                  <Button
                    onClick={handleCaptureClick}
                  >
                    <span>Capture</span>
                  </Button>

                  <Button
                    color="blue"
                    onClick={switchCamera}>
                    <span>สลับกล้อง</span>
                  </Button>
                </div>
              </div>
            </div>
          </Dialog>
        )}

        {/* เมื่อทำการถ่ายรูปแล้วจะเด้ง PopUp นี้ เพื่อทำการ Preview ดูภาพก่อนทำการ Search 
            เงื่อนไขคือ มีรูปภาพที่ได้จากการถ่าย ยังไม่กดปุ่ม Search*/}
        {photo && !isSubmitted && (
          <Dialog open={true} size={"xxl"}>
            <img
              src={bg_upload}
              alt="Background Image"
              className="opacity-50 w-screen h-screen object-cover"
            />

            <div className="absolute flex items-center justify-center w-screen h-screen">
              <div className="flex flex-col items-center justify-center rounded-xl shadow-lg bg-white w-[550px] h-[650px] ">
                <img
                  src={previewUrl} // Use the previewUrl as the src of the img tag
                  alt="Preview"
                  className="w-96 sm:w-[500px]  "
                  style={{ transform: 'scaleX(-1)' }} // สลับด้านซ้าย-ขวาของภาพ Preview
                />
                <DialogFooter className="mt-4">
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleCancel}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button
                    type="submit"
                    variant="gradient"
                    color="green"
                    onClick={handleSubmit}
                  >
                    <span>Search</span>
                  </Button>
                </DialogFooter>
              </div>
            </div>
          </Dialog>
        )}

        {/* เมื่อทำการอัพโหลดรูปแล้วจะเด้ง PopUp นี้ เพื่อทำการ Preview ดูภาพก่อนทำการ Search 
            เงื่อนไขคือ มี URLรูปภาพที่ได้จากการอัพโหลด ไม่มีรูปที่ได้จากการถ่ายรูป ยังไม่กดปุ่ม Search*/}

        {previewUrl && !photo && !isSubmitted && (
          <Dialog open={true} size={"xxl"}>
            <img
              src={bg_upload}
              alt="Background Image"
              className="opacity-50 w-screen h-screen object-cover"
            />

            <div className="absolute flex items-center justify-center w-screen h-screen">
              <div className="flex flex-col items-center justify-center rounded-xl shadow-lg bg-white w-[550px] h-[650px] ">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="mt-8 max-w-96 max-h-80"
                />
                <DialogFooter className="mt-4">
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleCancel}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button
                    type="submit"
                    variant="gradient"
                    color="green"
                    onClick={handleSubmit}
                  >
                    <span>Search</span>
                  </Button>
                </DialogFooter>
              </div>
            </div>
          </Dialog>
        )}

        {/* เมื่อทำการกดปุ่ม Search แล้วให้เด้งหน้านี้
            เงื่อนไขคือ isSubmitted = True */}

        {isSubmitted && (
          <Dialog open={true} size="xxl">
            <img
              src={bg_upload}
              alt="Background Image"
              className="opacity-50 w-screen h-screen object-cover"
            />
            <div className="absolute flex items-center justify-center w-screen h-screen object-cover">

              <DialogBody className="flex flex-col items-center mt-4">

                {images.map((image, index) => (

                  <div
                    key={index}
                    className="bg-white max-w-[550px] max-h-[800px] flex flex-col items-center justify-center rounded-xl shadow-lg sm:px-10"
                  >
                    <img
                      src={`data:image/jpeg;base64,${image.image}`}
                      alt="Preview"
                      className="my-10 max-w-80 max-h-80 shadow-2xl "
                    />

                    <p className="mb-2 text-center text-base font-sarabun text-black tracking-wide font-semibold">
                      {image.topic}
                    </p>

                    <p className="px-5 sm:px-0 mb-5 text-base text-balance font-sarabun text-black tracking-wide leading-relaxed whitespace-pre-wrap break-words ">
                      {image.description}
                    </p>

                    <Button
                      variant="text"
                      color="red"
                      onClick={handleCancel}
                      className="mb-2"
                    >
                      Leave
                    </Button>

                  </div>
                ))}
              </DialogBody>
            </div>
          </Dialog>
        )}
      </div>
    </div>
  );
};
export default Upload_4;
