import React from 'react'
import "./new-investment.scss"
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import ParameterModal from '../../modals/parameterModal/ParameterModal';
import { useState } from 'react';
import InvestPopUp from '../../modals/invest-popup/InvestPopUp';

const NewInvestMents = () => {

    const array = ["", "", "", "", "", "", "", "", "", "", "", "", "", "",];
    const navigate = useNavigate();

    const [parameterPopUp, handleParameterPopUp] = useState(false);

    return (

        <>
            {parameterPopUp && <ParameterModal handleClose={handleParameterPopUp} />}

            <div className='newInvestment'>
                <header className='newInvestHeader'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left me-2 mb-1" style={{ cursor: "pointer" }} viewBox="0 0 16 16" onClick={() => navigate(-1)}>
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    <span className='fw-bold'>Dashboard</span>
                    <span style={{ color: "#828282" }}> / New Investment Plan</span>
                </header>
                <Container className='mt-4'>
                    <Row>
                        <Col className='fw-bold'>New Investment Plan</Col>
                        <Col className='text-end newInvestBtnCon'>
                            <Button className='ms-3 rounded-5 ps-4 pe-4 btn-light' style={{ color: "#1193F0" }} onClick={() => handleParameterPopUp(true)}>Parameters</Button>
                            <Button className='ms-3 rounded-5 ps-4 pe-4 btn-light' style={{ color: "#1193F0" }}>Print</Button>
                            <InvestPopUp />
                        </Col>
                    </Row>
                </Container>

                <Container className='mt-4'>
                    <Table responsive striped hover>
                        <thead style={{ fontSize: "14px" }}>
                            <tr>
                                <th className='bg-dark text-white fw-medium rounded-start-3'>#</th>
                                <th className='bg-dark text-white fw-medium'>Trade Value</th>
                                <th className='bg-dark text-white fw-medium'>Entry Price</th>
                                <th className='bg-dark text-white fw-medium'>Entry Fee</th>
                                <th className='bg-dark text-white fw-medium'>Quantity</th>
                                <th className='bg-dark text-white fw-medium'>Exit Price</th>
                                <th className='bg-dark text-white fw-medium'>Exit Fee</th>
                                <th className='bg-dark text-white fw-medium'>Qty to sell</th>
                                <th className='bg-dark text-white fw-medium'>Gross Profit</th>
                                <th className='bg-dark text-white fw-medium'>Net Profit</th>
                                <th className='bg-dark text-white fw-medium'>% Profit</th>
                                <th className='bg-dark text-white fw-medium rounded-end-3'>Qty Remaining</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: "13px" }}>
                            {array.map(() => {
                                return (
                                    <tr>
                                        <td className='rounded-start-3'>1</td>
                                        <td>$1,234.53</td>
                                        <td>$0.83</td>
                                        <td>$1.24</td>
                                        <td>123</td>
                                        <td>$0.83</td>
                                        <td>$1.24</td>
                                        <td>45</td>
                                        <td>$1,234.53</td>
                                        <td>$1,234.53</td>
                                        <td className='text-success'>802 %</td>
                                        <td className='rounded-end-3'>78</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Container>

            </div>
        </>
    )
}

export default NewInvestMents