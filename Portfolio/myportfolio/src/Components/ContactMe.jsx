import React from "react";

function ContactMe() {
  return (
    <>
        <div className="max-w-6xl mx-auto p-11">
            <p className="text-orange-500 text-center">SCHEDULE YOUR PRESENCE</p>
            <h3 className="text-center text-3xl font-medium p-1">Get in Touch</h3>
            <p className="text-center">Our door is always open for a good cup of coffee</p>
            <p className="text-center">Share your excitement with us.</p>
            <form action="" className="p-5">
                <div className="flex justify-between">
                    <input className="border w-2/5 p-3 rounded mt-1 mb-4 outline-none" type="text" placeholder="Your Name" />
                    <input className="border w-2/5 p-3 rounded mt-1 mb-4 outline-none" type="text" placeholder="Your Email" />
                </div>
                <div className="flex justify-between">
                    <input className="border w-2/5 p-3 rounded mt-1 mb-4 outline-none" type="text" placeholder="Phone Number" />
                    <input className="border w-2/5 p-3 rounded mt-1 mb-4 outline-none" type="text" placeholder="Subject" />
                </div>
                <div className="">
                    <textarea className="border w-full p-3 rounded mt-1 mb-4 outline-none" name="msg" id="message" rows="5" placeholder="Your Message"></textarea>
                </div>
                <input className="bg-orange-500 text-white py-3 px-5 border-none rounded cursor-pointer font-medium hover:bg-orange-600" type="submit" value="Send Message" />
            </form>
        </div>
    </>
  );
}

export default ContactMe;
