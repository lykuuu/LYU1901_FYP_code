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
                        <Form.Check inline label="51-60%" type={'radio'} name="priLangTime" value={"51-60%"} onChange={this.props.handleChange} />
                        <Form.Check inline label="61-70%" type={'radio'} name="priLangTime" value={"61-70%"} onChange={this.props.handleChange} />
                        <Form.Check inline label="71-80%" type={'radio'} name="priLangTime" value={"71-80%"} onChange={this.props.handleChange} />
                        <Form.Check inline label="81-90%" type={'radio'} name="priLangTime" value={"81-90%"} onChange={this.props.handleChange} />
                        <Form.Check inline label="91-100%" type={'radio'} name="priLangTime" value={"91-100%"} onChange={this.props.handleChange} />
                    </div>
                </Form.Group>
            </Form.Row>
        )

    }
}
export default PriLangTime;
