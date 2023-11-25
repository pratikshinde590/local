import React from 'react'
import "./investment-history.scss"
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Pagination, Row, Table } from "react-bootstrap";
import DateRanger from '../../components/date-ranger/DateRanger';

function InvestmentHistory() {

    const navigate = useNavigate();
    const array = ["", "", "", "", "", "", "", "", "", "", ""];

    return (
        <>
            <div className="historyPage">

                <header className='investHeader'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left me-2 mb-1" style={{ cursor: "pointer" }} viewBox="0 0 16 16" onClick={() => navigate(-1)}>
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    <span className='fw-bold'>Investments</span>
                    <span style={{ color: "#828282" }}> / Investment History</span>
                </header>

                <Container className='pt-3'>
                    <Row>
                        <Col className='fw-bold'>Investment History</Col>
                        <Col className='text-end newInvestBtnCon'>
                            <DateRanger />
                            <Button className='ms-3 fw-medium rounded-5 ps-4 pe-4 btn-light bt-primary'>Print</Button>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="mb-4">
                        <Col className='mt-4' lg="6" xl="3">
                            <div className="bg-white box-style p-2 ps-3 rounded-3">
                                <p className="fs-6 fw-bold m-0 text-primary">$120,000</p>
                                <span className="secondary-text">Net Realized Profit</span>
                            </div>
                        </Col>
                        <Col className='mt-4' lg="6" xl="3">
                            <div className="bg-white box-style p-2 rounded-3">
                                <p className="fs-6 fw-bold m-0 text-primary">$100,000</p>
                                <span className="secondary-text">Total Invested</span>
                            </div>
                        </Col>
                        <Col className='mt-4' lg="6" xl="3">
                            <div className="bg-white box-style p-2 rounded-3">
                                <p className="fs-6 fw-bold m-0 text-primary">ETH/USD - Binance</p>
                                <span className="secondary-text">Top Performer</span>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>

                <Container className='mt-2'>
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

                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>

                </Container>

            </div>
        </>
    )
}

export default InvestmentHistory