import React from "react";
import { Download, ShieldCheck } from "lucide-react";
import review from "../assets/icon-ratings.png";
const Trusted = () => {
  return (
    <div className="py-10 mb-10 bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]">
      <h1 className="text-center md:text-3xl text-2xl font-bold text-white mb-5">
        Trusted by Millions, Built for You
      </h1>
      <div className="flex justify-center gap-10 flex-col md:flex-row">
        <div className="text-center text-white space-y-3">
          <p>Total Downloads</p>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-4xl font-bold">29.6M </h1>
            <Download className="text-green-400"/>
          </div>
          <p>21% more than last month</p>
        </div>

        <div className="text-center text-white space-y-3">
          <p>Total Reviews</p>
          <div className="flex items- justify-center gap-2">
            <h1 className="text-4xl font-bold">906K</h1>
            <img className="h-7" src={review} alt="review-icon" />
          </div>
          <p>46% more than last month</p>
        </div>

        <div className="text-center text-white space-y-3">
          <p>Active Apps</p>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-4xl font-bold">132+</h1>
            <ShieldCheck size={26} className="text-green-400" />
          </div>
          <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
