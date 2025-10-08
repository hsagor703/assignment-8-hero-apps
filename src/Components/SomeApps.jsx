import React from "react";
import ratingStart from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";
import { Link } from "react-router";
const SomeApps = ({ appData }) => {
  const { image, id, title, subtitle, ratingAvg, downloads } = appData;
  return (
    <Link to={`/appDetails/${id}`}>
      <div className="card bg-base-100  shadow-sm">
        <figure className="md:h-48 overflow-hidden">
          <img
            className=" hover:scale-110 transition ease-in-out"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold">{title}: {subtitle}</h2>
          <div className="flex gap-10 justify-between">
            <div className="flex items-center bg-green-100 btn border-0">
              <img className="h-5" src={download} alt="download-icon" />
              <span className="text-green-500">{downloads}</span>
            </div>
            <div className="flex items-center btn bg-orange-100 text-orange-500">
              <img className="h-5" src={ratingStart} alt="rating-icon" />
              <span>{ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SomeApps;
