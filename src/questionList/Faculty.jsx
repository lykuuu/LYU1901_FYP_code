import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import '../App.css';

class Faculty extends React.Component {
    render() {
        return (
            <Form.Row>
                <Form.Group as={Col} md={3}>
                    <Form.Label>My faculty:</Form.Label>
                </Form.Group>
                <Form.Group as={Col} md={9}>
                    <div className="mb-3">
                        <Form.Check inline label="ART" type={"radio"} name="faculty" value={"ART"} onChange={this.props.handleChange} />
                        <Form.Check inline label="BAS" type={"radio"} name="faculty" value={"BAS"} onChange={this.props.handleChange} />
                        <Form.Check inline label="EDU" type={"radio"} name="faculty" value={"EDU"} onChange={this.props.handleChange} />
                        <Form.Check inline label="ERG" type={"radio"} name="faculty" value={"ERG"} onChange={this.props.handleChange} />
                        <Form.Check inline label="LAW" type={"radio"} name="faculty" value={"LAW"} onChange={this.props.handleChange} />
                        <Form.Check inline label="MED" type={"radio"} name="faculty" value={"MED"} onChange={this.props.handleChange} />
                        <Form.Check inline label="SCI" type={"radio"} name="faculty" value={"SCI"} onChange={this.props.handleChange} />
                        <Form.Check inline label="SSC" type={"radio"} name="faculty" value={"SSC"} onChange={this.props.handleChange} />
                        <Form.Check inline label="OTHER" type={"radio"} name="faculty" value={"OTHER"} onChange={this.props.handleChange} />
                    </div>
                </Form.Group>
            </Form.Row>
        )

    }
}
export default Faculty;
