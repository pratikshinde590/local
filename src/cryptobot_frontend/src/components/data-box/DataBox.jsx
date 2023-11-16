import React from 'react'
import "./databox.scss"

const DataBox = () => {
    return (
        <div className='dataBox'>
            <div className='boxLeft ps-3'>Total Investment</div>
            <div className='boxRight text-end pe-4'>
                <section className='fw-bolder fs-5'>
                    $ 50,000.00
                </section>
                <p>+394.88%</p>
            </div>
        </div>
    )
}

export default DataBox