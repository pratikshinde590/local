import React from 'react'
import "./crypto-box.modal.scss"
import Modal from 'react-bootstrap/Modal';
// import img from "../../assets/bitcoin.svg"
import CryptoCharts from '../../components/charts/crypto-charts/CryptoCharts';
import { Pagination, Table } from 'react-bootstrap';

const CryptoBoxModal = ({ cryptoModal, toggleCryptoModal }) => {

    const array = ["", "", "", "", "", "", "",];

    return (
        <>
            <Modal
                size="xl"
                show={cryptoModal}
                onHide={() => toggleCryptoModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header className='pe-5' closeButton>
                    <div className='cryptoBoxHeaderGrid'>
                        <div className='g1'> 
                        {/* <img src={img} alt="" />  */}
                        BTC/ETH</div>
                        <div className='g2'>$120,000 <span>Net Realized Profit</span> </div>
                        <div className='g3'>$100,000 <span>Total Invested</span> </div>
                    </div>
                </Modal.Header>
                <Modal.Body className='p-0'>
                    <div className='cryptoModalBoxBody'>
                        <div className='graphCon'>
                            <div className='graphHeader fw-bold'>Investment and Returns overtime</div>
                            <CryptoCharts />
                        </div>
                        <div className='tableSection mt-3'>
                            <section className='fw-bold ps-1 tableHeader'>Trades</section>
                            <Table striped hover>
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
                        </div>

                        <div className='paginationSection'>
                            <Pagination size="sm">
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Ellipsis />

                                <Pagination.Item>{10}</Pagination.Item>
                                <Pagination.Item>{11}</Pagination.Item>
                                <Pagination.Item active>{12}</Pagination.Item>
                                <Pagination.Item>{13}</Pagination.Item>
                                <Pagination.Item disabled>{14}</Pagination.Item>

                                <Pagination.Ellipsis />
                                <Pagination.Item>{20}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CryptoBoxModal