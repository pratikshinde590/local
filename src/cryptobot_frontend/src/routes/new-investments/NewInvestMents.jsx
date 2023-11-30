import React from 'react'
import "./new-investment.scss"
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom';
import ParameterModal from '../../modals/parameterModal/ParameterModal';
import { useState, useEffect } from 'react';
import InvestPopUp from '../../modals/invest-popup/InvestPopUp';

// Backend APIs
import {
    indexUniqueRandomArray,
    calculateResult,
    qtyToSell,
    adjustedQtyToSell,
    grossTradeProfit,
    netTradeProfit,
} from "../../backend/utils";

const NewInvestMents = () => {

    const location = useLocation()
    const navigate = useNavigate();
    const queryParameters = new URLSearchParams(window.location.search)

    const [parameterPopUp, handleParameterPopUp] = useState(false);
    ;

    const [QTY, setQTY] = useState("")
    const [MINIMUM_TRADE_ENTRY_PRICE, setMINIMUM_TRADE_ENTRY_PRICE] = useState("")
    const [FIRST_TAKE_PROFIT_GOAL, setFIRST_TAKE_PROFIT_GOAL] = useState("")
    const [TOTAL_AMT, setTOTAL_AMT] = useState("")
    const [selectedSymbol, setselectedSymbol] = useState("")

    useEffect(() => {
        setQTY(queryParameters.get("numTrades"));
        setMINIMUM_TRADE_ENTRY_PRICE(queryParameters.get("minEntryPrice"));
        setFIRST_TAKE_PROFIT_GOAL(queryParameters.get("firstTakeProfitGoal"));
        setTOTAL_AMT(queryParameters.get("totalInvestment"));
        setselectedSymbol(queryParameters.get("symbol"));
    }, [location])

    useEffect(() => {
        generateTrades();
    }, [QTY, MINIMUM_TRADE_ENTRY_PRICE, FIRST_TAKE_PROFIT_GOAL, TOTAL_AMT, selectedSymbol]);


    const BUY_FEE_PCT = 0.10;
    const SELL_FEE_PCT = 0.10;

    const [randomNumbers, setRandomSeedNumbers] = useState([]);
    const [adjustedTradeValues, setAdjustedTradeValues] = useState([]);

    const [tradeEntryRandomNos, setTradeEntryRandomNos] = useState([]);
    const [tradeEntryFee, setTradeEntryFee] = useState([]);
    const [tradeExitRandomNos, setTradeExitRandomNos] = useState([]);
    const [tradeExitFee, setTradeExitFee] = useState([]);

    const [qtyToBuy, setQtyToBuy] = useState([]);
    const [qtyToSellArray, setQtyToSellArray] = useState([]);
    const [adjustedQtyToSellArray, setAdjustedQtyToSellArray] = useState([]);
    const [grossTradeProfitArray, setGrossTradeProfitArray] = useState([]);
    const [netTradeProfitArray, setNetTradeProfitArray] = useState([]);


    // buy orders
    const [buyOrders, setBuyOrders] = useState([]);

    // sell orders
    const [sellOrders, setSellOrders] = useState([]);

    const generateTrades = () => {
        // Generate random numbers between 750 and 3500
        const seedRandomValues = indexUniqueRandomArray(QTY * QTY, 750, 3500, true, QTY);
        setRandomSeedNumbers(seedRandomValues);

        // Calculate adjustedTradeValues array
        const adjustedValues = calculateResult(seedRandomValues, TOTAL_AMT);
        setAdjustedTradeValues(adjustedValues);

        const currentPrice = +MINIMUM_TRADE_ENTRY_PRICE;
        const maxPrice = +(currentPrice + (currentPrice * 0.05)).toFixed(5);

        // Generate tradeEntryRandomNos array
        const tradeEntryRandomNos = indexUniqueRandomArray(QTY * QTY, currentPrice, maxPrice, false, QTY);
        setTradeEntryRandomNos(tradeEntryRandomNos);

        setTradeEntryFee(tradeEntryRandomNos.map((value) => (value * BUY_FEE_PCT).toFixed(5)));

        const minTradeExitPrice = 0.70;
        const maxTradeExitPrice = 0.81;

        // Generate tradeExitRandomNos array
        const tradeExitRandomNos = indexUniqueRandomArray(QTY * QTY, minTradeExitPrice, maxTradeExitPrice, false, QTY);
        setTradeExitRandomNos(tradeExitRandomNos);

        setTradeExitFee(tradeExitRandomNos.map((value) => (value * SELL_FEE_PCT).toFixed(5)));

        // Calculate qtyToSell for each iteration and store it in a new array
        const qtyToSellArray = adjustedValues.map((value, i) =>
            Math.ceil(qtyToSell(value, tradeEntryRandomNos[i], tradeExitRandomNos[i], BUY_FEE_PCT, SELL_FEE_PCT))
        );
        setQtyToSellArray(qtyToSellArray);

        // Calculate qtyToBuy for each iteration and store it in a new array. Each value should be based on "adjustedValues[i]/tradeEntryRandomNos[i]"
        const qtyToBuy = adjustedValues.map((value, i) =>
            Math.ceil(value / tradeEntryRandomNos[i])
        );
        setQtyToBuy(qtyToBuy);

        const adjustedQtyToSellArray = qtyToSellArray.map((qty, i) =>
            Math.ceil(adjustedQtyToSell(qty, TOTAL_AMT, tradeExitRandomNos[i], adjustedValues[i], tradeEntryRandomNos[i], i === 0))
        );
        setAdjustedQtyToSellArray(adjustedQtyToSellArray);

        const grossTradeProfitArray = adjustedQtyToSellArray.map((qty, i) =>
            grossTradeProfit(tradeEntryRandomNos[i], tradeExitRandomNos[i], qty)
        );
        setGrossTradeProfitArray(grossTradeProfitArray);

        const netTradeProfitArray = grossTradeProfitArray.map((grossProfit, i) =>
            netTradeProfit(grossProfit, BUY_FEE_PCT * (adjustedValues[i] / tradeEntryRandomNos[i]), SELL_FEE_PCT * (adjustedQtyToSellArray[i] / tradeExitRandomNos[i])
            )
        );
        setNetTradeProfitArray(netTradeProfitArray);

        const buyOrders = tradeEntryRandomNos.map((value, i) => {
            return {
                symbol: selectedSymbol,
                type: 'LIMIT',
                quantity: qtyToBuy[i],
                price: value
            }
        });
        setBuyOrders(buyOrders);


        const sellOrders = tradeExitRandomNos.map((value, i) => {
            return {
                symbol: selectedSymbol,
                type: 'LIMIT',
                quantity: adjustedQtyToSellArray[i],
                price: value
            }
        });
        setSellOrders(sellOrders);
    }


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
                            {/* <Button className='ms-3 rounded-5 ps-4 pe-4 btn-light' style={{ color: "#1193F0" }}>Print</Button> */}
                            <InvestPopUp sellOrders={sellOrders} buyOrders={buyOrders} />
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
                                {/* <th className='bg-dark text-white fw-medium'>% Profit</th>
                                        <th className='bg-dark text-white fw-medium rounded-end-3'>Qty Remaining</th> */}
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: "13px" }}>
                            {randomNumbers.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td className='rounded-start-3'>{i + 1}</td>
                                        {/* <td>{item}</td> */}
                                        <td>{adjustedTradeValues[i]}</td>
                                        <td>{tradeEntryRandomNos[i]}</td>
                                        <td>{tradeEntryFee[i]}</td>
                                        <td>{qtyToBuy[i]}</td>
                                        <td>{tradeExitRandomNos[i]}</td>
                                        <td>{tradeExitFee[i]}</td>
                                        <td>{adjustedQtyToSellArray[i]}</td>
                                        <td className='text-success'>{grossTradeProfitArray[i]}</td>
                                        <td className='rounded-end-3'>{netTradeProfitArray[i]}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Container>

            </div>
        </>
    )
}

export default NewInvestMents