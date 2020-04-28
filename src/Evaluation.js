import React from 'react';
import Col from '../node_modules/react-bootstrap/Col'
import Button from '../node_modules/react-bootstrap/Button'
import Form from '../node_modules/react-bootstrap/Form'
import { bigP_generation, g_generation, privateKey_gen, publicKey_gen, encrypt, decrypt, add_encrypted } from './function/Elgamal.js'
import { Faculty, Level, StudyYear, CourseProperty, Sex, PriLang, PriLangTime, SuppLang, Hours, ExpGrade } from '../src/questionList/questionList'
import './App.css';

//This is data(only the mc) to be sent
let Information = {
  faculty: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  level: [0, 0, 0],
  studyYear: [0, 0, 0, 0, 0, 0],
  courseProperty: [0, 0, 0, 0, 0, 0],
  sex: [0, 0],
  priLang: [0, 0, 0, 0],
  priLangTime: [0, 0, 0, 0, 0],
  suppLang: [0, 0, 0, 0, 0],
  hours: [0, 0, 0, 0, 0, 0],
  expGrade: [0, 0, 0, 0, 0, 0],
  q1: [0, 0, 0, 0, 0, 0, 0],
  q2: [0, 0, 0, 0, 0, 0, 0],
  q3: [0, 0, 0, 0, 0, 0, 0],
  q4: [0, 0, 0, 0, 0, 0, 0],
  q5: [0, 0, 0, 0, 0, 0, 0],
  q6: [0, 0, 0, 0, 0, 0, 0],
  q7: [0, 0, 0, 0, 0, 0, 0],
  q8: [0, 0, 0, 0, 0, 0, 0],
  q9: [0, 0, 0, 0, 0, 0, 0],
  q10: [0, 0, 0, 0, 0, 0, 0],
  q11: [0, 0, 0, 0, 0, 0, 0],
  q12: [0, 0, 0, 0, 0, 0, 0],
  q12s: [0, 0],
  q13: [0, 0, 0, 0, 0, 0, 0],
  q14: [0, 0, 0, 0, 0, 0, 0],
  q14s: [0, 0],
  q15: [0, 0, 0, 0, 0, 0, 0],
  q16: [0, 0, 0, 0, 0, 0, 0],
  q17: [0, 0, 0, 0, 0, 0, 0],
  q18: [0, 0, 0, 0, 0, 0, 0]
};

class Question extends React.Component {
  render() {
    return (
      <Form.Row>
        <Form.Group as={Col} md={12}>
          <Form.Label>{this.props.question}</Form.Label>
          {this.props.option === "1" && <Options name={this.props.name} handleChange={this.props.handleChange} />}
          {this.props.option === "2" && <Options2 name={this.props.name} handleChange={this.props.handleChange} />}
          {this.props.option === "3" && <Options3 name={this.props.name} handleChange={this.props.handleChange} />}
        </Form.Group>
      </Form.Row>
    );
  }
}
class Options extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <Form.Check inline label="Strongly Disargee" type={'radio'} name={this.props.name} value={1} onChange={this.props.handleChange} />
        <Form.Check inline label="Disargee" type={'radio'} name={this.props.name} value={2} onChange={this.props.handleChange} />
        <Form.Check inline label="Slightly Disagree" type={'radio'} name={this.props.name} value={3} onChange={this.props.handleChange} />
        <Form.Check inline label="Slightly Agree" type={'radio'} name={this.props.name} value={4} onChange={this.props.handleChange} />
        <Form.Check inline label="Agree" type={'radio'} name={this.props.name} value={5} onChange={this.props.handleChange} />
        <Form.Check inline label="Strongly Agree" type={'radio'} name={this.props.name} value={6} onChange={this.props.handleChange} />
        <Form.Check inline label="N/A" type={'radio'} name={this.props.name} value={7} onChange={this.props.handleChange} />
      </div>
    );
  }
}

class Options2 extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <Form.Check inline label="Too Much" type={'checkbox'} name={this.props.name} value={1} onChange={this.props.handleChange} disabled={this.props.state.q12s_switch === false} checked={this.props.state.q12s === "1"} />
        <Form.Check inline label="Too Little" type={'checkbox'} name={this.props.name} value={2} onChange={this.props.handleChange} disabled={this.props.state.q12s_switch === false} checked={this.props.state.q12s === "2"} />
      </div>
    );
  }
}

class Options3 extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <Form.Check inline label="Too Difficult" type={'checkbox'} name={this.props.name} value={1} onChange={this.props.handleChange} disabled={this.props.state.q14s_switch === false} checked={this.props.state.q14s === "1"} />
        <Form.Check inline label="Too Simple" type={'checkbox'} name={this.props.name} value={2} onChange={this.props.handleChange} disabled={this.props.state.q14s_switch === false} checked={this.props.state.q14s === "2"} />
      </div>
    );
  }
}

class Evaluation extends React.Component {
  //please put new states at the end of states list, the order of states will affect some functions
  constructor(prop) {
    super(prop)
    this.state = {
      q12s_switch: false,
      q14s_switch: false,
      faculty: -1,
      level: -1,
      studyYear: -1,
      courseProperty: -1,
      sex: -1,
      priLang: -1,
      priLangTime: -1,
      suppLang: { English: false, Cantonese: false, Putonghua: false, Others: false, NA: false },
      hours: -1,
      expGrade: -1,
      q1: -1,
      q2: -1,
      q3: -1,
      q4: -1,
      q5: -1,
      q6: -1,
      q7: -1,
      q8: -1,
      q9: -1,
      q10: -1,
      q11: -1,
      q12: -1,
      q12s: -1,
      q13: -1,
      q14: -1,
      q14s: -1,
      q15: -1,
      q16: -1,
      q17: -1,
      q18: -1,
      a: "",
      encrypted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleMChange = this.handleMChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    if (name === "q12") {
      if (value > 3) {
        this.setState({
          q12s_switch: false
        });
        this.setState({
          q12s: 0
        });
      } else {
        this.setState({
          q12s_switch: true
        });
        this.setState({
          q12s: -1
        });
      }
    }
    if (name === "q14") {
      if (value > 3) {
        this.setState({
          q14s_switch: false
        });
        this.setState({
          q14s: 0
        });
      } else {
        this.setState({
          q14s_switch: true
        });
        this.setState({
          q14s: -1
        });
      }
    }
  }
  handleMChange = (e) => {
    const target = e.target;
    const suppLang = { ...this.state.suppLang };
    const id = target.id;

    if (id === "English")
      suppLang.English = !suppLang.English;
    if (id === "Cantonese")
      suppLang.Cantonese = !suppLang.Cantonese;
    if (id === "Putonghua")
      suppLang.Putonghua = !suppLang.Putonghua;
    if (id === "Others")
      suppLang.Others = !suppLang.Others;
    if (id === "N/A")
      suppLang.NA = !suppLang.NA;
    this.setState({ suppLang });

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
    var counter = 0;
    var missing = 0;
    for (var i in this.state) {
      counter += 1;
      if (counter === 33) {
        //check token
        if (this.state[i] === "") {
          alert("Please enter the information!");
          missing = 1;
        }
        break;
      }
      if (counter >= 3) {
        if (counter !== 10) {
          var name = i;
          if (this.state[name] === -1) {
            alert("Please finish the form.");
            missing = 1;
            break;
          }
        } else {
          var true1 = this.state.suppLang.English;
          var true2 = this.state.suppLang.Cantonese;
          var true3 = this.state.suppLang.Putonghua;
          var true4 = this.state.suppLang.Others;
          if (this.state.suppLang.NA) {
            if (true1 || true2 || true3 || true4) {
              alert("Please check the answer of supplementary languages part.");
              missing = 1;
              break;
            }
          } else {
            if (!(true1 || true2 || true3 || true4)) {
              alert("Please check the answer of supplementary languages part.");
              missing = 1;
              break;
            }
          }
        }
      }
    }
    if (missing === 0) {
      //testing code, please replace it with code for receiving p, g, public key
      alert("start encrypting");
      // var p = bigP_generation();
      // var g = g_generation(p);
      // var priK = privateKey_gen(p, g);
      // var pubK = publicKey_gen(p, g, priK);

      // get info from a
      let { p, g, pubK } = JSON.parse(this.state.a)

      //////////////////////////////////////testing code end
      //record the chosen options into array

      var counter2 = 0;
      var stateValue = [];

      var stateMValue = [];
      if (this.state.suppLang.English === true)
        stateMValue.push(1)
      else
        stateMValue.push(0)
      if (this.state.suppLang.Cantonese === true)
        stateMValue.push(1)
      else
        stateMValue.push(0)
      if (this.state.suppLang.Putonghua === true)
        stateMValue.push(1)
      else
        stateMValue.push(0)
      if (this.state.suppLang.Others === true)
        stateMValue.push(1)
      else
        stateMValue.push(0)
      if (this.state.suppLang.NA === true)
        stateMValue.push(1)
      else
        stateMValue.push(0)

      for (var x in this.state) {
        if (counter2 >= 32)
          break;
        var saveTo = this.state[x] - 1;
        if (counter2 !== 9 && counter2 > 1) {
          stateValue.push(saveTo);
        }
        counter2 += 1;
      }

      //change the Information data
      var counter3 = 0;
      var passed = 0;
      for (var y in Information) {
        var tmpArr = Information[y];
        var tmpIndex = stateValue[counter3];
        if (passed === 1)
          tmpIndex = stateValue[counter3 - 1];
        if (counter3 !== 7) {
          if (tmpIndex < 0)
            tmpArr[tmpIndex + 1] = 0;
          else
            tmpArr[tmpIndex] = 1;
          Information[y] = tmpArr;
        } else {
          Information[y] = stateMValue;
          passed = 1;
        }
        counter3 += 1;
      }
      ////////////////////////////////////
      //encrypt evaluation data
      for (var en_i in Information) {
        var tmpEnArr = Information[en_i];
        for (var en_j = 0; en_j < tmpEnArr.length; en_j++) {
          tmpEnArr[en_j] = encrypt(tmpEnArr[en_j], p, g, pubK);
        }
        Information[en_i] = tmpEnArr;
      }
      this.setState({
        encrypted: true
      });
    }

    // save result to clipboard
    navigator.clipboard.writeText(JSON.stringify(Information)).then(
      () => {
        alert("encryption done")
      }
    )

    e.preventDefault();
  }


  render() {
    return (

      <div>
        <h2 className="text-secondary pt-5">Evaluation Form</h2>
        <br></br>
        <Form onSubmit={this.handleSubmit} noValidate className="Form pt-2">
          <div className="Row1">
            <h3>Basic Information</h3>
            <Faculty handleChange={this.handleChange} />
            <Level handleChange={this.handleChange} />
            <StudyYear handleChange={this.handleChange} />
            <CourseProperty handleChange={this.handleChange} />
            <Sex handleChange={this.handleChange} />
            <PriLang handleChange={this.handleChange} />
            <PriLangTime handleChange={this.handleChange} />
            <SuppLang handleMChange={this.handleMChange} />
            <Hours handleChange={this.handleChange} />
            <ExpGrade handleChange={this.handleChange} />
          </div>

          <h3>Clarity of Explanation</h3>
          <Question option="1" name={"q1"} handleChange={this.handleChange} question="1. The teacher presented in a clear manner." />
          <Question option="1" name={"q2"} handleChange={this.handleChange} question="2. The teacher used relevant examples to assist my learning." />
          <div className="Row1">
            <h3>Enthusiasm and Communication</h3>
            <Question option="1" name={"q3"} handleChange={this.handleChange} question="3. The teacher was enthusiastic about teaching." />
            <Question option="1" name={"q4"} handleChange={this.handleChange} question="4. The teacher encouraged active participation in class." />
            <Question option="1" name={"q5"} handleChange={this.handleChange} question="5. There was effective communication between teacher and students." />
          </div>
          <h3>Motivation</h3>
          <Question option="1" name={"q6"} handleChange={this.handleChange} question="6. The course was interesting." />
          <Question option="1" name={"q7"} handleChange={this.handleChange} question="7. The course was stimulating." />
          <Question option="1" name={"q8"} handleChange={this.handleChange} question="8. The course enhanced my knowledge in this subject." />
          <div className="Row1">
            <h3>Learning Outcomes and Organisation</h3>
            <Question option="1" name={"q9"} handleChange={this.handleChange} question="9. The course was well-organised." />
            <Question option="1" name={"q10"} handleChange={this.handleChange} question="10. Learning outcomes of the course were clear." />
          </div>
          <h3>Assessment</h3>
          <Question option="1" name={"q11"} handleChange={this.handleChange} question="11. Assessment methods were appropriate." />
          <Question option="1" name={"q12"} handleChange={this.handleChange} question="12. The amount of workload required was appropriate." />

          <Form.Label>If your answer is Strongly Disargee, Disargee or Slightly Disagree to Q12:</Form.Label>

          <Form.Row>
            <Form.Group as={Col} md={6}>
              <Form.Label>I found the amount of work required for assessment:</Form.Label>
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <Options2 name={"q12s"} handleChange={this.handleChange} state={this.state} />
            </Form.Group>
          </Form.Row>
          <div className="Row1">
            <h3>Course Difficulty</h3>
            <Question option="1" name={"q13"} handleChange={this.handleChange} question="13. Recommended readings were useful." />
            <Question option="1" name={"q14"} handleChange={this.handleChange} question="14. Course content was of appropriate difficulty." />

            <Form.Label>If your answer is Strongly Disargee, Disargee or Slightly Disagree to Q14:</Form.Label>

            <Form.Row>
              <Form.Group as={Col} md={3}>
                <Form.Label>I found the course content:</Form.Label>
              </Form.Group>
              <Form.Group as={Col} md={9}>
                <Options3 name={"q14s"} handleChange={this.handleChange} state={this.state} />
              </Form.Group>
            </Form.Row>
          </div>

          <h3>Learning Support</h3>
          <Question option="1" name={"q15"} handleChange={this.handleChange} question="15. The course was well supported by library resources." />
          <Question option="1" name={"q16"} handleChange={this.handleChange} question="16. The course was well supported by IT resources." />

          <div className="Row1">
            <h3>Overall Opinion</h3>
            <Question option="1" name={"q17"} handleChange={this.handleChange} question="17. Overall, I am satisfied with the course." />
            <Question option="1" name={"q18"} handleChange={this.handleChange} question="18. Overall, I am satisfied with the teacher's performance." />
          </div>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>a. Encryption information:</Form.Label>
              <Form.Control as="textarea" rows="3" name={"a"} value={this.state.a} onChange={this.handleTextChange} />
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

          {this.state.encrypted &&
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Ciphertext:</Form.Label>
                <Form.Control as="textarea" rows="50" name={"a"} value={JSON.stringify(Information)} defalutValue="" />
              </Form.Group>
            </Form.Row>
          }

        </Form>
      </div>
    );
  }
}

export default Evaluation;