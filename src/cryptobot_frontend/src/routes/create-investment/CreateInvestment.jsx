import React, { useEffect } from 'react'
import "./create-investment.scss"
import { Button, Col, Container, Pagination, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import SmallChart from '../../components/charts/small-chart/SmallChart'
// import print from "../../assets/print.svg"
import { useDispatch, useSelector } from 'react-redux'
import { getTrades } from '../../store/common/trade.reducer'

const CreateInvestment = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const array = ["", "", "", "", "", "", "", "", "", "", ""];

    const { tradeArray } = useSelector(state => state.Trades);
    useEffect(() => {
        dispatch(getTrades())
    }, []);

    useEffect(() => {
        console.log(tradeArray)
    }, [tradeArray])


    return (
        <>
            <div className='createInvestment'>
                <header className='createInvestHeader'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left me-2 mb-1" style={{ cursor: "pointer" }} viewBox="0 0 16 16" onClick={() => navigate(-1)}>
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    <span className='fw-bold'>Investments</span>
                    <span style={{ color: "#828282" }}> / Traded Investment</span></header>
                <Container className='mt-4'>
                    <Row>
                        <Col className='fw-bold fs-5'>Traded Investment <span className='trade-span-1'>Narrative :</span> <span className='trade-span-2'>GameFi</span></Col>
                        <Col className='text-end createInvestBtnCon'>
                            {/* <Button className='ms-3 rounded-5 ps-4 pe-4 btn-light' style={{ color: "#1193F0" }}> <img src={print} alt="" width={20} style={{ marginRight: "6px" }} />Print</Button> */}
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col className='mt-4' lg="6" xl="3">
                            <div className="bg-white box-style p-2 ps-3 rounded-3">
                                <p className="fs-6 fw-bold m-0">BTC/USD - Binance</p>
                                <p className="m-0 trade-colorBox-1 me-2">Risk: <span className='fw-bold'>Medium</span></p>
                                <p className="m-0 trade-colorBox-2">Market Cap: <span className='fw-bold'>High</span></p>
                            </div>
                        </Col>
                        <Col className='mt-4' lg="6" xl="3">
                            <div className="bg-white box-style p-2 d-flex flex-row rounded-3">
                                <SmallChart />
                                <div className="d-flex flex-column ms-3 pt-1">
                                    <p className="fs-6 fw-bold m-0"> <span className='text-primary'>16</span> <span className='text-secondary'>/20</span></p>
                                    <p className="m-0 text-secondary" style={{ fontSize: "13px" }}>Invested</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='mt-4' lg="6" xl="3">
                            <div className="bg-white box-style p-2 d-flex flex-row rounded-3">
                                <SmallChart />
                                <div className="d-flex flex-column ms-3 pt-1">
                                    <p className="fs-6 fw-bold m-0 text-primary">$21,934.24 <span className='fw-medium text-secondary' style={{ fontSize: "13px" }}> of $28K</span></p>
                                    <p className="m-0 text-secondary" style={{ fontSize: "13px" }}>Total Invested</p>
                                </div>
                            </div>
                        </Col>
                        <Col className='mt-4' lg="6" xl="3">
                            <div className="bg-white box-style p-2 ps-3 rounded-3">
                                <p className="fs-5 fw-bold m-0 text-primary">$1,343.56</p>
                                <p className="text-secondary m-0" style={{ fontSize: "13px" }}>Net Realized Profit</p>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Container className='mt-4'>
                    <Table responsive striped hover>
                        <thead style={{ fontSize: "14px" }}>
                            <tr>
                                <th className='bg-dark text-white fw-medium rounded-start-3'>#</th>
                                <th className='bg-dark text-white fw-medium'>Entry ID</th>
                                <th className='bg-dark text-white fw-medium'>Symbol</th>
                                <th className='bg-dark text-white fw-medium'>Entry Price</th>
                                <th className='bg-dark text-white fw-medium'>Buy Quantity</th>
                                <th className='bg-dark text-white fw-medium'>Symbol Quantity</th>
                                <th className='bg-dark text-white fw-medium'>Type</th>
                                <th className='bg-dark text-white fw-medium'>status</th>
                                <th className='bg-dark text-white fw-medium'>Exit ID</th>
                                <th className='bg-dark text-white fw-medium'>Exit Price</th>
                                <th className='bg-dark text-white fw-medium'>Sell Quantity</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: "13px" }}>
                            {tradeArray.map((val, index) => {
                                return (
                                    <tr>
                                        <td className='rounded-start-3'>{index + 1}</td>
                                        <td>{val.buy?.orderId}</td>
                                        <td>{val.buy?.symbol}</td>
                                        <td>${val.buy?.price}</td>
                                        <td>{val.buy?.origQty}</td>
                                        <td>{val.buy?.origQty}</td>
                                        <td>{val.buy?.type}</td>
                                        <td>{val.buy?.status}</td>
                                        <td>{"None"}</td>
                                        <td>${val.sell?.price}</td>
                                        <td>{val.sell?.quantity}</td>
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

export default CreateInvestment