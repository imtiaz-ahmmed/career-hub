import React, { useState, useEffect } from "react";
import { getStoredJob } from "../../utils/fakeDB";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const [job, setJob] = useState([]);
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
    setJob(singleJob);
  }, []);
  console.log(job);

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
    </div>
  );
};

export default AppliedJobs;
