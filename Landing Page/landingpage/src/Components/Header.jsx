import React from "react";

function Header() {
  return (
    <>
      <div id='wrapper'>
        <img src="/Background Image.png" alt="" />
        <img className='logo' src="/ExpressVPN-logo.png" alt="" />
        <img className='globe-icon' src="/Globe Icon.png" alt="" /> 
        <span id='language'>English</span> 
        <img className='down-arrow' src="/Down arrow.png" alt="" />
        <h1 id='heading'>The VPN that just works</h1>
        <h3 className='belowHeading'>Go further with the #1 trusted leader in VPN</h3>
        <button className='get-btn'> 
          <div>Get ExpressVPN</div>
          <div>&gt;</div>
        </button>
        <h6 id='day'>30-DAY MONEY-BACK GUARANTEE</h6>
      </div>
    </>
  );
}

export default Header;
