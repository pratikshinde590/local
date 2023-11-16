import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./new.investment.modal.scss"
import { useNavigate } from 'react-router-dom';

const NewInvestmentModal = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();


  return (
    <>

      <Button className="rounded-5 px-4" variant="primary" size="sm" onClick={handleShow}>
        New Investment
      </Button>

      <Modal show={show} onHide={handleClose}>
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
              <Form.Label className='mt-1 modalLabel'>Currency :</Form.Label>
              <div class="form-group w-75">
                <select class="modalDrop w-100 ps-2">
                  <option selected>Select Currency</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group className="mb-3 d-flex">
              <Form.Label className='mt-1 modalLabel'>Exchange :</Form.Label>
              <div class="form-group w-75">
                <select class="modalDrop w-100 ps-2">
                  <option selected>Select Exchange</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group className="mb-3 d-flex">
              <Form.Label className='mt-1 modalLabel'>Market :</Form.Label>
              <div class="form-group w-75">
                <select class="modalDrop w-100 ps-2">
                  <option selected>Select Market</option>
                  <option>2</option>
                  <option>3</option>
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
                type="email"
                placeholder="Enter amount"
                className='h-25 w-75 ms-auto modalInput'
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex">
              <Form.Label className='mt-1 modalLabel'>Min Entry Value:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter amount"
                className='h-25 w-75 ms-auto modalInput'
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
