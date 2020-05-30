import React from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

class Sidebar extends React.Component {
    handleClick() {
        if (window.location.pathname === "/Officer" || window.location.pathname === "/Result")
            window.location.href = "/Officer";
        else {
            window.location.href = "/SignIn";
        }
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky="top" className="sidebar">
                <Navbar.Brand onClick={this.handleClick} style={{ cursor: "pointer" }}>Online CE</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Nav.Link eventKey="1" onClick={this.handleClick} style={{ cursor: "pointer" }}>
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" onClick={this.handleClick} style={{ cursor: "pointer" }}>
                                Feature
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>
                    <Nav className="mr-3">
                        <Nav.Item>
                            <Nav.Link eventKey="3" href="/SignIn">
                                {(window.location.pathname === "/Officer" || window.location.pathname === "/Result")?
                                <div>Sign out</div>:
                                <div>Sign In</div>}
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Sidebar;