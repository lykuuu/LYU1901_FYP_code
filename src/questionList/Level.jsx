import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import '../App.css';

class Level extends React.Component {
    render() {
        return (
            <Form.Row>
                <Form.Group as={Col} md={3}>
                    <Form.Label>Level:</Form.Label>
                </Form.Group>
                <Form.Group as={Col} md={9}>
                    <div className="mb-3">
                        <Form.Check inline label="Undergraduate" type={"radio"} name="level" value={"Undergraduate"} onChange={this.props.handleChange} />
                        <Form.Check inline label="Postgraduate" type={"radio"} name="level" value={"Postgraduate"} onChange={this.props.handleChange} />
                        <Form.Check inline label="Other" type={"radio"} name="level" value={"Other"} onChange={this.props.handleChange} />
                    </div>
                </Form.Group>
            </Form.Row>
        )

    }
}
export default Level;