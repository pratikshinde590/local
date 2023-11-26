import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';
import "./small-chart.scss"

const SmallChart = () => {

    const data = [
        { name: 'Group A', value: 600 },
        { name: 'Group B', value: 50 },
    ];
    const COLORS = ['#F2C94C', '#D8DADC'];

    return (
        <>
            <div className='smallChart'>

               <section className='percentage'>64%</section>

                <PieChart width={55} height={55}>
                    <Pie
                        data={data}
                        cx={22}
                        cy={22}
                        innerRadius={18}
                        outerRadius={25}
                        fill="#D8DADC"
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

export default SmallChart