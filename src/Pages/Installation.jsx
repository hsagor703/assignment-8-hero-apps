import React from "react";

const Installation = () => {
  return (
    <div>
      <div className="container mx-auto my-10">
        <div className="text-center space-y-5 ">
          <h1 className="text-4xl font-bold">Your Installed Apps</h1>
          <p className="mb-10 text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="md:flex items-center justify-between mb-5 px-3 md:px-0">
          <h1 className="font-bold">(3) Apps Found</h1>
          <select defaultValue="Color scheme" className="select select-info">
            <option disabled={true}>Sort By</option>
            <option>High-Low</option>
            <option>Low-High</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Installation;
