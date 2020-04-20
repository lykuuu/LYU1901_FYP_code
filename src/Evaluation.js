import React from 'react';
import Col from '../node_modules/react-bootstrap/Col'
import Button from '../node_modules/react-bootstrap/Button'
import Form from '../node_modules/react-bootstrap/Form'
import { generateKey, generateIV, AESDecrypt, AESEncrypt } from './function/AES.js'
import { bigP_generation, g_generation, privateKey_gen, publicKey_gen, encrypt, decrypt, add_encrypted } from './function/Elgamal.js'
import { Faculty, Level, StudyYear, CourseProperty, Sex, PriLang, PriLangTime, SuppLang, Hours, ExpGrade } from '../src/questionList/questionList'

import './App.css';

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
        <Form.Check inline label="N/A" type={'radio'} name={this.props.name} value={0} onChange={this.props.handleChange} />
      </div>
    );
  }
}

class Options2 extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <Form.Check inline label="Too Much" type={'checkbox'} name={this.props.name} value={"1"} onChange={this.props.handleChange} disabled={this.props.state.q12s_switch === false} checked={this.props.state.q12s === "1"} />
        <Form.Check inline label="Too Little" type={'checkbox'} name={this.props.name} value={"2"} onChange={this.props.handleChange} disabled={this.props.state.q12s_switch === false} checked={this.props.state.q12s === "2"} />
      </div>
    );
  }
}

class Options3 extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <Form.Check inline label="Too Difficult" type={'checkbox'} name={this.props.name} value={"1"} onChange={this.props.handleChange} disabled={this.props.state.q14s_switch === false} checked={this.props.state.q14s === "1"} />
        <Form.Check inline label="Too Simple" type={'checkbox'} name={this.props.name} value={"2"} onChange={this.props.handleChange} disabled={this.props.state.q14s_switch === false} checked={this.props.state.q14s === "2"} />
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
      b: "",
      token: ""
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
      if (counter === 35) {
        //check token
        if (this.state[i] === ""){
          alert("Please enter the token!");
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
      var p = bigP_generation();
      var g = g_generation(p);
      var priK = privateKey_gen(p, g);
      var pubK = publicKey_gen(p, g, priK);
      //////////////////////////////////////testing code end
      //only encrypt q1-q18 by elgamal
      var finished = [];
      var counter2 = 0;
      for (var x in this.state) {
        var dataName = x;
        if (counter2 > 11 && counter2 < 32) {
          var encrypted = encrypt(this.state[dataName], p, g, pubK);
          finished.push(encrypted);
        }
        counter2 += 1;
      }
      //generating the data to be sent
      var Data = JSON.parse(JSON.stringify(this.state));
      var counter3 = 0;
      for (var y in Data) {
        if (counter3 > 11 && counter3 < 32) {
          Data[y] = finished[counter3 - 12];
        }
        counter3 += 1;
      }
      delete Data.q12s_switch;
      delete Data.q14s_switch;
      Data = JSON.stringify(Data);
      //data to be sent
      //Encrypt data with AES
      ////////////////////////////////////////////////////
      var key = generateKey();                          //should be done in server
      var IV = generateIV();                            //
      ////////////////////////////////////////////////////
      var ciphertext = AESEncrypt(Data,key,IV);         //use the key and IV from the server to encrypt data
      ////////////////////////////////////////////////////
      console.log(ciphertext);                          //just for debugging
      var originaltext = AESDecrypt(ciphertext,key,IV); //
      console.log(originaltext);                        //
      ////////////////////////////////////////////////////
      //send the ciphertext
    }

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
              <Form.Label>a. Comments for the teacher:</Form.Label>
              <Form.Control as="textarea" rows="3" name={"a"} value={this.state.a} onChange={this.handleTextChange} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>b. Comment for the course:</Form.Label>
              <Form.Control as="textarea" rows="3" name={"b"} value={this.state.b} onChange={this.handleTextChange} />
            </Form.Group>
          </Form.Row>

          {/* Token and key parts have no function and no state*/}
          <Form.Row>
            <Form.Group as={Col} md={1}>
              <Form.Label>token:</Form.Label>
            </Form.Group>
            <Form.Group as={Col} md={3}>
              <Form.Control as="input" name={"token"} value={this.state.token} onChange={this.handleTextChange}/>
            </Form.Group>
          </Form.Row>
          {/****************************************************/}

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

export default Evaluation;