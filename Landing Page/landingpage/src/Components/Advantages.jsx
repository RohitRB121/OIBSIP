import React from "react";

function Advantages() {
  return (
    <>
        <div className="container">
            <div className="adv-items">
                <div className="adv-item">
                    <img className="adv-img" src="/data protection.png" alt="" />
                    <h3 className="adv-heading">Stronger data protection</h3>
                    <div className="advDesc">Take charge of your online privacy and security with best-in-class encryption.</div>
                </div>
                <div className="adv-item">
                    <img className="adv-img" src="/Anywhere.png" alt="" />
                    <h3 className="adv-heading">Works seamlessly everywhere</h3>
                    <div className="advDesc">Experience the internet the way it's meant to be. On the go, or on your coach.</div>
                </div>
                <div className="adv-item">
                    <img className="adv-img" src="/blazing-fast-speeds.png" alt="" />
                    <h3 className="adv-heading">Lightning-quick connectivity</h3>
                    <div className="advDesc">Our VPN network is built for speed, powered by next-generation technology</div>
                </div>
            </div>
            <u className="seemore">See more advantages &gt;</u>
        </div>
    </>
  );
}

export default Advantages;
