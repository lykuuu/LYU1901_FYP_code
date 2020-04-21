import React from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


class Sidebar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky="top" className="sidebar">
                <Navbar.Brand href="/">Online CE</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Nav.Link eventKey="1" href="/">
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" href="/">
                                Feature
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>
                    <Nav className="mr-3">
                        <Nav.Item>
                            <Nav.Link eventKey="3" href="/SignIn">
                                Sign In
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Sidebar;