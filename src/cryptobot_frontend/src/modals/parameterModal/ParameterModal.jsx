import React, { useState, useEffect } from 'react';
import "./parameter.modal.scss"
import { Button, Form } from 'react-bootstrap'
import { getSymbolPrice, getSymbols, resetSymbolList, resetSymbolPrice, setExchange, setSymbol } from '../../store/common/NewInvestReducer';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ExchangeArray } from '../../utils/Constants';


const ParameterModal = ({ handleClose }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    //------------------------- reset investment Form -------------------//
    // const handleClose = () => {
    //     setShow(false);
    //     setTotalInvestment("");
    //     dispatch(setExchange(""));
    //     dispatch(setSymbol(""));
    //     dispatch(resetSymbolPrice(""));
    //     dispatch(resetSymbolList());
    // }


    const [minEntryPrice, setMinEntryPrice] = useState("");
    const [totalInvestment, setTotalInvestment] = useState("");
    const [firstTakeProfitGoal, setFirstTakeProfitGoal] = useState("");
    const [numTrades, setNumTrades] = useState(5);
    const { selectedExchange, selectedSymbol, selectedSymbolPrice, symbolList } = useSelector(state => state.NewInvest)

    //---------------- get symbol LIST ----------------//
    useEffect(() => {
        if (selectedExchange) {
            ExchangeArray.map((val) => {
                if (selectedExchange === val.value) {
                    dispatch(getSymbols(val.value))
                }
            })
        }
    }, [selectedExchange])


    //-------------------- currency pair price -----------------------//
    useEffect(() => {
        if (selectedSymbol) {
            ExchangeArray.map((val) => {
                if (selectedExchange == val.value) {
                    dispatch(getSymbolPrice({ exchange: val.value, symbol: selectedSymbol }))
                }
            })
        }
    }, [selectedSymbol])

    // Set default value for minEntryPrice
    useEffect(() => {
        if (selectedSymbolPrice) {
            setMinEntryPrice(selectedSymbolPrice);
        }
    }, [selectedSymbolPrice])



    return (
        <div className='parameter-modal'>
            <div className='parameterInnerBox'>

                <header className='fw-bold pt-3 ps-3'>Parameters <span onClick={() => handleClose(false)}>X</span></header>

                <div className='ps-4 pe-4 mt-4'>
                    <Form>
                        {/* <Form.Group className="mb-3 d-flex">
                            <Form.Label className='mt-1 modalLabel'>Narrative :</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Narrative"
                                className='h-25 w-75 ms-auto modalInput'
                            />
                        </Form.Group>
                        <hr className='modalLine' /> */}

                        <Form.Group className="mb-3 d-flex">
                            <Form.Label className='mt-1 modalLabel'>Exchange :</Form.Label>
                            <div className="form-group w-75">
                                <select className="modalDrop w-100 ps-2" onChange={(e) => dispatch(setExchange(e.target.value))}>
                                    <option>Select Exchange</option>
                                    {ExchangeArray?.map((val, index) => {
                                        return <option key={index} value={val.value}>{val.name}</option>
                                    })}
                                </select>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex">
                            <Form.Label className='mt-1 modalLabel'>Currency Pair :</Form.Label>
                            <div className="form-group w-75">
                                <select className="modalDrop w-100 ps-2" onChange={(e) => dispatch(setSymbol(e.target.value))}>
                                    <option>Select Currency Pair</option>

                                    {symbolList?.map((val) => {
                                        return (<option key={val} value={val} >{val}</option>)
                                    })}

                                </select>
                            </div>
                        </Form.Group>

                        <hr className='modalLine' />

                        <Form.Group className="mb-3 d-flex">
                            <Form.Label className='mt-1 modalLabel'>Min Entry Value:</Form.Label>
                            <Form.Control
                                type="text"
                                className='h-25 w-75 ms-auto modalInput bg-light'
                                value={minEntryPrice}
                                onChange={(e) => setMinEntryPrice(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex">
                            <Form.Label className='mt-1 modalLabel'>1st Take Profit Price Goal:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Profit Price Goal"
                                className='h-25 w-75 ms-auto modalInput bg-light'
                                value={firstTakeProfitGoal}
                                onChange={(e) => setFirstTakeProfitGoal(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex">
                            <Form.Label className='mt-1 modalLabel'>Multiplier :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter multiplier"
                                className='h-25 w-75 ms-auto modalInput'
                                value={(minEntryPrice && firstTakeProfitGoal) ? (firstTakeProfitGoal / minEntryPrice).toFixed(2) : 0}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex">
                            <Form.Label className='mt-1 modalLabel' style={{ width: "150px" }}>Total Investment :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter amount"
                                className='h-25 w-75 ms-auto modalInput'
                                value={totalInvestment}
                                onChange={(e) => setTotalInvestment(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex">
                            <Form.Label className='mt-1 modalLabel' style={{ width: "150px" }}>Total Investment :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Number of Trades to Generate"
                                className='h-25 w-75 ms-auto modalInput'
                                value={numTrades}
                                onChange={(e) => setNumTrades(e.target.value)}
                            />
                        </Form.Group>

                        <hr className='modalLine' />

                        {/* <Form.Group className="mb-3 d-flex">
                            <Form.Label className='mt-1 modalLabel'>Market cap level:</Form.Label>
                            <div class="form-group w-75">
                                <select class="modalDrop w-100 ps-2">
                                    <option selected>Assign Market cap level</option>
                                    <option>High</option>
                                    <option>Low</option>
                                </select>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex">
                            <Form.Label className='mt-1 modalLabel' style={{ width: "150px" }}>Risk:</Form.Label>
                            <div class="form-group w-75">
                                <select class="modalDrop w-100 ps-2">
                                    <option selected>Assign Risk</option>
                                    <option>High</option>
                                    <option>Low</option>
                                </select>
                            </div>
                        </Form.Group> */}

                        {/* <hr className='modalLine' /> */}

                        <Form.Check className='parameterCheck' type="checkbox" label="Randomize Trade Values" />
                        <Form.Check className='mt-3 parameterCheck' type="checkbox" label="Randomize Entry Price" />
                        <Form.Check className='mt-3 parameterCheck' type="checkbox" label="Randomize Exit Price" />


                    </Form>


                    <div className='pt-3 pb-2 text-center'>
                        <Button variant="primary w-100 rounded-5 parameterBtnColor" onClick={() => {
                            // Navigate to the new page and pass state variables
                            navigate(`/new-investments?minEntryPrice=${minEntryPrice}&firstTakeProfitGoal=${firstTakeProfitGoal}&totalInvestment=${totalInvestment}&numTrades=${numTrades}`);
                            handleClose()
                        }}>
                            Refresh Results
                        </Button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ParameterModal