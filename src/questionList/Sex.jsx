import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import '../App.css';

class Sex extends React.Component {
    render() {
        return (
            <Form.Row>
                <Form.Group as={Col} md={3}>
                    <Form.Label>Sex:</Form.Label>
                </Form.Group>
                <Form.Group as={Col} md={9}>
                    <div className="mb-3">
                        <Form.Check inline label="Female" type={'radio'} name="sex" value={1} onChange={this.props.handleChange} />
                        <Form.Check inline label="Male" type={'radio'} name="sex" value={2} onChange={this.props.handleChange} />
                    </div>
                </Form.Group>
            </Form.Row>
        )

    }
}
export default Sex;