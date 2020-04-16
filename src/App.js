import React from 'react';
import Container from '../node_modules/react-bootstrap/Container'
import Row from '../node_modules/react-bootstrap/Row'
import Col from '../node_modules/react-bootstrap/Col'
import Button from '../node_modules/react-bootstrap/Button'
import Form from '../node_modules/react-bootstrap/Form'
import './App.css';


class PopUpO extends React.Component {
  render() {
    return (
      <div className="Alert">
        <Form className="InnerAlert">
          <Form.Group controlId="UserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Username" />
          </Form.Group>

          <Form.Group controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>

      </div>

    );
  }
}
class PopUpT extends React.Component {
  render() {
    return (
      <div className="Alert">
        <div className="InnerAlert">
          <br></br>
          <br></br>
          <br></br>
          <Button variant="primary" type="submit">
            View Results
          </Button>
        </div>

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
          <Button variant="primary" type="submit">
            Join Evaluation
          </Button>
          <br></br>
          <Button variant="primary" type="submit">
            View Results
          </Button>
        </div>

      </div>

    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showOfficer: false,
      showTeacher: false,
      showStudent: false
    };
  }
  OfficerPopup() {
    this.setState({
      showOfficer: !this.state.showOfficer
    });
  }
  TeacherPopup() {
    this.setState({
      showTeacher: !this.state.showTeacher
    });
  }
  StudentPopup() {
    this.setState({
      showStudent: !this.state.showStudent
    });
  }
  render() {
    return (
      <Container fluid className="background">

        <Row className="py-5 text-primary">
          <Col>
            <h1>Online Course Evaluation</h1>
          </Col>
        </Row>

        <Row className="py-5">
          <Col xs={1} sm={3}></Col>

          <Col xs={10} sm={6} className="id_select">
            <h2 className="text-secondary">Choose your identity</h2>
            <br></br>
            <Button variant="info" onClick={this.OfficerPopup.bind(this)}>Officer</Button>
            <br></br>
            <Button variant="info" onClick={this.TeacherPopup.bind(this)}>Teacher</Button>
            <br></br>
            <Button variant="info" onClick={this.StudentPopup.bind(this)}>Student</Button>

          </Col>

          <Col xs={1} sm={3}></Col>
        </Row>
        {this.state.showOfficer ? <PopUpO closePopup={this.OfficerPopup.bind(this)} /> : null}
        {this.state.showTeacher ? <PopUpT closePopup={this.TeacherPopup.bind(this)} /> : null}
        {this.state.showStudent ? <PopUpS closePopup={this.StudentPopup.bind(this)} /> : null}
      </Container>
    );
  }
}

export default App;