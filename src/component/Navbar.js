import React, { useState, useEffect } from "react";
import axios from "axios";
import {
 Navbar,
 MobileNav,
 Button,
 IconButton,
 Textarea,
 Avatar,
 Dialog,
 Rating,
} from "@material-tailwind/react";
import temple2 from "./image/temple2.jpg";
function Navbar_1() {
 const [openNav, setOpenNav] = useState(false);
 const [openpopup, setOpenpopup] = useState(false);
 const [comment, setComment] = useState("");
 const [rated, setRated] = useState(0);

 useEffect(() => {
  
  window.addEventListener(
   "resize",
   () => window.innerWidth >= 960 && setOpenNav(false)
  );
 }, []);

 const handleSubmit = (e) => {
  e.preventDefault();
  if (rated === 0) {
    alert('โปรดให้คะแนนโดยการกดดาว');
    return;
  }

  const formData = new FormData();
  formData.append("rate", rated);
  formData.append("comment", comment);

  axios
   .post("http://127.0.0.1:5000/form", formData)
   .then((res) => {
    console.log(res);
    setOpenpopup(false);
    setComment(''); // reset comment
    setRated(0); // reset rated
   })
   .catch((err) => {
    console.log(err);
   });
   setOpenpopup(false);
 };


 /// navList คือ icon ต่างๆ ที่อยู่บน Navbar
 const navList = (
  <div className="mt-2 mb-4 flex flex-col ">
   <div className="flex items-center my-2">

    <svg
     xmlns="http://www.w3.org/2000/svg"
     x="0px"
     y="0px"
     width="30"
     height="30"
     viewBox="0 0 48 48"
    >
     <linearGradient
      id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
      x1="9.993"
      x2="40.615"
      y1="9.993"
      y2="40.615"
      gradientUnits="userSpaceOnUse"
     >
      <stop offset="0" stop-color="#2aa4f4"></stop>
      <stop offset="1" stop-color="#007ad9"></stop>
     </linearGradient>
     <path
      fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
      d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
     ></path>
     <path
      fill="#fff"
      d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
     ></path>
    </svg>

    <a
     className=" text-black font-prompt text-lg"
     target="_blank"
     rel="noopener noreferrer"
    >
     วัดปรมัยยิกาวาส วรวิหาร
    </a>
    <a
     href="https://www.facebook.com/WatPoramai/"
     className=" text-deep-orange-400 font-prompt text-lg hover:underline ml-2"
     target="_blank"
     rel="noopener noreferrer"
    >
     คลิกที่นี่
    </a>
   </div>

   <p className="flex items-center gap-x-2 p-1 font-prompt text-lg text-black" >
    <a
     href="#"
     className="flex items-center"
     onClick={() => setOpenpopup(!openpopup)}
    >
     แบบประเมินความพึงพอใจ
    </a>
   </p>
  </div>
 );

 return (
  <Navbar className="max-w-full px-8 py-2 md:px-8 md:py-4">
   <div className="container max-w-[1300px] mx-auto flex flex-wrap items-center justify-between text-blue-gray-900 ">
    <div className="flex">
     <Avatar src={temple2} alt="avatar" size="md" className=" mr-4" />
     <div className="text-lg sm:text-2xl mr-4 cursor-pointer py-1.5 font-prompt">
      วัดปรมัยยิกาวาส นนทบุรี
     </div>
    </div>

    <div className="hidden lg:block">
     <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <p className="flex items-center gap-x-2 p-1 font-prompt text-lg">
       <a
        href="#"
        className="flex items-center"
        onClick={() => setOpenNav(!openNav)}
       >
        ติดต่อ
       </a>
      </p>

      <p className="flex items-center gap-x-2 p-1 font-prompt text-lg">
       <a
        href="#"
        className="flex items-center"
        onClick={() => setOpenpopup(!openpopup)}
       >
        แบบประเมินความพึงพอใจ
       </a>
      </p>
     </ul>
    </div>

    <IconButton
     variant="text"
     className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
     ripple={false}
     onClick={() => setOpenNav(!openNav)}
    >
     {openNav ? (
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       className="h-6 w-6"
       viewBox="0 0 24 24"
       stroke="currentColor"
       strokeWidth={2}
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
       />
      </svg>
     ) : (
      <svg
       xmlns="http://www.w3.org/2000/svg"
       className="h-6 w-6"
       fill="none"
       stroke="currentColor"
       strokeWidth={2}
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
       />
      </svg>
     )}
    </IconButton>
   </div>

   <MobileNav open={openNav}>
    <div className=" max-w-[1200px] mx-auto">{navList}</div>
   </MobileNav>

   {/* แบบฟอร์มประเมินความพึงพอใจ */}
   {openpopup && (
    <Dialog open={true} size={"xs"}>
     {/* icon กากบาท ทำการปิดแบบฟอร์ม */}
     <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className=" ml-auto mr-2 h-7 w-7 cursor-pointer"
      onClick={() => setOpenpopup(!openpopup)}
     >
      <path
       fillRule="evenodd"
       d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
       clipRule="evenodd"
      />
     </svg>

     <div className="flex flex-col items-center justify-center px-4" >

      <p className="text-2xl text-center font-prompt text-black">
       แบบประเมินความพึงพอใจ
      </p>

      <p className="text-lg text-center font-prompt text-black">
       ให้คะแนนโดยการกดดาว
      </p>

      <Rating onChange={(value) => setRated(value)} className=" mb-4" />

      <Textarea 
       size="lg" 
       variant="outlined" 
       label="คำแนะนำ" 
       value={comment} 
       onChange={(e) => setComment(e.target.value)}/>

      <Button variant="gradient" color="green" className="my-4" onClick={handleSubmit}>
       ส่งแบบประเมิน
      </Button>
     </div>
    </Dialog>
   )}
  </Navbar>
 );
}

export default Navbar_1;
