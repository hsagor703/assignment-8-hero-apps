import React, { useEffect, useState } from "react";
import InstalledItem from "../Components/InstalledItem";
import { toast, ToastContainer } from "react-toastify";
import { Trash2 } from "lucide-react";

const Installation = () => {
  const [installedItem, setInstalledItem] = useState([]);
  console.log(installedItem);
  const [sort, setSort] = useState("none");
  console.log(sort);
  useEffect(() => {
    const getInstallItemToLocalStorage = JSON.parse(
      localStorage.getItem("installItem")
    );
    if (getInstallItemToLocalStorage) {
      setInstalledItem(getInstallItemToLocalStorage);
    }
  }, []);

  const handleUninstall = (id) => {
    const getItemToLocalStorage = JSON.parse(
      localStorage.getItem("installItem")
    );
    let filterData = getItemToLocalStorage.filter((item) => item.id !== id);
    setInstalledItem(filterData);
    localStorage.setItem("installItem", JSON.stringify(filterData));
    toast(
      <div className="flex items-center gap-3">
        <span>
          <Trash2 color="#e81111" />
        </span>
        <div>
          <h2>Uninstalled Successfully</h2>
        </div>
      </div>
    );
  };

  // (Number(a.downloads.replace("M", "")),Number(b.downloads.replace("M", "")))
  const sortItem = (() => {
    if (sort === "increase") {
      return [...installedItem].sort((a, b) => Number(a.downloads.replace("M", "")) - Number(b.downloads.replace("M", "")));
  
    } else if (sort === "decrease") {
      return [...installedItem].sort((a, b) =>Number(b.downloads.replace("M", "")) - Number(a.downloads.replace("M", "")));
    } else {
      return installedItem;
    }
  })(); 
 

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
          <h1 className="font-bold">({installedItem.length}) Apps Found</h1>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="select select-info"
            >
              <option value="none">Sort By</option>
              <option value="increase">High-Low</option>
              <option value="decrease">Low-High</option>
            </select>
        </div>

        <div>
          {sortItem.map((item) => (
            <InstalledItem
              key={item.id}
              item={item}
              handleUninstall={handleUninstall}
            ></InstalledItem>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Installation;
