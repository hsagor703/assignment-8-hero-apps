import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Error from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 my-10">
        <div className="text-center my-10 space-y-3">
          <img className="mx-auto w-68" src={Error} alt="error image" />
          <h2 className="text-[#001931] text-4xl font-semibold">
            OPPS, PAGE NOT FOUND !!
          </h2>
          <p className="text-[#627382]">
            The page you are looking for is not available.
          </p>
          <Link
            to="/"
            className="btn bg-linear-to-tl from-[#9F62F2] to-[#632EE3] text-white"
          >
            Go Back!
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
