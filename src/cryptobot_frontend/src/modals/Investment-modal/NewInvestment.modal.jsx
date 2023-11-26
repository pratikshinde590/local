import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./new.investment.modal.scss"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencyPairPrice, get_MEXC_Symbols } from '../../store/mexc-store/MexcSymbolSlice';


const NewInvestmentModal = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setExchange("");
    setSymbolList([]);
    setCurrencyPair("")
    setCurrencyPrice("");
    setTotalInvestment("");
  }


  const [selectedExchange, setExchange] = useState("");
  const [symbolList, setSymbolList] = useState([]);
  const [currencyPair, setCurrencyPair] = useState("");
  const [currencyPrice, setCurrencyPrice] = useState("");
  const [totalInvestment, setTotalInvestment] = useState("");


  const { mexc_symbols, mexc_symbol_price } = useSelector(state => state.MexcSymbols)
  //---------------- get MEXC symbols pair ----------------//
  useEffect(() => {
    if (selectedExchange == "MEXC") {
      dispatch(get_MEXC_Symbols())
    }
  }, [selectedExchange])

  //----------------------- Symbols Pair List -----------------//
  useEffect(() => {
    if (mexc_symbols.length) {
      setSymbolList(mexc_symbols)
    }
  }, [mexc_symbols]);

  //-------------------- currency pair -----------------------//
  useEffect(() => {
    if (currencyPair) {
      dispatch(getCurrencyPairPrice(currencyPair))
    }
  }, [currencyPair])

  useEffect(() => {
    setCurrencyPrice(mexc_symbol_price)
  }, [mexc_symbol_price])



  return (
    <>
      <Button className="rounded-5 px-4 my-3 m-lg-0 m-auto" style={{ width: "150px", lineHeight: "35px" }} variant="primary" size="sm" onClick={handleShow}>
        New Investment
      </Button>

      <Modal centered show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton style={{ border: "none" }}>
          <Modal.Title className='fs-5'>New Investment</Modal.Title>
        </Modal.Header>

        <Modal.Body className='ps-4 pe-4'>
          <Form>
            <Form.Group className="mb-3 d-flex">
              <Form.Label className='mt-1 modalLabel'>Narrative :</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Narrative"
                className='h-25 w-75 ms-auto modalInput'
              />
            </Form.Group>

            <hr className='modalLine' />

            <Form.Group className="mb-3 d-flex">
              <Form.Label className='mt-1 modalLabel'>Exchange :</Form.Label>
              <div class="form-group w-75">
                <select defaultValue={""} class="modalDrop w-100 ps-2" onChange={(e) => setExchange(e.target.value)}>
                  <option selected>Select Exchange</option>
                  <option value={"MEXC"} >MEXC</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group className="mb-3 d-flex">
              <Form.Label className='mt-1 modalLabel'>Currency Pair :</Form.Label>
              <div class="form-group w-75">
                <select defaultValue={""} class="modalDrop w-100 ps-2" onChange={(e) => setCurrencyPair(e.target.value)}>
                  <option selected>Select Currency Pair</option>
                  {symbolList.map((val) => {
                    return (
                      <option value={val} >{val}</option>
                    )
                  })}
                </select>
              </div>
            </Form.Group>


            <hr className='modalLine' />

            <Form.Group className="mb-3 d-flex">
              <Form.Label className='mt-1 modalLabel'>Multiplier :</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter multiplier"
                className='h-25 w-75 ms-auto modalInput'
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
              <Form.Label className='mt-1 modalLabel'>Min Entry Value:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter amount"
                className='h-25 w-75 ms-auto modalInput'
                value={currencyPrice}
              />
            </Form.Group>

            <hr className='modalLine' />

            <Form.Group className="mb-3 d-flex">
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
            </Form.Group>
          </Form>
        </Modal.Body>

        <div className='pb-4 ps-4 pe-4 text-center'>
          <Button variant="primary w-100 rounded-5 modalBtnColor" onClick={() => navigate("/new-investments")}>
            See Investment Plan
          </Button>
        </div>

      </Modal>
    </>
  );
}

export default NewInvestmentModal
