import React from "react";

function Projects() {
  return (
    <>
        <div className="">
            <div className="text-center text-8xl pt-7">
                Projects
            </div>
            <div className="max-w-6xl mx-auto py-12 flex flex-col gap-32">
                <div className="project-card" id="ecommerceproject">
                    <div className="project-content">
                        <h2 className="text-5xl font-bold leading-tight">E-Commerce Shopping Store</h2>
                        <div className="project-skills-container w-2/3 flex gap-3 flex-wrap">
                            <img className="w-10 h-10" src="/Projects/HTML.png" alt="" />
                            <img className="w-10 h-10" src="/Projects/CSS.png" alt="" />
                            <img className="w-10 h-10 rounded-full" src="/Projects/Javascript.png" alt="" />
                        </div>
                        <p className="w-3/5 italic">
                            A shopping web application that enables the customer to explore and buy outfits. Technologies used are HTML, CSS and JAVASCRIPT. Local storage is implemented to store the data
                        </p>
                        <div className="text-center">
                            <button className="m-4 livebtn w-fit py-3 px-9 text-sm font-medium">Live</button>
                        </div>
                    </div>
                </div>

                <div className="project-card ml-28" id="weatherproject">
                    <div className="project-content">
                        <h2 className="text-5xl font-bold leading-tight">Weather App</h2>
                        <div className="project-skills-container w-2/3 flex gap-3 flex-wrap">
                            <img className="w-10 h-10" src="/Projects/HTML.png" alt="" />
                            <img className="w-10 h-10" src="/Projects/CSS.png" alt="" />
                            <img className="w-10 h-10 rounded-full" src="/Projects/Javascript.png" alt="" />
                            <img className="w-10 h-10" src="/Projects/React.png" alt="" />
                        </div>
                        <p className="w-3/5 italic">
                            A weather application that provides weather details for a location specified by the user. Built using React and Open Weather API which shows latest weather data. Here we have search options with city for which we would like to see weather forecast. 
                        </p>
                        <div className="text-center">
                            <button className="m-4 livebtn w-fit py-3 px-9 text-sm font-medium">Live</button>
                        </div>
                    </div>
                </div>

                <div className="project-card" id="todoproject">
                    <div className="project-content">
                        <h2 className="text-5xl font-bold leading-tight">To-Do List Web App</h2>
                        <div className="project-skills-container w-2/3 flex gap-3 flex-wrap">
                            <img className="w-10 h-10" src="/Projects/HTML.png" alt="" />
                            <img className="w-10 h-10" src="/Projects/CSS.png" alt="" />
                            <img className="w-10 h-10 rounded-full" src="/Projects/Javascript.png" alt="" />
                        </div>
                        <p className="w-3/5 italic">
                            Builds a responsive web page to keep a track of works that need to be completed. It is a list of items that need to be completed. Tech stack used are HTML,CSS,JavaScript and React.
                        </p>
                        <div className="text-center">
                            <button className="m-4 livebtn w-fit py-3 px-9 text-sm font-medium">Live</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Projects;
