import React from "react"
import { Button, Form } from "react-bootstrap"
import "./login.scss"
import { useNavigate } from "react-router-dom"


const ICP = () => {

    const navigate = useNavigate();


    return (
        <>

            <div className="login w-100 vh-100 d-grid justify-content-center align-content-around bg-gradient">

                {/* <div className="inner1 text-center">
  <section className="mb-2 fw-bold">Welcome!</section>
  <div className="fw">Welcome to Crypto Trading Bot! Elevate your trading experience with a powerful trading bot and stay on top of your portfolio effortlessly. Happy trading!</div>
  <Button>login</Button>
</div> */}

                <div className="inner2">
                    <section className="fw-bold fs-4 mb-1">Enter Your <br /> Internet Identify</section>
                    <span className="mt-5 continue">to continue</span>
                    <Form className="mt-4">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Internet Identity" className="text-center" />
                        </Form.Group>
                        <Button className="w-100 continueBtn" onClick={() => navigate("/dashboard")}>Continue</Button>
                    </Form>
                    <div className="text-center mb-5 mt-4 another">Continue with another device</div>
                    <div className="opt">
                        <div>Create New</div>
                        <div className="text-end">Lost Access</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ICP