"use client";

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ToyStoreSalesPredictionGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // In a real scenario, you'd fetch this data from your API
    const fetchData = async () => {
      // Replace this with actual API call
      const mockData = [
        {"month":"Jan","Lego Sets":16234.56,"Planes":8765.43,"Bikes":12987.65,"Car Section":10876.54,"Dolls":9765.43,"Sports":7654.32},
        {"month":"Feb","Lego Sets":15123.45,"Planes":8234.56,"Bikes":11876.54,"Car Section":10234.56,"Dolls":9234.56,"Sports":7123.45},
        {"month":"Mar","Lego Sets":17345.67,"Planes":9876.54,"Bikes":14098.76,"Car Section":11987.65,"Dolls":10987.65,"Sports":8765.43},
        {"month":"Apr","Lego Sets":18456.78,"Planes":10345.67,"Bikes":15209.87,"Car Section":13098.76,"Dolls":12098.76,"Sports":9876.54},
        {"month":"May","Lego Sets":19567.89,"Planes":10987.65,"Bikes":16320.98,"Car Section":14209.87,"Dolls":13209.87,"Sports":10987.65},
        {"month":"Jun","Lego Sets":21789.01,"Planes":12109.87,"Bikes":17432.09,"Car Section":15320.98,"Dolls":14320.98,"Sports":12098.76},
        {"month":"Jul","Lego Sets":23901.23,"Planes":13221.09,"Bikes":19543.21,"Car Section":16432.09,"Dolls":15432.09,"Sports":13209.87},
        {"month":"Aug","Lego Sets":22790.12,"Planes":12665.43,"Bikes":18432.09,"Car Section":15876.54,"Dolls":14876.54,"Sports":12665.43},
        {"month":"Sep","Lego Sets":20678.9,"Planes":11554.32,"Bikes":16321.09,"Car Section":14765.43,"Dolls":13765.43,"Sports":11554.32},
        {"month":"Oct","Lego Sets":19567.89,"Planes":10987.65,"Bikes":15209.87,"Car Section":13654.32,"Dolls":12654.32,"Sports":10443.21},
        {"month":"Nov","Lego Sets":18456.78,"Planes":10456.78,"Bikes":14098.76,"Car Section":12543.21,"Dolls":11543.21,"Sports":9332.1},
        {"month":"Dec","Lego Sets":24912.34,"Planes":14332.1,"Bikes":20654.32,"Car Section":17543.21,"Dolls":16543.21,"Sports":14332.1}
      ];
      setData(mockData);
    };

    fetchData();
  }, []);

  const colors = {
    'Lego Sets': '#8884d8',
    'Planes': '#82ca9d',
    'Bikes': '#ffc658',
    'Car Section': '#ff7300',
    'Dolls': '#e15759',
    'Sports': '#4e79a7'
  };

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {Object.keys(colors).map((category) => (
            <Bar key={category} dataKey={category} fill={colors[category]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ToyStoreSalesPredictionGraph;