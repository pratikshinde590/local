import React from "react"
import "./dashboard.scss"
import DataBox from "../../components/data-box/DataBox"
import GraphBox from "../../components/graph-box/GraphBox"
import CryptoBox from "../../components/crypto-box/CryptoBox"
import ChartLine from "../../components/charts/linechart/ChartLine"
import NavBar from "../../components/menu/NavBar"

const DashBoard = () => {
  return (
    <div className="dashboard bg-gradient">
      <NavBar />

      <div className="innerDash">

        <div className="left">

          <div className="left-inner">
            <div className="left-inner-left-section">
              <GraphBox />
            </div>
            <div className="left-inner-right-section">
              <DataBox />
              <DataBox />
              <DataBox />
            </div>
          </div>

          <div className="left-middle">
            <div className="graphSection">
              <section>Portfolion Market Value over time</section>
              <ChartLine />
            </div>
          </div>

          <div className="left-bottom">
            <CryptoBox />
            <CryptoBox />
          </div>

        </div>

        <div className="right">
          <CryptoBox />
          <CryptoBox />
          <CryptoBox />
          <CryptoBox />
          <CryptoBox />
        </div>

      </div>

    </div>
  )
}

export default DashBoard