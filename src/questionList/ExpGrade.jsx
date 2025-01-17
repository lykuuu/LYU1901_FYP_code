import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import '../App.css';

class ExpGrade extends React.Component {
    render() {
        return (
            <Form.Row>
                <Form.Group as={Col} md={6}>
                    <Form.Label>Expected grade in the course:</Form.Label>
                </Form.Group>
                <Form.Group as={Col} md={6}>
                    <div className="mb-3">
                        <Form.Check inline label="A" name="expGrade" type={'radio'} value={1} onChange={this.props.handleChange} />
                        <Form.Check inline label="A-" name="expGrade" type={'radio'} value={2} onChange={this.props.handleChange} />
                        <Form.Check inline label="B+" name="expGrade" type={'radio'} value={3} onChange={this.props.handleChange} />
                        <Form.Check inline label="B/B-" name="expGrade" type={'radio'} value={4} onChange={this.props.handleChange} />
                        <Form.Check inline label="C+ or below" name="expGrade" type={'radio'} value={5} onChange={this.props.handleChange} />
                    </div>
                </Form.Group>
            </Form.Row>
        )

    }
}
export default ExpGrade;