import React from "react";
import hero from '../assets/hero.png'
import playStore from '../assets/playstore.png'
import apple from '../assets/pngegg.png'
const Banner = () => {
  return (
    <div className="text-center mt-10 space-y-5">
      <div className="">
        <h1 className="md:text-7xl text-5xl font-bold">We Build <br /> <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#9F62F2] to-[#632EE3]">Productive</span> Apps</h1>
        <p className="text-[#627382] mt-5">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      </div>
      <div className="">
        <a target="blank" href="https://play.google.com/store/games?hl=en" className="btn mr-5"><img className="h-8" src={playStore} alt="button-logo" /> Google Play</a>
        <a target="blank" href="https://www.apple.com/app-store/" className="btn"> <img className="h-8" src={apple} alt="button-logo" /> App Store</a>
      </div>
      <img className="mx-auto" src={hero} alt="banner" />
    </div>
  );
};

export default Banner;
