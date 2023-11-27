import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { mexcBuyOrder, mexcSellOrder } from '../../store/mexc-store/MexcSlice';

const InvestPopUp = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [smShow, setSmShow] = useState(false);

    //------------- paramter to buy trade --------------------//
    const buyOrderData = {
        "symbol": "HBARUSDT",
        "type": "LIMIT",
        "quantity": 85,
        "price": 0.06056
    }

    //------------- paramter to sell trade --------------------//
    const sellOrderData = {
        "symbol": "HBARUSDT",
        "type": "LIMIT",
        "quantity": 85,
        "price": 0.06056
    }

    //------------------------ Place order ------------------//
    const placeOrder = async () => {
        await dispatch(mexcBuyOrder(buyOrderData));
        await dispatch(mexcSellOrder(sellOrderData));
        navigate("/create-investments");
    }


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
                    <div className='mt-3'><Button style={{ fontSize: "14px" }} className='rounded-5 w-100' onClick={placeOrder}>Approve Trades</Button></div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default InvestPopUp