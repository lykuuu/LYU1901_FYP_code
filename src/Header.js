import React from 'react';
import Col from '../node_modules/react-bootstrap/Col'
import './App.css';


class Header extends React.Component {
    render() {
        return (
            <div className="text-primary bg-dark Header">
                <Col>
                    <h1>Online Course Evaluation</h1>
                </Col>
            </div>
        );
    }
}

export default Header;