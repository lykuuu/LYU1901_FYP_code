import React from 'react';
import Button from '../node_modules/react-bootstrap/Button'
import Form from '../node_modules/react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import './App.css';

class PopUpO extends React.Component {
  render() {
    return (
      <div className="Alert">
        <Form className="InnerAlert">
          <Form.Group controlId="UserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" ref={this.props.user} />
          </Form.Group>

          <Form.Group controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={this.props.password} />
          </Form.Group>

          <Button variant="primary" className="mb-1" onClick={this.props.alert}>
            Login
          </Button>
          <Button variant="danger" className="mb-1" onClick={this.props.closePopup} >
            close
          </Button>
        </Form>
      </div>

    );
  }
}
class PopUpS extends React.Component {
  render() {
    return (
      <div className="Alert">
        <div className="InnerAlert">
          <br></br>
          <Button variant="primary" type="submit" href="/Evaluation">
            Join Evaluation
          </Button>
          <br></br>
          <Button variant="primary" type="submit" href="/Result">
            View Results
          </Button>
          <br></br>
          <Button variant="danger" onClick={this.props.closePopup} className="mb-1">
            close
          </Button>
        </div>
      </div>
    );
  }
}

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      showOfficer: false,
      showStudent: false,
      showAlert: false,
    };
    this.user = React.createRef();
    this.password = React.createRef();
  }
  OfficerPopup() {
    this.setState({
      showOfficer: !this.state.showOfficer
    });
  }
  StudentPopup() {
    this.setState({
      showStudent: !this.state.showStudent
    });
  }
  AlertOrPass() {
    if (this.user.current.value === "" || this.password.current.value === "") {
      this.setState({
        showAlert: true
      });
      setTimeout(() => {
        this.setState({
          showAlert: false
        });
      }, 1200);
    } else {
      //this part should be replaced with user validation
      window.location = '/Officer';
    }
  }
  render() {
    return (
      <div className="id_select">
        <h2 className="text-secondary">Sign in as</h2>
        <br></br>
        <Button variant="info" onClick={this.OfficerPopup.bind(this)}>Officer/Teacher</Button>
        <br></br>
        <Button variant="info" onClick={this.StudentPopup.bind(this)}>Student</Button>
        <br></br>
        {this.state.showOfficer ? <PopUpO user={this.user} password={this.password} alert={this.AlertOrPass.bind(this)} closePopup={this.OfficerPopup.bind(this)} /> : null}
        {this.state.showStudent ? <PopUpS closePopup={this.StudentPopup.bind(this)} /> : null}
        {this.state.showAlert ?
          <Alert className="w-50 mx-auto mt-1 fixed-top" variant="danger">
            Invalid username or password!
          </Alert> : null}
      </div>
    );
  }
}

export default SignIn;
