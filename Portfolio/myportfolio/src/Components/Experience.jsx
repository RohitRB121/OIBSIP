import React from "react";

function Experience() {
  return (
    <>
        <div className="max-w-6xl mx-auto w-full ">
            <section className="w-full py-9 px-3">
              <header className="pb-5 pl-7">
                <h2 className="text-3xl font-bold">EXPERIENCE</h2>
              </header>

              <div className="px-7 info">
                  <div className="relative p-5 bg-white cursor-pointer mb-5 box">
                    <h4 className="dates text-xl font-bold">Feb 2024 - Mar 2024</h4>
                    <h3 className="text-xl pt-3 pb-1 postname">Web Development and Designing | Oasis Infobyte</h3>
                    <p className="leading-tight text-lg text-gray-950">During my tenure at Oasis Infobyte, I played a pivotal role in driving specific projects, demonstrating strong problem-solving abilities and attention to detail. This experience equipped me with a solid foundation in Frontend Development, preparing me for future challenges.</p>
                  </div>
                
                <div className="relative p-5 bg-white cursor-pointer mb-5 box">
                    <h4 className="dates text-xl font-bold">Feb 2024 - Mar 2024</h4>
                    <h3 className="text-xl pt-3 pb-1 postname">Web Development Intern | CodeClause</h3>
                    <p className="leading-tight text-lg text-gray-950">As a intern at CodeClause, I excelled in contributing to impactful projects such as To-Do List Web App and Movie Explorer System. Through this experience, I edge my skills in Frontend and gained valuable insights into Web Development.</p>
                </div>

                <div className="relative p-5 bg-white cursor-pointer mb-5 box">
                  <h4 className="dates text-xl font-bold">Jan 2024 - Feb 2024</h4>
                  <h3 className="text-xl pt-3 pb-1 postname">React Developer | SYNC INTERN'S</h3>
                  <p className="leading-tight text-lg text-gray-950">In my internship at Sync Intern's, I immersed myself in diverse projects, applying theoretical knowledge to practical scenarios. I contributed actively on creation of projects such as Weather App, Messenger App, Resume Builder Web Application and Online code editor. This experience sharpen my skills in React and grow my understanding of Frontend Web Developer, setting a solid foundation for my career journey.</p>
                </div>
              </div>
            </section>
        </div>
    </>
  );
}

export default Experience;
