import React from 'react';
import Form from 'react-bootstrap/Form'
import '../App.css';

class Level extends React.Component {
    render() {
        return (

            <div className="mb-3">
                <Form.Check inline label="Undergraduate" type={"radio"} name="level" value={"Undergraduate"} onChange={this.props.handleChange} />
                <Form.Check inline label="Postgraduate" type={"radio"} name="level" value={"Postgraduate"} onChange={this.props.handleChange} />
                <Form.Check inline label="Other" type={"radio"} name="level" value={"Other"} onChange={this.props.handleChange} />
            </div>

        )

    }
}
export default Level;