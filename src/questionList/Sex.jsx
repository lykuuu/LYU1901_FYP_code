import React from 'react';
import Form from 'react-bootstrap/Form'
import '../App.css';

class Sex extends React.Component {
    render() {
        return (
            <div  className="mb-3">
            <Form.Check inline label="Female" type={'radio'} name="sex" value={"1"} onChange={this.props.handleChange} />
            <Form.Check inline label="Male" type={'radio'} name="sex" value={"2"} onChange={this.props.handleChange} />
          </div>
        )

    }
}
export default Sex;