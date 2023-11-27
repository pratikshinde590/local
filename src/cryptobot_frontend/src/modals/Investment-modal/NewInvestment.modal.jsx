import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./new.investment.modal.scss"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ExchangeArray } from '../../utils/Constants';
import { getSymbolPrice, getSymbols, resetSymbolList, resetSymbolPrice, setExchange, setSymbol } from '../../store/common/NewInvestReducer';


const NewInvestmentModal = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  //------------------------- reset investment Form -------------------//
  const handleClose = () => {
    setShow(false);
    setTotalInvestment("");
    dispatch(setExchange(""));
    dispatch(setSymbol(""));
    dispatch(resetSymbolPrice(""));
    dispatch(resetSymbolList());
  }


  const [totalInvestment, setTotalInvestment] = useState("");
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
                type="text"
                className='h-25 w-75 ms-auto modalInput bg-light'
                value={selectedSymbolPrice}
                readOnly
              />
            </Form.Group>

            <hr className='modalLine' />

            <Form.Group className="mb-3 d-flex">
              <Form.Label className='mt-1 modalLabel'>Market cap level:</Form.Label>
              <div className="form-group w-75">
                <select className="modalDrop w-100 ps-2">
                  <option>Assign Market cap level</option>
                  <option>High</option>
                  <option>Low</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group className="mb-3 d-flex">
              <Form.Label className='mt-1 modalLabel' style={{ width: "150px" }}>Risk:</Form.Label>
              <div className="form-group w-75">
                <select defaultValue={""} className="modalDrop w-100 ps-2">
                  <option>Assign Risk</option>
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
