import React from "react";
import { useLoaderData, useParams } from "react-router";
import useCustomHook from "../CustomHooks/CustomHook";
import { Download } from "lucide-react";
import star from "../assets/icon-ratings.png"
import like from "../assets/icon-review.png"

const AppDetails = () => {
  const { appData, loading, error } = useCustomHook();
  const { id } = useParams();
  if (loading) {
    return <p>loading...</p>;
  }
  const findData = appData.find((app) => app.id === Number(id));
  const {
    title,
    subtitle,
    image,
    downloads,
    ratingAvg,
    ratings,
    reviews,
    size,
    description,
    companyName,
  } = findData;

  console.log(reviews);

  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-10 my-10">
        <div>
          <img className="h-52 rounded-2xl" src={image} alt="" />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">
            {title}:{subtitle}
          </h2>
          <p className="text-sm">Developed by <span className="text-[#660de4]">{companyName}</span></p>
          <hr className="text-gray-300" />
          <div className="flex gap-5 items-center ">
            <div>
              <Download className="text-green-500"/>
              <p className="text-sm">Download</p>
              <p className="font-bold text-[#001931]">{downloads}</p>
            </div>
            <div>
              <img className="h-5" src={star} alt="" />
              <p className="text-sm">Average Ratings</p>
              <p className="font-bold text-[#001931]">{ratingAvg}</p>
            </div>
            <div>
              <img className="h-5" src={like} alt="" />
              <p className="text-sm">Total Reviews</p>
              <p className="font-bold text-[#001931]">{reviews}</p>
            </div>
          </div>
          <button className="btn bg-green-500 text-white">Install Now ({size} MB)</button>
        </div>
      </div>
        <hr className="text-gray-300" />

        
    </div>
  );
};

export default AppDetails;
