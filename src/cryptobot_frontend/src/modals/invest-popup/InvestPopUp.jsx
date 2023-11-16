import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const InvestPopUp = () => {

    const [smShow, setSmShow] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <Button className='ms-3 rounded-5 ps-4 pe-4' onClick={() => setSmShow(true)}>Invest</Button>

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fs-6' id="example-modal-sizes-title-sm">
                        Approve
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ fontSize: "13px" }}>You are about to invest a total sum of <strong>$28,000</strong> at <strong>25</strong> different trade values. You will get notified on each purchase and sale.</div>
                    <div className='mt-3'><Button style={{ fontSize: "14px" }} className='rounded-5 w-100' onClick={() => navigate("/create-investments")}>Approve Trades</Button></div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default InvestPopUp