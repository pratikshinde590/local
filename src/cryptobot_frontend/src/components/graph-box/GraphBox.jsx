import React from 'react'
import "./graph.scss"
import ChartPie from '../charts/piechart/ChartPie'

const GraphBox = () => {
    return (
        <div className='graphBox'>
            <div className='centerValue'>
                <section className='mt-2'>Portfolio Market Value</section>
                <p className='fw-bold mt-1'>$149,757.29</p>
            </div>
            <ChartPie />
            <div className='graphData'>
                <div> <section style={{ backgroundColor: "#1193F0" }}></section> Positions - 17 <span>$1,42,269.42 (95%)</span></div>
                <div> <section style={{ backgroundColor: "#96DC5F" }}></section> Cash <span>$1,42,269.42 (95%)</span></div>
            </div>
        </div>
    )
}

export default GraphBox