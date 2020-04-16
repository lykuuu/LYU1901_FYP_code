import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Header from './Header'
import Home from './Home';
import Evaluation from './Evaluation';
import Officer from './Officer';
import Result from './Result';
import Sidebar from './Sidebar'
import * as serviceWorker from './serviceWorker';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const routing = (
    <Container fluid className="background">
        <Row className="mr-0 ml-0">
            <Header />
        </Row>

        <Sidebar />

        <Row className="vh-100">

            <Col/>
            <Col xs={10} sm={9} md={8} lg={7}>
                <Router>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/Officer" component={Officer} />
                        <Route path="/Result" component={Result} />
                        <Route path="/Evaluation" component={Evaluation} />
                    </div>
                </Router>
            </Col>
            <Col/>
        </Row>
    </Container>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
