import React from 'react';
import Col from '../node_modules/react-bootstrap/Col'
import Button from '../node_modules/react-bootstrap/Button'
import Form from '../node_modules/react-bootstrap/Form'

class Submit extends React.Component {
    //please put new states at the end of states list, the order of states will affect some functions
    constructor(prop) {
        super(prop)
        this.state = {
            courseID: "",
            token: "",
            ciphertext: ""

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

            let requestOptions = {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    courseID: this.state.courseID,
                    tokenString: this.state.token,
                    cipherText: this.state.ciphertext
                })
            };

            fetch('http://3.113.9.168:8080/api/evaluation', requestOptions).then(response => {
                if (response.status === 400) {
                    //TODO: change it to bad response reaction
                    alert("Please check your input!")
                }
                else if (response.status === 200) {
                    //TODO: change it to good response reaction
                    alert("Successful submission.\nThank you for you participation.");
                    window.location.reload(false);
                }

            })
        }

        e.preventDefault();
    }


    render() {
        return (

            <div>
                <h5 className="text-secondary">Submission</h5>
                <br></br>
                <Form onSubmit={this.handleSubmit} noValidate className="Form">
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Course ID:</Form.Label>
                            <Form.Control as="input" rows="1" name={"courseID"} value={this.state.courseID} onChange={this.handleTextChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Token:</Form.Label>
                            <Form.Control as="input" rows="1" name={"token"} value={this.state.token} onChange={this.handleTextChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Ciphertext:</Form.Label>
                            <Form.Control as="textarea" rows="1" name={"ciphertext"} value={this.state.ciphertext} onChange={this.handleTextChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <div className="text-center">
                                <Button className="w-100" type="submit" onSubmit={this.handleSubmit}>Submit</Button>
                            </div>
                            <br></br>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

export default Submit