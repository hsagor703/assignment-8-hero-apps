import React from "react";
import { Link, useLoaderData } from "react-router";
import SomeApps from "./SomeApps";

const TrendingApps = () => {
  const appsData = useLoaderData();
  const cuttingData = appsData.slice(0, 8);
  return (
    <div className="container mx-auto mb-10">
      <div className="text-center space-y-5">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="mb-10 text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
        {
            cuttingData.map(appData => <SomeApps key={appData.id} appData={appData}></SomeApps>)
        }
    </div>

      

      <div className="text-center mt-10">
        <Link
          to="/apps"
          className="btn bg-linear-to-tl from-[#9F62F2] to-[#632EE3] text-white"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
