import React from 'react'
import { Link } from "react-router-dom";
import NewInvestment from "../../modals/Investment-modal/NewInvestment.modal";
import { Button, Container, Dropdown, Navbar, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleLogout } from "../../store/auth/auth.reducer";
// import profile from "../../../assets/Ellipse 64.svg";


const NavBar = () => {

    const dispatch = useDispatch();
    const logout = async () => {
        dispatch(handleLogout());
    };

    return (
        <>

            <Navbar expand="lg" className="bg-white">
                <Container fluid>
                    <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto text-center" variant="underline" defaultActiveKey="/home">
                            <Nav.Item>
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/investments">Investments</Link>
                            </Nav.Item>
                        </Nav>

                        <Nav className="ms-auto">
                            {/* <Button className="rounded-5 px-4 me-lg-2 mt-3 m-lg-0" style={{ width: "150px", lineHeight: "35px" }} variant="primary" size="sm">
                                Connect Wallet
                            </Button> */}

                            <NewInvestment />

                            <Dropdown className="text-center" data-bs-theme="light">
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="none">
                                    {/* <img src={profile} /> */}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar