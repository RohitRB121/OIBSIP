import React from "react";

function Home() {
  return (
  <>
    <div className="max-w-6xl my-10 mx-auto flex justify-between items-center home ">
      <div className="flex flex-col gap-5">
        <div className=" w-fit p-4 font-semibold hello">Hello, I'm</div>
        <h1 className="text-6xl font-black">Mr. Rohit</h1>
        <h2 className="text-xl font-bold">FRONTEND DEVELOPER | SOFTWARE ENGINEER | WEB DEVELOPER</h2>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/rohit-bhandge-89808b274" target="_blank"><img className="w-10 h-10" src="/LinkedIn.png" alt="" /></a>
          <a href="https://github.com/RohitRB121" target="_blank"><img className="w-10 h-10" src="/Github.png" alt="" /></a>
          <div className="relative mail">
            <span className="tooltip">rohitbhandge09092001@gmail.com</span>
            <a href="" id="" className=""><img className=" w-11 h-11" src="/Gmail.png" alt="" /></a>
          </div>
        </div>
        <div className="font-bold p-4 resume w-fit rounded-3xl">
          Download Resume
        </div>
      </div>
      <div>
        <img className="size-80" src="/mobile.png" alt="" />
      </div>
    </div>
  </>
  );
}

export default Home;
