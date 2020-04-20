import React from 'react';
import Button from '../node_modules/react-bootstrap/Button'
import Form from '../node_modules/react-bootstrap/Form'
import Alert from "react-bootstrap/Alert"
import { ExcelRenderer } from 'react-excel-renderer';
import './App.css';


class PopUp extends React.Component {
    render() {
        return (
            <div className="Alert">
                <Form className="TokenAlert">
                    <Form.Group controlId="CourseID">
                        <Form.Label>CourseID</Form.Label>
                        <Form.Control type="courseID" ref={this.props.courseID} />
                    </Form.Group>

                    <Form.Group controlId="ExpireDate">
                        <Form.Label>Expire Date</Form.Label>
                        <Form.Control type="expireDate" ref={this.props.Edate} />
                    </Form.Group>
                    <Form.Group controlId="FileInput">
                        <Form.Label>Select an excel file</Form.Label>
                        <Form.Control type="file" ref={this.props.fileInput} />
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" onClick={this.props.alert}>
                        Start Evaluation
                    </Button>
                    <br></br>
                    <Button variant="danger" onClick={this.props.closePopup}>
                        Close
                    </Button>
                </Form>

            </div>

        );
    }
}

class PopUpD extends React.Component {
    render() {
        return (
            <div className="Alert">
                <Form className="TokenAlert">
                    <Form.Group controlId="CourseID_D">
                        <Form.Label>CourseID</Form.Label>
                        <Form.Control type="courseID_D" ref={this.props.courseID_D} />
                    </Form.Group>

                    <Form.Group controlId="KeyFragment">
                        <Form.Label>Key fragment</Form.Label>
                        <Form.Control type="KeyFragment" ref={this.props.keyPieces} />
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" onClick={this.props.alert}>
                        Submit
                    </Button>
                    <br></br>
                    <Button variant="danger" onClick={this.props.closePopup}>
                        Close
                    </Button>
                </Form>

            </div>

        );
    }
}


class Officer extends React.Component {
    constructor() {
        super();
        this.state = {
            showGenerator: false,
            showAlert: false,
            showSuccessF: false,
            showDecrypt: false,
            showD_Alert: false,
            showSuccess: false
        };
        this.courseID = React.createRef();
        this.Edate = React.createRef();
        this.fileInput = React.createRef();
        this.courseID_D = React.createRef();
        this.keyPieces = React.createRef();

    }
    Popup() {
        this.setState({
            showGenerator: !this.state.showGenerator
        });
    }
    PopupD() {
        this.setState({
            showDecrypt: !this.state.showDecrypt
        });
    }
    AlertOrPass() {
        if (this.courseID.current.value === "" || this.Edate.current.value === "" || !this.fileInput.current.files[0])
            this.setState({
                showAlert: true
            });
        setTimeout(() => {
            this.setState({
                showAlert: false
            });
        }, 1200);
        if (this.fileInput.current.files[0] && this.courseID.current.value !== "" && this.Edate.current.value !== "") {
            ExcelRenderer(this.fileInput.current.files[0], (err, resp) => {
                if (err) {
                    console.log(err);
                }
                else {
                    //data for generate evaluation and tokens
                    var data = {
                        courseID: this.courseID.current.value,
                        expireDate: this.Edate.current.value,
                        studentID: resp.rows
                    }
                    this.setState({
                        showSuccessF: true
                    });
                    setTimeout(() => {
                        this.setState({
                            showSuccessF: false
                        });
                    }, 1200);
                }
            });
        }
    }
    AlertOrPass2() {
        if (this.courseID_D.current.value === "" || this.keyPieces.current.value === "")
            this.setState({
                showD_Alert: true
            });
        setTimeout(() => {
            this.setState({
                showD_Alert: false
            });
        }, 1200);
        if (this.courseID_D.current.value !== "" && this.keyPieces.current.value !== "")
            this.setState({
                showSuccess: true
            });
        setTimeout(() => {
            this.setState({
                showSuccess: false
            });
        }, 1200);
    }
    render() {
        return (
            <div className="id_select">
                <h2 className="text-secondary">Instruction</h2>
                <br></br>
                <Button variant="info" onClick={this.Popup.bind(this)}>Start New Evaluation</Button>
                <br></br>
                <Button variant="info" onClick={this.PopupD.bind(this)}>Decrypt Results</Button>
                <br></br>
                <Button variant="info" href="/Result">View Results</Button>
                <br></br>
                <Button variant="info" href="/SignIn">Logout</Button>

                {this.state.showGenerator ? <PopUp fileInput={this.fileInput} courseID={this.courseID} Edate={this.Edate} alert={this.AlertOrPass.bind(this)} closePopup={this.Popup.bind(this)} /> : null}
                {this.state.showDecrypt ? <PopUpD courseID_D={this.courseID_D} keyPieces={this.keyPieces} alert={this.AlertOrPass2.bind(this)} closePopup={this.PopupD.bind(this)} /> : null}
                {this.state.showAlert ?
                    <Alert className="w-50 mx-auto mt-1 fixed-top" variant="danger">
                        Invalid courseID / expire date or file!
                    </Alert> : null}
                {this.state.showD_Alert ?
                    <Alert className="w-50 mx-auto mt-1 fixed-top" variant="danger">
                        Invalid courseID / key fragment!
                    </Alert> : null}
                {this.state.showSuccess ?
                    <Alert className="w-50 mx-auto mt-1 fixed-top" variant="success">
                        Key fragment is sent!
                    </Alert> : null}
                {this.state.showSuccessF ?
                    <Alert className="w-50 mx-auto mt-1 fixed-top" variant="success">
                        New evaluation is created!
                    </Alert> : null}
            </div>
        );
    }
}

export default Officer;