import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import '../App.css';

class StudyYear extends React.Component {
    render() {
        return (
            <Form.Row>
                <Form.Group as={Col} md={3}>
                    <Form.Label>Year of study:</Form.Label>
                </Form.Group>
                <Form.Group as={Col} md={9}>
                    <div className="mb-3">
                        <Form.Check inline label="Year 1" type={'radio'} name="studyYear" value={"1"} onChange={this.props.handleChange} />
                        <Form.Check inline label="Year 2" type={'radio'} name="studyYear" value={"2"} onChange={this.props.handleChange} />
                        <Form.Check inline label="Year 3" type={'radio'} name="studyYear" value={"3"} onChange={this.props.handleChange} />
                        <Form.Check inline label="Year 4" type={'radio'} name="studyYear" value={"4"} onChange={this.props.handleChange} />
                        <Form.Check inline label="Year 5" type={'radio'} name="studyYear" value={"5"} onChange={this.props.handleChange} />
                        <Form.Check inline label="Year 6 or above" type={'radio'} name="studyYear" value={">=6"} onChange={this.props.handleChange} />
                    </div>
                </Form.Group>
            </Form.Row>
        )

    }
}
export default StudyYear;