import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import "./chart-pie.css"

const ChartPie = () => {

    const data = [
        { name: 'Group A', value: 600 },
        { name: 'Group B', value: 50 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <>
            <div className='chartPie'>

                <PieChart width={500} height={250}>
                    <Pie
                        data={data}
                        cx={170}
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
            </div>
        </>
    )
}

export default ChartPie