import React from 'react'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { Button } from 'react-bootstrap';

const DateRanger = () => {
    return (
        <>
            <DateRangePicker initialSettings={{ startDate: '1/1/2023', endDate: '3/1/2023' }}>
                <Button className='ms-3 fw-medium rounded-5 ps-4 pe-4 btn-light bt-primary'>Last 7 days (20 - 26 Oct 2023)</Button>
            </DateRangePicker>
        </>
    )
}

export default DateRanger