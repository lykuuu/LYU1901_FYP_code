import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import '../App.css';

class PriLang extends React.Component {
    render() {
        return (
            <Form.Row>
                <Form.Group as={Col} md={6}>
                    <Form.Label>Primary spoken language used in class:</Form.Label>
                </Form.Group>
                <Form.Group as={Col} md={6}>
                    <div className="mb-3">
                        <Form.Check inline label="English" type={'radio'} name="priLang" value={"1"} onChange={this.props.handleChange} />
                        <Form.Check inline label="Cantonese" type={'radio'} name="priLang" value={"2"} onChange={this.props.handleChange} />
                        <Form.Check inline label="Putonghua" type={'radio'} name="priLang" value={"3"} onChange={this.props.handleChange} />
                        <Form.Check inline label="Others" type={'radio'} name="priLang" value={"4"} onChange={this.props.handleChange} />
                    </div>
                </Form.Group>
            </Form.Row>
        )

    }
}
export default PriLang;