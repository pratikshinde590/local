import React from 'react'
import "./parameter.modal.scss"
import { Button, Form } from 'react-bootstrap'

const ParameterModal = ({ handleClose }) => {
    return (
        <div className='parameter-modal'>
            <div className='parameterInnerBox'>

                <header className='fw-bold pt-3 ps-3'>Parameters <span onClick={() => handleClose(false)}>X</span></header>

                <div className='ps-4 pe-4 mt-4'>
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

                        <hr className='modalLine' />

                        <Form.Check className='parameterCheck' type="checkbox" label="Randomize Trade Values" />
                        <Form.Check className='mt-3 parameterCheck' type="checkbox" label="Randomize Entry Price" />
                        <Form.Check className='mt-3 parameterCheck' type="checkbox" label="Randomize Exit Price" />


                    </Form>


                    <div className='pt-3 pb-2 text-center'>
                        <Button variant="primary w-100 rounded-5 parameterBtnColor">
                            Refresh Results
                        </Button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ParameterModal