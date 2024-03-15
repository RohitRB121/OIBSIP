import React from "react";
import '../App.css'; 

function Body() {
  return (
    <>
        <div className="container">
            <div className="h-cards">
                <img src="/Secure.avif" alt="" />
                <div className="info">
                    <h2>Secure access, worldwide</h2>
                    <div className="secure-content">Connect reliably from anywhere, to anywhere. Our network of high-speed servers accross 94 countries puts you in control</div>
                    <button className="express-btn">Get ExpressVPN</button>
                </div>
            </div>
            <div className="h-cards">
                <div className="info">
                    <h2>One click to a safer internet</h2>
                    <div className="secure-content">Going online doesn't have to mean being exposed. Whether you're shopping from your desk or just connecting at a cafe, keep your personal information more private and secure</div>
                </div>
                <img src="/Safe internet.avif" alt="" />
            </div>
            <div className="h-cards">
                <img src="/Use any device.avif" alt="" />
                <div className="info">
                    <h2>Use ExpressVPN on every device</h2>
                    <div className="secure-content">Phone, Tablet, Computer, Router - no matter where you are or what devices you're using, a single ExpressVPN subscription has got you covered. </div>
                    <div>
                      <div className="icons">
                        <img src="/windows-icon.webp" alt="" />
                        <img src="/Apple-Logo.png" alt="" />
                        <img src="/Android icon.png" alt="" />
                        <img src="/ios.png" alt="" />
                        <img src="/Linux.png" alt="" />
                      </div>
                      <u className="seeAll">See all apps &gt;</u>  
                    </div>
                    <button className="express-btn">Get ExpressVPN</button>
                </div>
            </div>
        </div>
    </>
  );
}

export default Body;
