import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BriefcaseIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const JobDetails = () => {
  const { id } = useParams();
  const jobData = useLoaderData();
  const [job, setJob] = useState({});
  const {
    jobDescription,
    jobResponsibility,
    education,
    experiences,
    jobTitle,
    salary,
    phone,
    email,
    location,
  } = job;

  useEffect(() => {
    const selectedJob = jobData.find((job) => job.id === id);
    setJob(selectedJob);
  }, []);
  const notify = () => toast("Applied Successfully!");

  return (
    <div>
      <h3
        className="bg-indigo-50 h-36 text-center font-bold text-3xl"
        style={{
          backgroundImage:
            "url('../../../assets/All Images/Vector.png'), url('../../../assets/All Images/Vector-1.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left bottom, right top",
        }}
      >
        Job Details
      </h3>

      <div className="flex flex-col md:flex-row mx-24 mt-12">
        <div className="w-full md:w-6/12 m-8">
          <p className="mb-4">
            <span className="font-bold">Job Description: </span>{" "}
            {jobDescription}
          </p>
          <p className="mb-4">
            <span className="font-bold">Job Responsibility: </span>
            {jobResponsibility}
          </p>
          <p className="font-bold mb-4">Educational Requirements:</p>
          <p className="mb-4">{education}</p>
          <p className="font-bold mb-4">Experiences:</p>
          <p className="mb-4">{experiences}</p>
        </div>
        <div className="w-full md:w-2/6 m-8 ">
          <div className="bg-indigo-100 p-4 mb-4 rounded-lg">
            <h3 className="font-bold border-b-2 border-sky-300 pb-2">
              Job Details
            </h3>

            <p className="mt-4 mb-4">
              <CurrencyDollarIcon className=" inline h-6 w-6 text-gray-500" />
              <span className="font-bold"> Salary : </span>
              {salary} (Per Month)
            </p>

            <p>
              <BriefcaseIcon className=" inline h-6 w-6 text-gray-500" />
              <span className="font-bold"> Job Title : </span>
              {jobTitle}
            </p>
            <h3 className="font-bold border-b-2 border-sky-300 pb-2 mt-4">
              Contact Information
            </h3>

            <p className="mt-4 mb-4">
              <PhoneIcon className=" inline h-6 w-6 text-gray-500" />
              <span className="font-bold"> Phone : </span>
              {phone}
            </p>

            <p className="mt-4 mb-4">
              {" "}
              <EnvelopeIcon className=" inline h-6 w-6 text-gray-500" />
              <span className="font-bold"> Email : </span>
              {email}
            </p>

            <p className="mt-4 mb-4">
              <MapPinIcon className=" inline h-6 w-6 text-gray-500" />
              <span className="font-bold"> Address : </span>
              {location}
            </p>
          </div>
          <button
            onClick={notify}
            className="btn-primary block mx-auto w-full  rounded-lg "
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
