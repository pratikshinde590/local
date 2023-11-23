import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NewInvestment from "../../modals/Investment-modal/NewInvestment.modal";

// import profile from "../../../assets/Ellipse 64.svg";


const NavBar = () => {
    return (
        <>
            {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. */}

            <div className="d-flex flex-row justify-content-between px-5 py-2 bg-white">
                <Nav variant="underline" defaultActiveKey="/">
                    <Nav.Item>
                        <Link className="nav-link" to="/">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/investments">Investments</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/login">Login</Link>
                    </Nav.Item>
                </Nav>
                <div className=" d-flex flex-row gap-2">
                    <Button className="rounded-5 px-4 " variant="primary" size="sm">
                        Connect Wallet
                    </Button>
                    
                    <NewInvestment />

                    <Dropdown data-bs-theme="light">
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="none">
                            {/* <img src={profile} /> */}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" active>
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>


            {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
            {/* <Outlet /> */}
        </>
    )
}

export default NavBar