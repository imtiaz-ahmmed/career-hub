import React, { useState, useEffect } from "react";
import { getStoredJob } from "../../utils/fakeDB";
import { useLoaderData } from "react-router-dom";
import SingleJob from "../SingelJob/SingleJob";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState(null);
  const jobDatum = useLoaderData();

  useEffect(() => {
    let appliedJobs = [];
    const savedJobs = getStoredJob();
    for (const id in savedJobs) {
      const foundJob = jobDatum.find((job) => job.id === id);
      if (foundJob) {
        appliedJobs.push(foundJob);
      }
    }
    setJobs(appliedJobs);
  }, [jobDatum]);

  const handleSort = (value) => {
    setFilter(value);
  };

  const filteredJobs = filter
    ? jobs.filter((job) => job.remoteOrOnsite === filter)
    : jobs;

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
        Applied Jobs
      </h3>
      <div className="flex justify-end gap-8 mt-12 mx-24 ">
        <button className="btn-primary" onClick={() => handleSort("Remote")}>
          Sort by Remote
        </button>
        <button className="btn-primary" onClick={() => handleSort("Onsite")}>
          Sort by On Site
        </button>
      </div>

      <div className="mt-12">
        {filteredJobs.map((job) =>
          filter === null || job.remoteOrOnsite === filter ? (
            <SingleJob key={job.id} job={job}></SingleJob>
          ) : null
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
