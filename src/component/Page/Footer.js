import React from "react";
import { Typography } from "@material-tailwind/react";

// const LINKS = [
//   {
//     title: "Product",
//     items: ["Overview", "Features", "Solutions", "Tutorials"],
//   },
//   {
//     title: "Company",
//     items: ["About us", "Careers", "Press", "News"],
//   },
//   {
//     title: "Resource",
//     items: ["Blog", "Newsletter", "Events", "Help center"],
//   },
// ];

const currentYear = new Date().getFullYear();

function Footer() {
  return (
      <footer className="relative w-full ">
        <div className="mx-auto w-full max-w-7xl px-8 ">
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <Typography variant="h5" className="mb-6 font-prompt">
              วัดปรมัยยิกาวาส นนทบุรี
            </Typography>
          </div>
          <div className="mt-2 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
            >
              &copy; {currentYear}{" "}
              <a href="#">ระบบค้นหาด้วยภาพสำหรับวัดปรมัยยิกาวาส</a>.
            </Typography>
           
          </div>
        </div>
      </footer>
  );
}
export default Footer;
