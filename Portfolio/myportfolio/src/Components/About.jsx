import React from "react";

function About() {
  return (
    <>
        <div className="max-w-6xl my-20 mx-auto flex items-center justify-between p-10">
            <div className="p-5">
                <img className="max-w-96 rounded-full border-lime-500 border-2 p-5" src="/About.webp" alt="" />
            </div>
            <div className="max-w-96">
                <div className="font-extrabold p-8 text-5xl">About me</div>
                <div className="text-lg font-semibold">I'm Rohit Bhandge, I'm 22 years old, and I am currently seeking a full-time position as a Frontend Developer, Software Developer, and Web Developer.</div>
                <div className="text-lg font-semibold mt-3">
                  I invest my time in building projects and combining my ideas from all my work to generate quality websites.
                </div>
            </div>
        </div>
    </>
  );
}

export default About;
