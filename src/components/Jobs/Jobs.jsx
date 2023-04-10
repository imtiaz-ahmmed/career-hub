import React from "react";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Jobs = ({ job }) => {
  const {
    logo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fulltimeOrPartTime,
    location,
    salary,
  } = job;
  return (
    <div className="p-12 border ">
      <img src={logo} alt="" />
      <h3 className="text-lg font-bold mt-4">{jobTitle}</h3>
      <p className="mb-4">{companyName}</p>
      <div className="flex gap-5">
        <p className="text-indigo-600 border p-2 ">{remoteOrOnsite}</p>
        <p className="text-indigo-600 border p-2 ">{fulltimeOrPartTime}</p>
      </div>
      <div className="flex mt-4 gap-8">
        <p>
          <MapPinIcon className=" inline h-6 w-6 text-gray-500" />
          {location}
        </p>
        <p>
          {" "}
          <CurrencyDollarIcon className="inline h-6 w-6 text-gray-500" />
          {salary}
        </p>
      </div>
      <button className="btn-primary mt-4">View Details</button>
    </div>
  );
};

export default Jobs;
