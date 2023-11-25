import React from "react"
import "./dashboard.scss"
import DataBox from "../../components/data-box/DataBox"
import GraphBox from "../../components/graph-box/GraphBox"
import CryptoBox from "../../components/crypto-box/CryptoBox"
import ChartLine from "../../components/charts/linechart/ChartLine"
import NavBar from "../../components/menu/NavBar"
import { Col, Container, Row } from "react-bootstrap"


const DashBoard = () => {
  return (
    <div className="dashboard bg-gradient">
      <NavBar />

      <Container className="mt-4" fluid>
        <div className="innerDash">
          <Row>

            <Col lg="8">
              <div className="left">

                {/* ///////////////////////////////////////////////////////////////////////// */}

                <Row>
                  <Col md="5">
                    <GraphBox />
                  </Col>
                  <Col className="pt-3 pt-md-0" md="7">
                    <DataBox />
                    <DataBox />
                    <DataBox />
                  </Col>
                </Row>

                {/* ///////////////////////////////////////////////////////////////////////// */}

                <div className="left-middle">
                  <div className="graphSection">
                    <section>Portfolion Market Value over time</section>
                    <ChartLine />
                  </div>
                </div>

                <div className="left-bottom">
                  <Row>
                    <Col md="6">
                      <CryptoBox />
                    </Col>
                    <Col md="6">
                      <CryptoBox />
                    </Col>
                  </Row>
                </div>

              </div>
            </Col>

            <Col lg="4">
              <CryptoBox />
              <CryptoBox />
              <CryptoBox />
              <CryptoBox />
              <CryptoBox />
            </Col>

          </Row>
        </div>
      </Container>

    </div>
  )
}

export default DashBoard