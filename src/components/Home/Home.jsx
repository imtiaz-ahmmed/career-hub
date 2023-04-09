import React from "react";
import Category from "../Category/Category";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const categoryDatum = useLoaderData();
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
            src="../../../assets/All Images/P3OLGJ1 copy 1.png"
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
      </section>
    </div>
  );
};

export default Home;
