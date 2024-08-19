import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Sun', profit: 300 },
  { day: 'Mon', profit: 200 },
  { day: 'Tue', profit: 400 },
  { day: 'Wed', profit: 300 },
  { day: 'Thu', profit: 200 },
  { day: 'Fri', profit: 500 },
  { day: 'Sat', profit: 250 },
];

const ProfitCard = () => {
    const CustomXAxisTick = ({ x, y, payload }) => {
        return (
          <g transform={`translate(${x},${y})`}>
            <text
              x={0}
              y={0}
              dy={16}
              textAnchor="middle"
              fill="#98A2B3"
              className="text-xs font-medium font-sans"
            >
              {payload.value}
            </text>
          </g>
        );
      };
  return (
    <div className="w-full max-w-md rounded-lg shadow-lg p-6" style={{backgroundColor:"white"}}>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">Profit</h2>
        <button style={{color : "grey"}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
      
      <div className="flex flex-row justify-between gap-4 mb-4">
        <div>
          <p className="text-xs" style={{color : "grey"}}>Total Revenue</p>
          <p className="text-xs font-semibold">$5,456.00</p>
        </div>
        <div>
          <p className="text-xs" style={{color : "grey"}}>Total Client</p>
          <p className="text-xs font-semibold">350</p>
        </div>
        <div>
          <p className="text-xs" style={{color : "grey"}}>Total Revenue</p>
          <p className="text-xs font-semibold">$5,456.00</p>
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="day" tick={<CustomXAxisTick />} axisLine={{ stroke: '#E5E7EB' }} tickLine={false} />
            <Bar dataKey="profit" fill="#38bdf8"  barSize={22} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProfitCard;