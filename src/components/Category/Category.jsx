import React from "react";

const Category = ({ categoryData }) => {
  const { job, logo, name } = categoryData;
  return (
    <div className="bg-indigo-50 rounded-lg p-12">
      <img src={logo} alt="" />
      <h4 className="font-bold my-2">{name}</h4>
      <p>{job}</p>
    </div>
  );
};

export default Category;
