import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tables from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/menu/NavBar";

const Investments = () => {

  const navigate = useNavigate();

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
  const data = [
    {
      name: "$120,000",
      status: "Net Realized Profit",
    },
    {
      name: "$100,000",
      status: "Total Invested",
    },
    {
      name: "ETH/USD - Binance",
      status: "Top Performer",
    },
    {
      name: "OCEAN/USD - KuCoin",
      status: "Worst Performer",
    },
  ];
  return (
    <>
      <div style={{ backgroundColor: "#EBEFF3" }}>
        <NavBar />
        <Container fluid className="p-2 px-5">
          <p className="fs-2 fw-bold m-0">Investments Summary</p>

          <Row className="gap-5 py-4 ">
            {data.map((item) => (
              <Col className="bg-white p-2 rounded-3">
                <p className="fs-5 fw-bold text-primary m-0">{item.name}</p>
                <p className="text-secondary m-0" style={{ fontSize: "14px" }}>{item.status}</p>
              </Col>
            ))}
          </Row>
          <div onClick={() => navigate("/create-investments")}>
            <Tables row={coloumn} coloumn={coloumn} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Investments;
