import React from "react";
import ratingStart from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";
const AllApps = ({apps}) => {
  const { image, title, ratingAvg, downloads } = apps;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure className="h-48 overflow-hidden">
          <img
            className="w-full object-cover hover:scale-110 transition ease-in-out"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
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
    </div>
  );
};

export default AllApps;
