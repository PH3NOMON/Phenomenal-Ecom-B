"use client"

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";


const ToyStoreSalesPredictionGraph = () => {
  const [activeTab, setActiveTab] = useState('sales');
  
  const categories = [
    'Lego Sets',
    'Planes',
    'Bikes',
    'Car Section',
    'Dolls',
    'Sports'
  ];

  const colors = {
    'Lego Sets': '#8884d8',
    'Planes': '#82ca9d',
    'Bikes': '#ffc658',
    'Car Section': '#ff7300',
    'Dolls': '#e15759',
    'Sports': '#4e79a7'
  };

 

  // Sample data
const data = [
  {
    "month": "Jan",
    "Lego Sets": 16234.56,
    "Lego Sets Page Views": 48703.68,
    "Planes": 8765.43,
    "Planes Page Views": 26296.29,
    "Bikes": 12987.65,
    "Bikes Page Views": 38962.95,
    "Car Section": 10876.54,
    "Car Section Page Views": 32629.62,
    "Dolls": 9765.43,
    "Dolls Page Views": 29296.29,
    "Sports": 7654.32,
    "Sports Page Views": 22962.96
  },
  {
    "month": "Feb",
    "Lego Sets": 14567.89,
    "Lego Sets Page Views": 43600.56,
    "Planes": 7890.12,
    "Planes Page Views": 23670.36,
    "Bikes": 11987.54,
    "Bikes Page Views": 35962.98,
    "Car Section": 9876.45,
    "Car Section Page Views": 29629.35,
    "Dolls": 8765.43,
    "Dolls Page Views": 26296.28,
    "Sports": 6543.21,
    "Sports Page Views": 19625.43
  },
  {
    "month": "Mar",
    "Lego Sets": 15345.67,
    "Lego Sets Page Views": 45876.45,
    "Planes": 8345.67,
    "Planes Page Views": 25036.71,
    "Bikes": 12654.32,
    "Bikes Page Views": 37820.13,
    "Car Section": 10234.56,
    "Car Section Page Views": 30703.68,
    "Dolls": 9234.56,
    "Dolls Page Views": 27800.72,
    "Sports": 7012.34,
    "Sports Page Views": 21037.02
  },
  {
    "month": "Apr",
    "Lego Sets": 15876.98,
    "Lego Sets Page Views": 47630.94,
    "Planes": 8765.32,
    "Planes Page Views": 26295.96,
    "Bikes": 12897.56,
    "Bikes Page Views": 38692.68,
    "Car Section": 10865.43,
    "Car Section Page Views": 32596.54,
    "Dolls": 9543.32,
    "Dolls Page Views": 28629.65,
    "Sports": 7432.19,
    "Sports Page Views": 22365.78
  },
  {
    "month": "May",
    "Lego Sets": 16250.67,
    "Lego Sets Page Views": 48752.01,
    "Planes": 9123.54,
    "Planes Page Views": 27370.62,
    "Bikes": 13298.76,
    "Bikes Page Views": 39896.28,
    "Car Section": 11345.67,
    "Car Section Page Views": 34037.01,
    "Dolls": 9876.54,
    "Dolls Page Views": 29629.61,
    "Sports": 7654.78,
    "Sports Page Views": 22963.44
  },
  {
    "month": "Jun",
    "Lego Sets": 16543.89,
    "Lego Sets Page Views": 49630.29,
    "Planes": 9432.76,
    "Planes Page Views": 28302.68,
    "Bikes": 13543.21,
    "Bikes Page Views": 40629.63,
    "Car Section": 11654.32,
    "Car Section Page Views": 34862.96,
    "Dolls": 10012.34,
    "Dolls Page Views": 30036.71,
    "Sports": 7890.12,
    "Sports Page Views": 23670.36
  },
  {
    "month": "Jul",
    "Lego Sets": 16876.54,
    "Lego Sets Page Views": 50629.62,
    "Planes": 9678.12,
    "Planes Page Views": 29034.36,
    "Bikes": 13921.45,
    "Bikes Page Views": 41764.35,
    "Car Section": 11890.43,
    "Car Section Page Views": 35671.29,
    "Dolls": 10234.89,
    "Dolls Page Views": 30703.68,
    "Sports": 8123.67,
    "Sports Page Views": 24370.98
  },
  {
    "month": "Aug",
    "Lego Sets": 17123.98,
    "Lego Sets Page Views": 51432.45,
    "Planes": 9876.54,
    "Planes Page Views": 29590.62,
    "Bikes": 14123.56,
    "Bikes Page Views": 42370.68,
    "Car Section": 12098.54,
    "Car Section Page Views": 36296.29,
    "Dolls": 10543.21,
    "Dolls Page Views": 31629.64,
    "Sports": 8345.76,
    "Sports Page Views": 25037.28
  },
  {
    "month": "Sep",
    "Lego Sets": 17432.76,
    "Lego Sets Page Views": 52320.94,
    "Planes": 10123.45,
    "Planes Page Views": 30412.35,
    "Bikes": 14567.32,
    "Bikes Page Views": 43600.56,
    "Car Section": 12345.98,
    "Car Section Page Views": 37102.93,
    "Dolls": 10876.54,
    "Dolls Page Views": 32629.65,
    "Sports": 8654.32,
    "Sports Page Views": 25962.96
  },
  {
    "month": "Oct",
    "Lego Sets": 17654.39,
    "Lego Sets Page Views": 52962.87,
    "Planes": 10432.98,
    "Planes Page Views": 31296.24,
    "Bikes": 14876.89,
    "Bikes Page Views": 44630.67,
    "Car Section": 12543.67,
    "Car Section Page Views": 37631.01,
    "Dolls": 11012.32,
    "Dolls Page Views": 33036.96,
    "Sports": 8765.89,
    "Sports Page Views": 26296.28
  },
  {
    "month": "Nov",
    "Lego Sets": 17890.12,
    "Lego Sets Page Views": 53670.36,
    "Planes": 10654.32,
    "Planes Page Views": 31962.96,
    "Bikes": 15234.76,
    "Bikes Page Views": 45629.35,
    "Car Section": 12890.54,
    "Car Section Page Views": 38630.62,
    "Dolls": 11345.76,
    "Dolls Page Views": 34037.28,
    "Sports": 8901.67,
    "Sports Page Views": 26705.01
  },
  {
    "month": "Dec",
    "Lego Sets": 18123.54,
    "Lego Sets Page Views": 54370.62,
    "Planes": 10876.54,
    "Planes Page Views": 32629.62,
    "Bikes": 15678.34,
    "Bikes Page Views": 47035.02,
    "Car Section": 13098.76,
    "Car Section Page Views": 39296.29,
    "Dolls": 11543.89,
    "Dolls Page Views": 34629.56,
    "Sports": 9076.32,
    "Sports Page Views": 27367.56
  }
];


return (
  <div className="space-y-8 p-4">
    <Tabs>
      <TabsList>
        <TabsTrigger 
          value="sales" 
          active={activeTab === 'sales'}
          onClick={() => setActiveTab('sales')}
        >
          Sales Prediction
        </TabsTrigger>
        <TabsTrigger 
          value="pageviews" 
          active={activeTab === 'pageviews'}
          onClick={() => setActiveTab('pageviews')}
        >
          Page Views Analysis
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="sales" active={activeTab === 'sales'}>
        {categories.map(category => (
          <Card key={category} className="w-full mb-6">
            <CardHeader>
              <CardTitle>{category} - Predicted Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis 
                      
                      width={80}
                    />
                    
                    <Legend />
                    <Line 
                      type="monotone"
                      dataKey={category}
                      name="Sales"
                      stroke={colors[category]}
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="pageviews" active={activeTab === 'pageviews'}>
        {categories.map(category => (
          <Card key={category} className="w-full mb-6">
            <CardHeader>
              <CardTitle>
                {category} - Page View Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis 
                      
                      width={80}
                    />
                    
                    <Legend />
                    <Line 
                      type="monotone"
                      dataKey={`${category} Page Views`}
                      name="Page Views"
                      stroke={colors[category]}
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        ))}
      </TabsContent>
    </Tabs>
  </div>
);
};

export default ToyStoreSalesPredictionGraph;