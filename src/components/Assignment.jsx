import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const data = [
  { name: "Assignment 1", value: 60 },
  { name: "Assignment 2", value: 58 },
  { name: "Assignment 3", value: 60 },
  { name: "Assignment 4", value: 59 },
  { name: "Assignment 5", value: 49 },
  { name: "Assignment 6", value: 58 },
  { name: "Assignment 7", value: 60 },
  { name: "Assignment 8", value: 58 },
];

const Assignment = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h2 className="text-center text-3xl mt-10">
          Obtained Marks in the last 8 Assignments
        </h2>
        <PieChart width={900} height={500}>
          <defs>
            <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
              <stop offset="30%" stopColor="#7E90FE" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#4b0082" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Pie
            className="cursor-pointer"
            dataKey="value"
            startAngle={0}
            endAngle={-360}
            data={data}
            cx={450}
            cy={250}
            outerRadius={200}
            fill="url(#colorUv)"
            label
          />
        </PieChart>
      </div>
    </div>
  );
};

export default Assignment;
