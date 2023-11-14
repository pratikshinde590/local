import React from 'react'
import "./graph.css"
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
                <div> <section></section> Positions - 17</div>
                <div> <section></section> Cash</div>
            </div>
        </div>
    )
}

export default GraphBox