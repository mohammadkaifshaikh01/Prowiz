import React from "react";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from "recharts";

const data = [
  { name: "Starter Pack", uv: 120, pv: 85, amt: 40 },
  { name: "Family Pack", uv: 75, pv: 110, amt: 60 }
];

const pieData = [
  { name: "Starter Pack", value: 120 },
  { name: "Family Pack", value: 75 }
];

const COLORS = ["#0088FE", "#00C49F"];

const Charts = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 bg-gray-100">
      
      {/* Bar Chart Container */}
      <div className="p-6 bg-white shadow-md rounded-lg w-full md:w-1/2">
        <h2 className="text-lg font-semibold text-left mb-4">Split of Units Processed Today</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend align="right" verticalAlign="top" />
            <Bar dataKey="uv" fill="#0088FE" name="User Visits" barSize={40} />
            <Bar dataKey="pv" fill="#00C49F" name="Page Views" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart Container */}
      <div className="p-6 bg-white shadow-md rounded-lg w-full md:w-1/2">
        <h2 className="text-lg font-semibold text-left mb-4">Reasons For Rejection</h2>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie 
              data={pieData} 
              cx="50%" 
              cy="50%" 
              outerRadius={90} 
              fill="#8884d8" 
              dataKey="value" 
              label
            >
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend align="right" verticalAlign="top" />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Charts;
