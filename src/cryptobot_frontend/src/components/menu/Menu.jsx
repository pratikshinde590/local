import { Button, Dropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
// import profile from "../../../assets/Ellipse 64.svg";

const Menu = () => {
  return (
    <div className="d-flex flex-row justify-content-between px-5 py-2 bg-white">
      <Nav variant="underline" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href="/investments">Investments</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" href="/login">Login</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className=" d-flex flex-row gap-2">
        <Button className="rounded-5 px-4 " variant="primary" size="sm">
          Connect Wallet
        </Button>
        <Button className="rounded-5 px-4" variant="primary" size="sm">
          New Investment
        </Button>
        <Dropdown data-bs-theme="light">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="none">
            <img src={profile} />
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
  );
};

export default Menu;
