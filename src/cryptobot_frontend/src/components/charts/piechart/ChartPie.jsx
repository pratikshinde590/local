import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import "./chart-pie.scss"

const ChartPie = () => {

    const data = [
        { name: 'Group A', value: 600 },
        { name: 'Group B', value: 50 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <>
            <div className='chartPie'>
                <ResponsiveContainer width="100%" aspect={1}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx={"50%"}
                            cy={100}
                            innerRadius={72}
                            outerRadius={90}
                            fill="#8884d8"
                            paddingAngle={1}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default ChartPie