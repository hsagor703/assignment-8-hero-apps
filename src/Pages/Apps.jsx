import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AllApps from "../Components/AllApps.Jsx";
const Apps = () => {
  const allApp = useLoaderData();
  const [search, setSearch] = useState('');
  const searchData = search.trim().toLocaleLowerCase();
  const filterData = searchData ? allApp.filter(app => app.title.trim().toLocaleLowerCase().includes(searchData)) : allApp
  console.log(filterData);
  console.log(searchData);
  // const handleSearch = (() => {
  //   const searchData = search.trim().toLocaleLowerCase()
  //   const filterData = allApp.filter(app => app.title.trim().toLocaleLowerCase().includes(searchData))
  //   setSearch(filterData)
  // }) ()
  return (
    <div>
      <div className="container mx-auto my-10">
        <div className="text-center space-y-5">
          <h1 className="text-4xl font-bold">Trending Apps</h1>
          <p className="mb-10 text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="flex items-center justify-between mb-5">
          <h1 className="font-bold">({filterData.length}) Apps Found</h1>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search Apps" />
          </label>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-10 md:gap-5 p-3 md:p-0">
          {filterData.map((apps) => (
            <AllApps key={apps.id} apps={apps}></AllApps>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
