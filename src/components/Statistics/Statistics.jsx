import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";
const data = [
  {
    name: "Assignment 1 ",
    Total: 60,
    Get: 59,
  },
  {
    name: "Assignment 2 ",
    Total: 60,
    Get: 60,
  },
  {
    name: "Assignment 3 ",
    Total: 60,
    Get: 60,
  },
  {
    name: "Assignment 4",
    Total: 60,
    Get: 60,
  },
  {
    name: "Assignment 5",
    Total: 60,
    Get: 60,
  },
  {
    name: "Assignment 6 ",
    Total: 60,
    Get: 57,
  },
  {
    name: "Assignment 7 ",
    Total: 60,
    Get: 60,
  },
  {
    name: "Assignment 8 ",
    Total: 60,
    Get: 60,
  },
];
const cardinal = curveCardinal.tension(0.2);
const Statistics = () => {
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
        Statistics
      </h3>
      <div className="mx-24 border rounded-lg p-20 mt-12 bg-slate-200 mb-20">
        <AreaChart
          width={1000}
          height={400}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 100,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#059669"
            fill="#a5b4fc"
            fillOpacity={0.3}
          />
          <Area
            type={cardinal}
            dataKey="Get"
            stroke="#82ca9d"
            fill="#6366f1"
            fillOpacity={0.3}
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
