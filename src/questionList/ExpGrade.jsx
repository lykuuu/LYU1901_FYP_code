import React from 'react';
import Form from 'react-bootstrap/Form'
import '../App.css';

class ExpGrade extends React.Component {
    render() {
        return (
            <div className="mb-3">
                <Form.Check inline label="A" name="expGrade" type={'radio'} value={"1"} onChange={this.props.handleChange} />
                <Form.Check inline label="B" name="expGrade" type={'radio'} value={"2"} onChange={this.props.handleChange} />
                <Form.Check inline label="B+" name="expGrade" type={'radio'} value={"3"} onChange={this.props.handleChange} />
                <Form.Check inline label="B/B-" name="expGrade" type={'radio'} value={"4"} onChange={this.props.handleChange} />
                <Form.Check inline label="C+ or below" name="expGrade" type={'radio'} value={"5"} onChange={this.props.handleChange} />
            </div>
        )

    }
}
export default ExpGrade;