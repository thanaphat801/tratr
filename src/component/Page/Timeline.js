import React, { useEffect, useState } from "react";
import บูรณะวัด from "../image/บูรณะวัด.png";
import วัดปากอ่าว from "../image/วัดปรมัยยิกาวาส.jpg";
import วัดรามัญ from "../image/วัดรามัญ.jpg";
import วัดบางพัง from "../image/วัดบางพัง.jpg";
import วัดสนามเหนือ from "../image/วัดสนามเหนือ.JPEG";
import icon_torah from "../image/icon_torah.png";
function Timeline_1() {
  // const [color, setColor] = useState('bg-blue-gray-50');

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;

  //     if (scrollPosition >= 100) {
  //       setColor('bg-red-400');
  //     } else {
  //       setColor('bg-blue-gray-50');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // ทำคืนค่าเมื่อ component ถูก unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []); // ใช้ array ว่างเพื่อให้ useEffect ทำงานเมื่อ component ถูก mount ครั้งแรก

  return (


 <div className="bg-blue-gray-50">
  <div className="container mx-auto p-6 ">
    <h2 className="text-5xl font-prompt font-bold text-center text-gray-900 mb-8">Timeline</h2>

    <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-gray-900 relative">
      
      {/* First Event */}
      <div className="flex md:contents">
        <div className="hidden md:flex justify-center items-center col-start-1 col-end-5 text-gray-900 text-3xl font-prompt">
          พ.ศ. 2264
        </div>
        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
        </div>
        <div className="bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border border-gray-200">
          <h3 className="md:hidden font-prompt text-gray-900 text-xl mb-1">
            พ.ศ. 2264
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15491.08289459334!2d100.4899559!3d13.9126482!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e284fc09583b53%3A0x703a5fab4ab110e6!2z4Lin4Lix4LiU4Lib4Lij4Lih4Lix4Lii4Lii4Li04LiB4Liy4Lin4Liy4LiqIOC4meC4meC4l-C4muC4uOC4o-C4tQ!5e0!3m2!1sth!2sth!4v1713352650351!5m2!1sth!2sth"
            className="mx-auto w-full h-[200px] my-2 shadow-xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          <p className=" flex leading-relaxed sm:leading-normal md:leading-loose  text-gray-700 mt-6 font-sarabun ">
          <img src={icon_torah} className="w-7 h-7 mr-2 "/>
            วัดปรมัยยิกาวาสเป็นวัดโบราณ น่าจะสร้างหลังจากสมเด็จพระที่นั่งท้ายสระ โปรดให้ขุดคลอง ชาวเรือเรียก "วัดปากอ่าว"
          </p>

        </div>
      </div>

      {/* Second Event */}
      <div className="flex md:contents">
        <div className="hidden md:flex justify-center items-center col-start-1 col-end-5 text-gray-900 text-3xl font-prompt">
          พ.ศ. 2307
        </div>
        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
        </div>
        <div className="bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border border-gray-200">
          <h3 className="md:hidden font-prompt text-gray-900 text-base mb-1">
            พ.ศ. 2307
          </h3>
          <p className="flex leading-relaxed sm:leading-normal md:leading-loose  text-gray-700 font-sarabun">
          <img src={icon_torah} className="w-7 h-7 mr-2"/>
            พม่าบุกยึดเมืองนนทบุรี กลายเป็นวัดร้าง
          </p>
        </div>
      </div>

      {/* Third Event */}
      <div className="flex md:contents">
        <div className="hidden md:flex justify-center items-center col-start-1 col-end-5 text-gray-900 text-3xl font-prompt">
          พ.ศ. 2317
        </div>
        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
        </div>
        <div className="bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border border-gray-200">
          <h3 className="md:hidden font-prompt text-gray-900 text-base mb-1">
            พ.ศ. 2317
          </h3>
          <img
            src={บูรณะวัด}
            className="mx-auto w-auto md:h-[200px] lg:h-[300px] shadow-xl hover:scale-110 hover:duration-150"
            alt="บูรณะวัด"
          />
          <p className="flex leading-relaxed sm:leading-normal md:leading-loose  text-gray-700 mt-6 font-sarabun">
          <img src={icon_torah} className="w-7 h-7 mr-2"/>
            ชาวมอญที่อพยพมาในรัชสมัยสมเด็จพระเจ้ากรุงธนบุรี ได้บูรณ์ปฏิสังขรณ์ใหม่คนมอญเรียกว่า "เภี่ยมุเกี๊ยะเติ้ง" แปลว่า วัดแหลมที่ยื่นไปในน้ำ
          </p>
        </div>
      </div>

      {/* Fourth Event */}
      <div className="flex md:contents">
        <div className="hidden md:flex justify-center items-center col-start-1 col-end-5 text-gray-900 text-3xl font-prompt">
          พ.ศ. 2417
        </div>
        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
        </div>
        <div className=" bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border border-gray-200">
          <h3 className="md:hidden font-prompt text-gray-900 text-base mb-1">
            พ.ศ. 2417
          </h3>
          <div className="flex flex-wrap justify-center items-center">
            <img
              src={วัดปากอ่าว}
              className="w-[200px]  md:w-[250px] md:h-[200px] mb-3 mx-2 shadow-xl hover:scale-125 hover:duration-150"
              alt="วัดปากอ่าว"
            />
            <img
              src={วัดรามัญ}
              className="w-[200px]  md:h-auto mb-3 mx-2 shadow-xl hover:scale-125 hover:duration-150"
              alt="วัดรามัญ"
            />
            <img
              src={วัดบางพัง}
              className="w-[200px]  md:h-auto mb-3 mx-2 shadow-xl hover:scale-125 hover:duration-150"
              alt="วัดบางพัง"
            />
            <img
              src={วัดสนามเหนือ}
              className="w-[200px]  md:h-auto mb-3 mx-2 shadow-xl hover:scale-125 hover:duration-150"
              alt="วัดสนามเหนือ"
            />
          </div>
          <p className="flex leading-relaxed sm:leading-normal md:leading-loose  text-gray-700 mt-6 font-sarabun">
          <img src={icon_torah} className="w-7 h-7 mr-2"/>
            พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว เสด็จพระราชดำเนินทอดกฐินวัดมอญ 4 วัด ได้แก่ วัดปากอ่าว วัดรามัญ (วัดเกาะพญาเจ่ง) วัดบางพัง และวัดสนาม (สนามเหนือ)
            ต่อมาทรงเห็นว่าวัดปากอ่าวทรุดโทรมมากจึงโปรดเกล้าฯให้ปฏิสังขรณ์วัดใหม่ทั้งวัดโดยรักษารูปแบบมอญไว้ เพื่อถวายเป็นพระราชกุศลสนองพระคุณสมเด็จพระบรมราชมาตามหัยิกาเธอ กรมพระยาสุดารัตน์ราชประยูร
            ผู้ทรงอภิบาลพระองค์มาแต่ทรงพระเยาว์ และได้พระราชทานนามวัดว่า วัดปรมัยยิกาวาส ซึ่งมีความหมายว่า "วัดของพระบรมอัยยิกา"
          </p>
        </div>
      </div>

      {/* Fifth Event */}
      <div className="flex md:contents">
        <div className="hidden md:flex justify-center items-center col-start-1 col-end-5 text-gray-900 text-3xl font-prompt">
          ปัจจุบัน
        </div>
        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
        </div>
        <div className="bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border border-gray-200">
          <h3 className="md:hidden font-prompt text-gray-900 text-base mb-1">
            ปัจจุบัน
          </h3>
          <img
            src={วัดปากอ่าว}
            className="mx-auto md:w-[400px] md:h-[300px] my-6 shadow-xl hover:scale-110 hover:duration-150"
            alt="วัดปัจจุบัน"
          />
          <p className="flex leading-relaxed sm:leading-normal md:leading-loose  text-gray-700 mt-6 font-sarabun">
          <img src={icon_torah} className="w-7 h-7 mr-2"/>
            วัดปรมัยยิกาวาสเป็นพระอารามหลวงชั้นโท ชนิดวรวิหาร ตั้งในหมู่ที่ 7 บ้านโอ่งอ่าง ตำบลเกาะเกร็ด อำเภอปากเกร็ด จังหวัดนนทบุรี
          </p>
        </div>
      </div>
    </div>
  </div>
</div> 



  );
}
export default Timeline_1;
