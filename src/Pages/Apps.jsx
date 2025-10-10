import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import AllApps from "../Components/AllApps.Jsx";
import appError from "../assets/App-Error.png";
import LoadingSpiner from "./LoadingSpiner";
import useCustomHook from "../CustomHooks/CustomHook";
const Apps = () => {
  const { appData, loading } = useCustomHook();
  const [load, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const searchData = search.trim().toLocaleLowerCase();


  // for live search loading 
  useEffect(() => {
    if (search === "") {
      setLoading(false);
      return;
    } else {
      setLoading(true);
      const t = setTimeout(() => {
        setLoading(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [search]);

  const filterData = searchData
    ? appData.filter((app) =>
        app.title.trim().toLocaleLowerCase().includes(searchData)
      )
    : appData;

  if (filterData.length === 0) {
    return loading ? (
      <LoadingSpiner />
    ) : (
      <div className="text-center my-10 space-y-3">
        <img className="mx-auto w-68" src={appError} alt="" />
        <h2 className="text-[#001931] text-4xl font-semibold">
          OPPS!! APP NOT FOUND
        </h2>
        <p className="text-[#627382]">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <Link
          to="/"
          className="btn bg-linear-to-tl from-[#9F62F2] to-[#632EE3] text-white"
        >
          Go Back!
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="container mx-auto my-10">
        <div className="text-center space-y-5 ">
          <h1 className="text-4xl font-bold">Trending Apps</h1>
          <p className="mb-10 text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="md:flex  items-center justify-between mb-5 px-3 md:px-0">
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
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search Apps"
            />
          </label>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-10 md:gap-5 p-3 md:p-0">
          {load ? (
            <LoadingSpiner />
          ) : (
            filterData.map((apps) =>
              loading ? (
                <LoadingSpiner />
              ) : (
                <AllApps key={apps.id} apps={apps}></AllApps>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
