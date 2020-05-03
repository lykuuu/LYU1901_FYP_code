import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from './function/PrivateRoute';
import { AuthContext } from "./function/auth";
import './index.css';
import Header from './Header'
import Home from './Home'
import SignIn from './SignIn';
import Evaluation from './Evaluation';
import Officer from './Officer';
import Result from './Result';
import Sidebar from './Sidebar'
import Submit from './submitSuccess';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App(props) {
    return (
        <AuthContext.Provider value={true}>
            <Container fluid className="background">
                <Row className="mr-0 ml-0">
                    <Header />
                </Row>

                <Sidebar />

                <Row className="vh-100">

                    <Col />
                    <Col xs={10} sm={9} md={8} lg={7}>
                        <Router>
                            <div>
                                <Route exact path="/" component={SignIn} />
                                <Route path="/SignIn" component={SignIn} />
                                <PrivateRoute path="/Officer" component={Officer} />
                                <Route path="/Result" component={Result} />
                                <Route path="/Evaluation" component={Evaluation} />
                                <Route path="/Submit" component={Submit} />
                            </div>
                        </Router>
                    </Col>
                    <Col />
                </Row>
            </Container>
        </AuthContext.Provider>
    );
}
export default App;

