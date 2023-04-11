import React from "react";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SingleJob = ({ job }) => {
  const {
    logo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fulltimeOrPartTime,
    salary,
    location,
  } = job;

  return (
    <div className="p-12 mb-12 rounded-lg  border flex flex-col md:flex-row gap-8  justify-between  items-center mx-24">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          className=" w-60 border rounded-lg bg-slate-100 p-16"
          src={logo}
          alt=""
        />
        <div>
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
              <CurrencyDollarIcon className="inline h-6 w-6 text-gray-500" />
              {salary}
            </p>
          </div>
        </div>
      </div>
      <Link to={`/${job.id}`}>
        <button className="btn-primary mt-4">View Details</button>
      </Link>
    </div>
  );
};

export default SingleJob;
