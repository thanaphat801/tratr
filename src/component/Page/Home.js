import React from "react";
import Timeline from "./Timeline";
import Upload from "./Upload";
import Upload_1 from "./Upload_1";
import Footer from "./Footer";


function Home() {
  return (
    <div className=" ">
        {/* <Upload_1/> */}
        <Upload/>
        <Timeline/>
        <Footer/>
    </div>
  );
}

export default Home;
