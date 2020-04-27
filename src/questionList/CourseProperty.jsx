import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import '../App.css';

class CourseProperty extends React.Component {
    render() {
        return (
            <Form.Row>
                <Form.Group as={Col} md={3}>
                    <Form.Label>This course is (select one):</Form.Label>
                </Form.Group>
                <Form.Group as={Col} md={9}>
                    <div className="mb-3">
                        <Form.Check inline label="Major Required" type={'radio'} name="courseProperty" value={1} onChange={this.props.handleChange} />
                        <Form.Check inline label="Major Elective" type={'radio'} name="courseProperty" value={2} onChange={this.props.handleChange} />
                        <Form.Check inline label="Minor" type={'radio'} name="courseProperty" value={3} onChange={this.props.handleChange} />
                        <Form.Check inline label="Elective" type={'radio'} name="courseProperty" value={4} onChange={this.props.handleChange} />
                        <Form.Check inline label="U Core (GE, Lang, PE, IT)" type={'radio'} name="courseProperty" value={5} onChange={this.props.handleChange} />
                        <Form.Check inline label="N/A" type={'radio'} name="courseProperty" value={6} onChange={this.props.handleChange} />
                    </div>
                </Form.Group>
            </Form.Row>
        )

    }
}
export default CourseProperty;