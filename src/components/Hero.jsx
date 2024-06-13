import React, { useState } from "react";
import logo from "../images/logo.svg";
import dashboardImage from "../images/illustration-dashboard.png";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (!isValid) {
      setIsValid(true);
    }
  };

  const handleNotifyMeClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
  };

  return (
    <div className=" flex flex-col 	items-center justify-center h-screen ">
      <img src={logo} alt="Logo" className="mb-[5rem]" />
      <h1 className="md:text-5xl pb-5 sm:text-[36px]">
        <span className=" text-gray">We are launching</span>
        <span className="font-bold"> soon!</span>
      </h1>
      <p className="pb-5">Subscribe and get notified</p>

      <div class="flex flex-col items-center justify-center sm:w-full md:flex-row md:w-auto ">
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleEmailChange}
          placeholder="Your email address.."
          className={`rounded-full border py-2 px-10 text-gray-700 placeholder-gray-500 focus:outline-none w-[18rem] sm:w-full ${
            isValid ? "border-gray" : "border-red"
          }`}
        />

        <button
          onClick={handleNotifyMeClick}
          className="mb-3 mt-3 h-[2.5rem] w-[18rem] rounded-full bg-blue text-white text-center sm:w-full md:ml-3 md:w-[18rem] active:bg-paleBlue"
        >
          Notify Me
        </button>
      </div>
      {!isValid && (
        <p className="text-red pr-[14rem] sm:text-red sm:pr-[2rem]">
          Please provide a valid email address
        </p>
      )}
      <img
        src={dashboardImage}
        alt="dasboard"
        className=" w-[600px] mt-8 mb-8"
      />
    </div>
  );
};

export default Hero;
