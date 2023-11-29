import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { mexcBuyOrder, mexcSellOrder } from '../../store/mexc-store/MexcSlice';

const InvestPopUp = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [smShow, setSmShow] = useState(false);

    // //------------- sample paramter to buy trade --------------------//
    // const buyOrderData = {
    //     "symbol": "HBARUSDT",
    //     "type": "LIMIT",
    //     "quantity": 85,
    //     "price": 0.06056
    // }

    // //------------- sample paramter to sell trade --------------------//
    // const sellOrderData = {
    //     "symbol": "HBARUSDT",
    //     "type": "LIMIT",
    //     "quantity": 85,
    //     "price": 0.06056
    // }

    const buyOrders = props.buyOrders;
    const sellOrders = props.sellOrders;
    const totalInvestment = buyOrders.reduce((acc, order) => acc + order.quantity * order.price, 0);

    //------------------------ Place order ------------------//
    const placeOrder = async () => {
        for (const buyOrderData of buyOrders) {
            await dispatch(mexcBuyOrder(buyOrderData));
        }
        for (const sellOrderData of sellOrders) {
            await dispatch(mexcSellOrder(sellOrderData));
        }
        // navigate("/create-investments");
        setSmShow(false)
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
                    <div style={{ fontSize: "13px" }}>You are about to invest a total sum of about <strong>${totalInvestment.toFixed(2)}</strong> at <strong>{buyOrders.length || 0}</strong> different trade values. You will get notified on each purchase and sale.</div>
                    <div className='mt-3'><Button style={{ fontSize: "14px" }} className='rounded-5 w-100' onClick={placeOrder}>Approve Trades</Button></div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default InvestPopUp