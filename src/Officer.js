import React from 'react';
import Button from '../node_modules/react-bootstrap/Button'
import Form from '../node_modules/react-bootstrap/Form'
import './App.css';

function buildFileSelector() {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
}

class FileDialogue extends React.Component {
    componentDidMount() {
        this.fileSelector = buildFileSelector();
    }

    handleFileSelect = (e) => {
        e.preventDefault();
        this.fileSelector.click();
    }

    render() {
        return <a className="fileButton" href="" onClick={this.handleFileSelect}>Select files</a>
    }
}

class PopUpO extends React.Component {
    render() {
        return (
            <div className="Alert">
                <Form className="TokenAlert">
                    <Form.Group controlId="CourseID">
                        <Form.Label>CourseID</Form.Label>
                        <Form.Control type="courseID" placeholder="CourseID" />
                    </Form.Group>

                    <Form.Group controlId="Expire Date">
                        <Form.Label>Expire Date</Form.Label>
                        <Form.Control type="expireDate" placeholder="Date" />
                    </Form.Group>
                    <FileDialogue />
                    <br></br>
                    <Button variant="primary" type="submit">
                        Start Evaluation
                    </Button>
                    <br></br>
                    <Button variant="danger" type="submit">
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
            showOfficer: false
        };
    }
    OfficerPopup() {
        this.setState({
            showOfficer: !this.state.showOfficer
        });
    }

    render() {
        return (
            <div className="id_select">
                <h2 className="text-secondary">Instruction</h2>
                <br></br>
                <Button variant="info" onClick={this.OfficerPopup.bind(this)}>Start New Evaluation</Button>
                <br></br>
                <Button variant="info" href="/Result">View Results</Button>
                <br></br>
                <Button variant="info" href="/">Logout</Button>

                {this.state.showOfficer ? <PopUpO closePopup={this.OfficerPopup.bind(this)} /> : null}
            </div>
        );
    }
}

export default Officer;