import React from "react";
import "./investments.scss"
import { Button, Col, Container, Pagination, Row, Table } from "react-bootstrap";
// import Navbar from "../../components/menu/NavBar";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/menu/NavBar";
// import history from "../../assets/history.svg"

const Investments = () => {

  const navigate = useNavigate();
  const array = ["", "", "", "", "", "", "", "", "", "", ""];

  return (
    <>
      <div className="investmentPage">
        <NavBar />

        <Container className='mt-3'>
          <Row>
            <Col className='fw-bold'>Investments Summary</Col>
            <Col className='text-end newInvestBtnCon'>
              <Button className='ms-3 fw-medium rounded-5 ps-4 pe-4 btn-light bt-primary' onClick={() => navigate("/investment-history")}>
              {/* <img src={history} alt="" width={18} style={{ marginRight: "8px", marginTop: "-4px" }} /> */}
              Investment History</Button>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col className='mt-3' lg="6" xl="3">
              <div className="bg-white box-style p-2 ps-3 rounded-3">
                <p className="fs-6 fw-bold m-0 text-primary">$120,000</p>
                <span className="secondary-text">Net Realized Profit</span>
              </div>
            </Col>
            <Col className='mt-3' lg="6" xl="3">
              <div className="bg-white box-style p-2 ps-3 rounded-3">
                <p className="fs-6 fw-bold m-0 text-primary">$100,000</p>
                <span className="secondary-text">Total Invested</span>
              </div>
            </Col>
            <Col className='mt-3' lg="6" xl="3">
              <div className="bg-white box-style p-2 ps-3 rounded-3">
                <p className="fs-6 fw-bold m-0 text-primary">ETH/USD - Binance</p>
                <span className="secondary-text">Top Performer</span>
              </div>
            </Col>
            <Col className='mt-3' lg="6" xl="3">
              <div className="bg-white box-style p-2 ps-3 rounded-3">
                <p className="fs-6 fw-bold m-0 text-primary">OCEAN/USD - KuCoin</p>
                <span className="secondary-text">Worst Performer</span>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className='mt-3'>
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
                  <tr onClick={() => navigate("/create-investments")}>
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
  );
};

export default Investments;
