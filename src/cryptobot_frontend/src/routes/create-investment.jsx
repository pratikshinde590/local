import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

// Backend APIs
import {
    indexUniqueRandomArray,
    calculateResult,
    qtyToSell,
    adjustedQtyToSell,
    grossTradeProfit,
    netTradeProfit,
} from "../backend/utils";

// Constants - To be moved to User inputs later
const QTY = 25;
const MINIMUM_TRADE_ENTRY_PRICE = 0.05170;
const FIRST_TAKE_PROFIT_GOAL = 0.70000;
const BUY_FEE_PCT = 0.10;
const SELL_FEE_PCT = 0.10;
const TOTAL_AMT = 18750;

export default function CreateInvestment() {
    const [randomNumbers, setRandomSeedNumbers] = useState([]);
    const [adjustedTradeValues, setAdjustedTradeValues] = useState([]);

    const [tradeEntryRandomNos, setTradeEntryRandomNos] = useState([]);
    const [tradeExitRandomNos, setTradeExitRandomNos] = useState([]);

    const [qtyToSellArray, setQtyToSellArray] = useState([]);
    const [adjustedQtyToSellArray, setAdjustedQtyToSellArray] = useState([]);
    const [grossTradeProfitArray, setGrossTradeProfitArray] = useState([]);
    const [netTradeProfitArray, setNetTradeProfitArray] = useState([]);

    const [minTradeEntryPrice, setMinTradeEntryPrice] = useState(MINIMUM_TRADE_ENTRY_PRICE);
    const [firstTakeProfitGoal, setFirstTakeProfitGoal] = useState(FIRST_TAKE_PROFIT_GOAL);

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

        const minTradeExitPrice = 0.70;
        const maxTradeExitPrice = 0.81;

        // Generate tradeExitRandomNos array
        const tradeExitRandomNos = indexUniqueRandomArray(QTY * QTY, minTradeExitPrice, maxTradeExitPrice, false, QTY);
        setTradeExitRandomNos(tradeExitRandomNos);

        // Calculate qtyToSell for each iteration and store it in a new array
        const qtyToSellArray = adjustedValues.map((value, i) =>
            qtyToSell(value, tradeEntryRandomNos[i], tradeExitRandomNos[i], BUY_FEE_PCT, SELL_FEE_PCT)
        );
        setQtyToSellArray(qtyToSellArray);

        const adjustedQtyToSellArray = qtyToSellArray.map((qty, i) =>
            adjustedQtyToSell(qty, TOTAL_AMT, tradeExitRandomNos[i], adjustedValues[i], tradeEntryRandomNos[i], i === 0)
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
    }

    useEffect(() => {
        generateTrades();
    }, []);

    const handleClick = () => {
        generateTrades();
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" value={minTradeEntryPrice} onChange={(e) => setMinTradeEntryPrice(e.target.value)} />
                <input type="text" value={firstTakeProfitGoal} onChange={(e) => setFirstTakeProfitGoal(e.target.value)} />
                <button onClick={handleClick}>Calculate Trades</button>
            </form>
            <div id="random_numbers">
                <table border="1">
                    <tbody>
                        <tr>
                            <td>S No.</td>
                            <td>Random Number</td>
                            <td>Adjusted Trade Value</td>
                            <td>Trade Entry Price - Random</td>
                            <td>Trade Exit Price - Random</td>
                            <td>Qty to Sell</td>
                            <td>Adjusted Qty to Sell</td>
                            <td>Gross Trade Profit</td>
                            <td>Net Trade Profit</td>
                        </tr>
                        {randomNumbers.map((item, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item}</td>
                                <td>{adjustedTradeValues[i]}</td>
                                <td>{tradeEntryRandomNos[i]}</td>
                                <td>{tradeExitRandomNos[i]}</td>
                                <td>{qtyToSellArray[i]}</td>
                                <td>{adjustedQtyToSellArray[i]}</td>
                                <td>{grossTradeProfitArray[i]}</td>
                                <td>{netTradeProfitArray[i]}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>Total</td>
                            <td>{randomNumbers.reduce((a, b) => +a + +b, 0)}</td>
                            <td>{adjustedTradeValues.reduce((a, b) => +a + +b, 0)}</td>
                            <td>{tradeEntryRandomNos.reduce((a, b) => +a + +b, 0)}</td>
                            <td>{tradeExitRandomNos.reduce((a, b) => +a + +b, 0)}</td>
                            <td>{qtyToSellArray.reduce((a, b) => +a + +b, 0)}</td>
                            <td>{adjustedQtyToSellArray.reduce((a, b) => +a + +b, 0)}</td>
                            <td>{grossTradeProfitArray.reduce((a, b) => +a + +b, 0)}</td>
                            <td>{netTradeProfitArray.reduce((a, b) => +a + +b, 0)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}