import React from "react";

function Navbar() {
  return (
    <>
      <div className="nav flex justify-between items-center">
        <img className="max-w-60 max-h-60" src="/LogoRohit.svg" alt="" />
        <button className="hirebtn animate py-3 px-6 mr-16 font-bold">Hire Me<div className="animate"></div></button>
      </div>
    </>
  );
}

export default Navbar;

