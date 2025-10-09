import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import useCustomHook from "../CustomHooks/CustomHook";
import { Check, CircleCheckBig, Download } from "lucide-react";
import star from "../assets/icon-ratings.png";
import like from "../assets/icon-review.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";

const AppDetails = () => {
  const [visited, setVisited] = useState(true);
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

  const btnHandle = () => {
    if (visited) {
      // react toast 
      toast(
        <div className="flex items-center gap-3">
          <span>
            <CircleCheckBig size={38} className="text-green-500" />
          </span>
          <div>
            <h2>Yahoo ⚡{title}: {subtitle} Installed Successfully</h2>
          </div>
        </div>
      );
    }
    setVisited(false);

    const existItem = JSON.parse(localStorage.getItem("installItem"));
    let updatedList = [];
    if (existItem) {
      updatedList = [...existItem, findData]
      const isSame = existItem.some(appData => appData.id === findData.id);
      if (isSame) {
        // normal alert pore thik korbo 
        return alert("already installed")
      }
    } else {
      updatedList.push(findData)
    }
    localStorage.setItem("installItem", JSON.stringify( updatedList))

  };

  return (
    <div className="container mx-auto p-5 md:p-0">
      <div className="md:flex items-center gap-10 my-10">
        <div>
          <img className="h-52 rounded-2xl" src={image} alt="" />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">
            {title}:{subtitle}
          </h2>
          <p className="text-sm">
            Developed by <span className="text-[#660de4]">{companyName}</span>
          </p>
          <hr className="text-gray-300" />
          <div className="flex gap-5 items-center ">
            <div>
              <Download className="text-green-500" />
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
          <button className="btn bg-green-500 text-white" onClick={btnHandle}>
            {visited ? "Install Now" : "Installed"}
          </button>
        </div>
      </div>
      <hr className="text-gray-300" />

      <div className=" border-2 border-[#660de4] rounded-xl p-4 h-80 my-5">
        <h1>Ratings</h1>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ratings} layout="vertical">
            <CartesianGrid strokeDasharray="3 3 3 3" />
            <XAxis type="name" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#FF8811" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <hr className="text-gray-300 mb-5" />

      <div>
        <h1 className="text-2xl font-semibold text-[#001931]">Description</h1>
        <p className="mb-5 text-[#627382]">{description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
