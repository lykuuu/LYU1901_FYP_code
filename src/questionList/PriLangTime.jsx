import React from 'react';
import Form from 'react-bootstrap/Form'
import '../App.css';

class PriLangTime extends React.Component {
    render() {
        return (
            <div className="mb-3">
                <Form.Check inline label="51-60%" type={'radio'} name="priLangTime" value={"1"} onChange={this.props.handleChange} />
                <Form.Check inline label="61-70%" type={'radio'} name="priLangTime" value={"2"} onChange={this.props.handleChange} />
                <Form.Check inline label="71-80%" type={'radio'} name="priLangTime" value={"3"} onChange={this.props.handleChange} />
                <Form.Check inline label="81-90%" type={'radio'} name="priLangTime" value={"4"} onChange={this.props.handleChange} />
                <Form.Check inline label="91-100%" type={'radio'} name="priLangTime" value={"5"} onChange={this.props.handleChange} />
            </div>
        )

    }
}
export default PriLangTime;