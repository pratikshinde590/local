import React from 'react'
import "./databox.scss"

const DataBox = ({name, value, percentage}) => {
    return (
        <div className='dataBox'>
            <div className='boxLeft ps-3'>{name}</div>
            <div className='boxRight text-end pe-4'>
                <section className='fw-bolder fs-5'>
                    $ {value}
                </section>
                <p>+ {percentage}%</p>
            </div>
        </div>
    )
}

export default DataBox