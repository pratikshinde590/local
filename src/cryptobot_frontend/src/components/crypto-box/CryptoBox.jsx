import React from 'react'
import "./cryptobox.scss"
import { Col, Container, Row } from 'react-bootstrap'
// import img from "../../../assets/bitcoin.svg"
import ProgressBar from './progress-bar/ProgressBar'

const CryptoBox = () => {
    return (
        <div className='cyptoBox'>
            <Container fluid>
                <Row className='pt-2 crypto-top ps-2 pe-2'>
                    <Col>
                        {/* <img src={img} alt="" />  */}
                        BTC/ETH
                    </Col>
                    <Col className='text-end digit fw-bold fs-6'>$3,397,185,533</Col>
                </Row>
            </Container>

            <ProgressBar title={"Total Investment"} gradient={0} percent={90} />
            <ProgressBar title={"Total Return"} gradient={1} percent={50} />

        </div>
    )
}

export default CryptoBox