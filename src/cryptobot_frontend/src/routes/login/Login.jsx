import React from 'react'
import { Button } from "react-bootstrap"
import "./login.scss"
import { useNavigate } from "react-router-dom"


const Login = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="login w-100 vh-100 d-grid justify-content-center align-content-around bg-gradient">

        <div className="inner1 text-center bg-white p-3">
          <section className="mb-2 fw-bold">Welcome!</section>
          <div className="fw mt-4" style={{ fontSize: "14px" }}>Welcome to Crypto Trading Bot! Elevate your trading experience with a powerful trading bot and stay on top of your portfolio effortlessly. Happy trading!</div>
          <Button className="w-75 rounded-5 mt-4" style={{ fontSize: "14px" }} onClick={() => navigate("/login/ICP")}>SIgnin with ICP</Button>
        </div>

      </div>
    </>
  )
}

export default Login