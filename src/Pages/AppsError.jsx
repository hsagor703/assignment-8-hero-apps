import React from "react";
import { Link } from "react-router";
import appError from "../assets/App-Error.png"

const AppsError = () => {
  return (
    <div>
      <div className="text-center my-10 space-y-3">
        <img className="mx-auto w-68" src={appError} alt="" />
        <h2 className="text-[#001931] text-4xl font-semibold">
          OPPS!! APP NOT FOUND
        </h2>
        <p className="text-[#627382]">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <Link
          to="/"
          className="btn bg-linear-to-tl from-[#9F62F2] to-[#632EE3] text-white"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default AppsError;
