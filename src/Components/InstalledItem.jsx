import { Download } from "lucide-react";
import React from "react";
import rating from "../assets/icon-ratings.png";

const InstalledItem = ({ item, handleUninstall }) => {
  const { image, title, subtitle, downloads, size, ratingAvg, id} = item;
  return (
    <div className="my-5 ">
      <div className="md:flex items-center justify-between bg-gray-200 p-3 rounded-xl">
        <div className="flex gap-5 items-center">
          <img className="h-21 w-25 rounded-2xl" src={image} alt="" />
          <div>
            <h2 className="mb-2 font-bold">
              {title}: {subtitle}
            </h2>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 text-green-500">
                <Download className="h-5 " />
                <p>{downloads}</p>
              </div>
              <div className="flex  gap-1">
                <img className="h-5" src={rating} alt="" />
                <p className="text-amber-600">{ratingAvg}</p>
              </div>
              <p>{size} MB</p>
            </div>
          </div>
        </div>

        <button onClick={() => handleUninstall(id)} className="btn md:mt-0 mt-2 bg-green-600 text-white ">Uninstall</button>
      </div>
    </div>
  );
};

export default InstalledItem;
