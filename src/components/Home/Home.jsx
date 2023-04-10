import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import { useLoaderData } from "react-router-dom";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  const categoryDatum = useLoaderData();
  const [jobs, setJobs] = useState([]);
  const [seeAllJobs, setSeeAllJobs] = useState(false);
  useEffect(() => {
    fetch("job.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const handleSeeAllJobs = () => {
    setSeeAllJobs(true);
  };
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row bg-indigo-50">
        <div className="md:w-6/12 p-24 ">
          <h1 className="text-6xl font-semibold mb-8">
            One Step Closer To Your{" "}
            <span className="text-indigo-500">Dream Job</span>
          </h1>
          <p className="mb-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div className="md:w-6/12">
          <img
            src="../../../assets/All Images/profile.png"
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>

      <section>
        <div className="text-center mt-12">
          <h2 className="text-4xl font-bold mb-4">Job Category List</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-7 items-center justify-evenly mt-12 px-4">
          {categoryDatum.map((categoryData) => (
            <Category
              key={categoryData.id}
              categoryData={categoryData}
            ></Category>
          ))}
        </div>
      </section>

      <section>
        <div className="text-center mt-12">
          <h2 className="text-4xl font-bold mb-4">Featured Jobs</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-24 gap-4 mt-8">
          {jobs.slice(0, seeAllJobs ? 6 : 4).map((job) => (
            <Jobs key={job.id} job={job}></Jobs>
          ))}
        </div>
      </section>

      {!seeAllJobs && (
        <span onClick={handleSeeAllJobs}>
          <button className="btn-primary mb-8 mt-8 mx-auto block">
            See All Jobs
          </button>
        </span>
      )}
    </div>
  );
};

export default Home;
