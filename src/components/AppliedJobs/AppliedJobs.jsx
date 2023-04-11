import React, { useState, useEffect } from "react";
import { getStoredJob } from "../../utils/fakeDB";
import { useLoaderData } from "react-router-dom";
import SingleJob from "../SingelJob/SingleJob";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const jobDatum = useLoaderData();

  useEffect(() => {
    let singleJob = [];
    const saveJob = getStoredJob();
    for (const id in saveJob) {
      const foundJob = jobDatum.find((job) => job.id === id);
      if (foundJob) {
        singleJob.push(foundJob);
      }
    }
    setJobs(singleJob);
  }, []);

  const sortJobsByOnsite = () => {
    const sortedJobs = [...jobs].sort((a, b) =>
      a.remoteOrOnsite.localeCompare(b.remoteOrOnsite)
    );
    setJobs(sortedJobs);
  };

  const sortJobsByRemote = () => {
    const sortedJobs = [...jobs].sort((a, b) =>
      b.remoteOrOnsite.localeCompare(a.remoteOrOnsite)
    );
    setJobs(sortedJobs);
  };

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
        <button className="btn-primary" onClick={sortJobsByRemote}>
          Sort by Remote
        </button>
        <button className="btn-primary" onClick={sortJobsByOnsite}>
          Sort by On Site
        </button>
      </div>

      <div className="mt-12">
        {jobs.map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
