import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import '../App.css';

class Hours extends React.Component {
    render() {
        return (
            <Form.Row>
                <Form.Group as={Col} md={6}>
                    <Form.Label>Hours per week spent on this course outside class:</Form.Label>
                </Form.Group>
                <Form.Group as={Col} md={6}>
                    <div className="mb-3">
                        <Form.Check inline label="0-2.0" name="hours" type={'radio'} value={"1"} onChange={this.props.handleChange} />
                        <Form.Check inline label="2.1-4.0" name="hours" type={'radio'} value={"2"} onChange={this.props.handleChange} />
                        <Form.Check inline label="4.1-8.0" name="hours" type={'radio'} value={"3"} onChange={this.props.handleChange} />
                        <Form.Check inline label="8.1-12.0" name="hours" type={'radio'} value={"4"} onChange={this.props.handleChange} />
                        <Form.Check inline label="12.0+" name="hours" type={'radio'} value={"5"} onChange={this.props.handleChange} />
                        <Form.Check inline label="N/A" name="hours" type={'radio'} value={"6"} onChange={this.props.handleChange} />
                    </div>
                </Form.Group>
            </Form.Row>
        )

    }
}
export default Hours;