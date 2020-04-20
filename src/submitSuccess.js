import React from 'react';
import Col from '../node_modules/react-bootstrap/Col'
import Button from '../node_modules/react-bootstrap/Button'
import Form from '../node_modules/react-bootstrap/Form'

class SubmitSuccess extends React.Component {
    //please put new states at the end of states list, the order of states will affect some functions
    constructor(prop) {
        super(prop)
        this.state = {
            courseID: "",
            token:"",
            ciphertext:""

        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleTextChange = (e) => {
        const target = e.target;
        const name = target.name;
        this.setState({
            [name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        //first check the form answers
        var missing = 0;
        for (var i in this.state) {
            if (this.state[i] === "") {
                alert("Please finish the form!");
                missing = 1;
                break;
            }
        }
        if (missing === 0) {
            //testing code, please replace it with code for receiving p, g, public key
            alert("Thank you for participation!");
        }

        e.preventDefault();
    }


    render() {
        return (

            <div>
                <h2 className="text-secondary pt-5">Submission</h2>
                <br></br>
                <Form onSubmit={this.handleSubmit} noValidate className="Form pt-2">
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>1. Course ID:</Form.Label>
                            <Form.Control as="textarea" rows="1" name={"courseID"} value={this.state.courseID} onChange={this.handleTextChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>2. Token:</Form.Label>
                            <Form.Control as="textarea" rows="1" name={"token"} value={this.state.token} onChange={this.handleTextChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>3. Ciphertext:</Form.Label>
                            <Form.Control as="textarea" rows="3" name={"ciphertext"} value={this.state.ciphertext} onChange={this.handleTextChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <div className="text-center">
                                <Button type="submit" onSubmit={this.handleSubmit}>Submit</Button>
                            </div>
                            <br></br>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

export default SubmitSuccess