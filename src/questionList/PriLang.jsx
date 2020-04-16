import React from 'react';
import Form from 'react-bootstrap/Form'
import '../App.css';

class PriLang extends React.Component {
    render() {
        return (
            <div className="mb-3">
                <Form.Check inline label="English" type={'radio'} name="priLang" value={"1"} onChange={this.props.handleChange} />
                <Form.Check inline label="Cantonese" type={'radio'} name="priLang" value={"2"} onChange={this.props.handleChange} />
                <Form.Check inline label="Putonghua" type={'radio'} name="priLang" value={"3"} onChange={this.props.handleChange} />
                <Form.Check inline label="Others" type={'radio'} name="priLang" value={"4"} onChange={this.props.handleChange} />
            </div>
        )

    }
}
export default PriLang;