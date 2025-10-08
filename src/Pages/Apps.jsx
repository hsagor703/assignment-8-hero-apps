import React from "react";
import { useLoaderData } from "react-router";
import AllApps from "../Components/AllApps.Jsx";
const Apps = () => {
  const allApp = useLoaderData();
  return (
    <div>
      <div className="container mx-auto my-10">
        <div className="text-center space-y-5">
          <h1 className="text-4xl font-bold">Trending Apps</h1>
          <p className="mb-10 text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
          {allApp.map((apps) => (
            <AllApps apps={apps}></AllApps>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
