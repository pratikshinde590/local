import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartLine = () => {
  const data = [
    {
      time: "10 AM",
      amount: 1500,
    },
    {
      time: "11 AM",
      amount: 500,
    },
    {
      time: "12 AM",
      amount: 1200,
    },
    {
      time: "1 PM",
      amount: 400,
    },
    {
      time: "2 PM",
      amount: 800,
    },
    {
      time: "3 PM",
      amount: 200,
    },
  ];

  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0075FF" stopOpacity={1} />
              <stop offset="95%" stopColor="#0075FF" stopOpacity={.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" stroke='#0F55A7' fontSize={12} />
          <YAxis stroke='#0F55A7' fontSize={12} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip itemStyle={{ fontSize: "12px" }} labelStyle={{ fontSize: "12px" }} />
          <Area type="monotone" dataKey="amount" stroke="blue" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}

export default ChartLine