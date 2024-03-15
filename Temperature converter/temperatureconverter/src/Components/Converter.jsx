import React, { useState } from "react";

function Converter() {

  const [temperature, setTemperature] = useState(0);
  const [type, setType] = useState('celsius')
  const [converted, setConverted] = useState()
  // console.log(type);
  
  const convertToFahrenheit = () => {
    const convertedToFahrenheit = (temperature * 9/5) + 32;
    return convertedToFahrenheit;
  }

  const convertToCelsius = () => {
    const convertedToCelsius = (temperature - 32) * 5/9;
    return convertedToCelsius;
  }

  const convert = () => {
    if(type === 'celsius'){
      setConverted(convertToFahrenheit() + ' F');
    }
    if(type === 'fahrenheit'){
      setConverted(convertToCelsius() + ' C');
    }
  }

  return (
    <>
        <div>
            <div className="navbar flex justify-between items-center px-5">
                <div className="p-5"><img className="w-11 h-11" src="/Navbar image.png" alt="" /></div>
                <div className="text-white p-5 text-3xl">Temperature converter</div>
            </div>
            <div className="relative">
              <img src="/Temp background.jpg" className="w-full opacity-80" alt="" />
              <div className="temp-container bg-white w-80 h-80 rounded-xl p-7">
                <div className="flex justify-between items-center py-5">
                  <div className="flex flex-col">
                    <label>Degree</label>
                    <input type="number" className="outline-none border-b-2 w-24 mt-3" onChange={(e) => setTemperature(e.target.value)}/>
                  </div>
                  <div className="flex flex-col">
                    <p className="ml-0.5">Type</p>
                    <select className="outline-none mt-3 border-b-2" onChange={(e) => setType(e.target.value)}>
                      <option value="celsius">Celsius</option>
                      <option value="fahrenheit">Fahrenheit</option>
                    </select>
                  </div>
                </div>
                <div className="py-5 mb-3">
                  <div>Result</div>
                  <input type="" className="outline-none border-b-2" readOnly value={converted} />
                </div>
                <div className="bg-blue-700 text-center rounded-lg">
                  <button className="text-white">
                    <div className="p-3 text-xl" onClick={convert}>Convert</div>
                  </button>
                </div>
              </div>
            </div>
        </div>
    </>
  );
}

export default Converter;
