import React, { useEffect, useState } from "react"
import "./dashboard.scss"
import Navbar from "../../components/menu/NavBar"
import DataBox from "../../components/data-box/DataBox"
import GraphBox from "../../components/graph-box/GraphBox"
import CryptoBox from "../../components/crypto-box/CryptoBox"
import ChartLine from "../../components/charts/linechart/ChartLine"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getMexcDipositedStatus, getMexcWalletStatus } from "../../store/mexc-store/MexcSlice"

const DashBoard = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMexcWalletStatus())
    dispatch(getMexcDipositedStatus())
  }, [])

  const { depositedStatus, walletStatus } = useSelector(state => state.MexcStore);

  //--------------------- unrealized profit ---------------------//
  const [unrealizedAmount, setUnrealizedAmount] = useState("0.00");
  useEffect(() => {
    if (depositedStatus && walletStatus) {
      setUnrealizedAmount((walletStatus.totalAmount - depositedStatus.totalAmount).toFixed(3))
    }
  }, [depositedStatus, walletStatus])


  return (
    <div className="dashboard bg-gradient">
      <Navbar />

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
                    <DataBox name={"Total Investment"} value={depositedStatus?.totalAmount} percentage={"0.00"} />
                    <DataBox name={"Realized Net Profit"} value={"0.00"} percentage={"0.00"} />
                    <DataBox name={"Unrealized Net Profit"} value={unrealizedAmount} percentage={"0.00"} />
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