import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Tables from "../../components/Table/Table";
import print from "../../assets/print.svg";
import elips from "../../assets/Group 1.png";
const SingleInvestment = () => {
  const coloumn = [
    "Narrative",
    "Exchange",
    "Market",
    "Risk",
    "Market Cap",
    "Investment",
    "Trades placed",
    "Net Profit",
    "Potential Gains",
    "Actual Gains",
    "Diff in Gains",
  ];
  const name = "gnd";
  return (
    <Container fluid className="p-2 px-5  bg-light vh-100">
      <div className="d-flex flex-row  align-items-center gap-3  ">
        <Col xs={3} className="fs-2 fw-bold ">
          Traded Investment
        </Col>
        <Col xs={8}>
          Narrative: <b>{name}</b>
        </Col>
        <Col xs={1}>
          <Button variant="light" className="bg-white rounded-5">
            <img src={print} alt="print" /> Print
          </Button>
        </Col>
      </div>

      <Row className="gap-5 py-4 ">
        <Col className="bg-white   p-2  ">
          <p className="fs-4 fw-bold  text-primary m-0 ">da</p>
          <p className=" fs-4   ms-1  text-secondary m-0 ">"item.status"</p>
        </Col>
        <Col className="bg-white  p-2  d-flex flex-row   justify-content-around ">
          <img src={elips} alt="chart" />
          <div className="d-flex flex-column   ">
            <p className="fs-3 fw-bold  text-danger m-0 ">16/20</p>
            <p className="m-0">Invested</p>
          </div>
        </Col>
        <Col className="bg-white  p-2  d-flex flex-row   justify-content-around ">
          <img src={elips} alt="chart" />
          <div className="d-flex flex-column   ">
            <p className="fs-3 fw-bold  text-danger m-0 ">16/20</p>
            <p className="m-0">Invested</p>
          </div>
        </Col>
        <Col className="bg-white  p-2  d-flex flex-row   justify-content-around ">
          <img src={elips} alt="chart" />
          <div className="d-flex flex-column   ">
            <p className="fs-3 fw-bold  text-danger m-0 ">16/20</p>
            <p className="m-0">Invested</p>
          </div>
        </Col>
      </Row>
      <Tables row={coloumn} coloumn={coloumn} />
    </Container>
  );
};

export default SingleInvestment;
