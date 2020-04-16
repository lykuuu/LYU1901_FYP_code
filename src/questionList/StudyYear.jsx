import React from 'react';
import Form from 'react-bootstrap/Form'
import '../App.css';

class StudyYear extends React.Component {
    render() {
        return (
            <div className="mb-3">
                <Form.Check inline label="Year 1" type={'radio'} name="studyYear" value={"1"} onChange={this.props.handleChange} />
                <Form.Check inline label="Year 2" type={'radio'} name="studyYear" value={"2"} onChange={this.props.handleChange} />
                <Form.Check inline label="Year 3" type={'radio'} name="studyYear" value={"3"} onChange={this.props.handleChange} />
                <Form.Check inline label="Year 4" type={'radio'} name="studyYear" value={"4"} onChange={this.props.handleChange} />
                <Form.Check inline label="Year 5" type={'radio'} name="studyYear" value={"5"} onChange={this.props.handleChange} />
                <Form.Check inline label="Year 6 or above" type={'radio'} name="studyYear" value={">=6"} onChange={this.props.handleChange} />
            </div>
        )

    }
}
export default StudyYear;