import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import '../App.css';

class PriLangTime extends React.Component {
    render() {
        return (
            <Form.Row>
                <Form.Group as={Col} md={6}>
                    <Form.Label>Fraction of class time the primary language was uesd:</Form.Label>
                </Form.Group>
                <Form.Group as={Col} md={6}>
                    <div className="mb-3">
                        <Form.Check inline label="51-60%" type={'radio'} name="priLangTime" value={"1"} onChange={this.props.handleChange} />
                        <Form.Check inline label="61-70%" type={'radio'} name="priLangTime" value={"2"} onChange={this.props.handleChange} />
                        <Form.Check inline label="71-80%" type={'radio'} name="priLangTime" value={"3"} onChange={this.props.handleChange} />
                        <Form.Check inline label="81-90%" type={'radio'} name="priLangTime" value={"4"} onChange={this.props.handleChange} />
                        <Form.Check inline label="91-100%" type={'radio'} name="priLangTime" value={"5"} onChange={this.props.handleChange} />
                    </div>
                </Form.Group>
            </Form.Row>
        )

    }
}
export default PriLangTime;