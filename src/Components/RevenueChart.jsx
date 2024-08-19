import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { month: 'Jan', previous: 120000, recent: 15000 },
  { month: 'Feb', previous: 20000, recent: 260000 },
  { month: 'Mar', previous: 50000, recent: 180000 },
  { month: 'Apr', previous: 110000, recent: 90000 },
  { month: 'May', previous: 170000, recent: 60000 },
  { month: 'Jun', previous: 105000, recent: 140000 },
];

const RevenueChart = () => {

  const CustomXAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="middle"
          fill="#98A2B3"
          className="text-xs font-medium"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  // Custom tick component for Y-axis
  const CustomYAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dx={-10}
          textAnchor="end"
          fill="#98A2B3"
          className="text-xs font-medium"
        >
          {`$${payload.value / 1000}k`}
        </text>
      </g>
    );
  };

  const generateYAxisTicks = () => {
    const maxValue = Math.max(...data.flatMap(d => [d.previous, d.recent]));
    const ticks = [];
    for (let i = 0; i <= maxValue; i += 25000) {
      ticks.push(i);
    }
    return ticks;
  };

  return (
    <div className="w-full max-w-4xl mx-3 p-6 bg-white rounded-lg shadow-lg" style={{ backgroundColor: "white" }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[18px] font-bold text-gray-800">Revenue</h2>
        <div className="flex justify-center space-x-4">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor:"#5D60EF"}}></div>
            <span className="text-sm" style={{color : "grey", fontSize: "12px"}}>Previous 6 month</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2" style={{backgroundColor: "#86DAF8"}}></div>
            <span className="text-sm" style={{color : "grey", fontSize: "12px"}}>Recent 6 month</span>
          </div>
        </div>
        <select className="p-1 rounded-[114px] " style={{ backgroundColor: "#F9FAFB", fontWeight: 400, fontSize: "12px"}}>
          <option>Last 6 Months</option>
        </select>
      </div>
      <div className="h-[11rem]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
          <CartesianGrid stroke="#E5E7EB50" />
            <XAxis dataKey="month" tick={<CustomXAxisTick />} axisLine={{ stroke: '#E5E7EB' }} tickLine={false} />
            <YAxis
              tick={<CustomYAxisTick />}
              axisLine={{ stroke: '#E5E7EB' }}
              tickLine={false}
              ticks={generateYAxisTicks()}
              domain={[0, 'dataMax']}
            />
            <Tooltip />
            <Line type="monotone" dataKey="previous" stroke="#5D60EF" strokeDasharray="5 5" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="recent" stroke="#86DAF8" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default RevenueChart;