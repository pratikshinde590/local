import React from 'react'
import "./progress-bar.scss"

const ProgressBar = ({ gradient, percent, title }) => {

    const gradientArray = [
        "linear-gradient(180deg, #7FC9FF 0%, #1193F0 100%)",
        "linear-gradient(180deg, #676C92 0%, #51546F 100%)",
    ]

    return (
        <>
            <div className='progressBar'>
                <section className='fw-bold'>{title}</section>
                <div className='fw-bold' style={{ width: `${percent}%`, background: gradientArray[gradient] }}>
                    $ 3,397,185,533
                </div>
            </div>
        </>
    )
}

export default ProgressBar