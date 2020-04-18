import React from 'react';
import Col from '../node_modules/react-bootstrap/Col'
import Button from '../node_modules/react-bootstrap/Button'
import Form from '../node_modules/react-bootstrap/Form'
import { bigP_generation, g_generation, privateKey_gen, publicKey_gen, encrypt, decrypt, add_encrypted } from './function/Elgamal.js'
import { Faculty, Level, StudyYear, CourseProperty, Sex, PriLang, PriLangTime, SuppLang, Hours, ExpGrade } from '../src/questionList/questionList'

import './App.css';

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

  constructor(prop) {
    super(prop)
    this.state = {
      q12s_switch: false,
      q14s_switch: false,
      token: 0,
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
      b: ""
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
      }
    }
  }
  handleMChange = (e) => {
    const target = e.target;
    const English = this.state.suppLang.English;
    const Cantonese = this.state.suppLang.Cantonese;
    const Putonghua = this.state.suppLang.Putonghua;
    const Others = this.state.suppLang.Others;
    const NA = this.state.suppLang.NA;
    const id = target.id;

    if (id === "English")
      this.state.suppLang.English = !English;
    if (id === "Cantonese")
      this.state.suppLang.Cantonese = !Cantonese;
    if (id === "Putonghua")
      this.state.suppLang.Putonghua = !Putonghua;
    if (id === "Others")
      this.state.suppLang.Others = !Others;
    if (id === "N/A")
      this.state.suppLang.NA = !NA;

  }
  handleTextChange = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: e.target.value
    });
  }
  handleSubmit = (e) => {
    //testing code, please delete after testing
    const show = JSON.stringify(this.state);
    var p = bigP_generation();
    var g = g_generation(p);
    var priK = privateKey_gen(p, g);
    var pubK = publicKey_gen(p, g, priK);
    var message1 = 4;
    var message2 = 5;
    var message3 = 100;
    var message = message1 + message2 + message3;
    var encrypted1 = encrypt(message1, p, g, pubK);
    var encrypted2 = encrypt(message2, p, g, pubK);
    var encrypted3 = encrypt(message3, p, g, pubK);
    var encrypted4 = add_encrypted(encrypted1, encrypted2);
    var encrypted = add_encrypted(encrypted3, encrypted4);
    var decrypted = decrypt(encrypted, p, g, priK);
    alert("p = " + p + "\n" +
      "g = " + g + "\n" +
      "priK = " + priK + "\n" +
      "pubK = " + pubK + "\n" +
      "message = " + message + "\n");


    alert("encrypted = " + encrypted + "\n");

    alert("decrypted = " + decrypted + "\n");
    //testing code end
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
            <Form.Row>
              <Form.Group as={Col} md={3}>
                <Form.Label>My faculty:</Form.Label>
              </Form.Group>
              <Form.Group as={Col} md={9}>
                <Faculty handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>


            <Form.Row>
              <Form.Group as={Col} md={3}>
                <Form.Label>Level:</Form.Label>
              </Form.Group>
              <Form.Group as={Col} md={9}>
                <Level handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={3}>
                <Form.Label>Year of study:</Form.Label>
              </Form.Group>
              <Form.Group as={Col} md={9}>
                <StudyYear handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={3}>
                <Form.Label>This course is (select one):</Form.Label>
              </Form.Group>
              <Form.Group as={Col} md={9}>
                <CourseProperty handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={3}>
                <Form.Label>Sex:</Form.Label>
              </Form.Group>
              <Form.Group as={Col} md={9}>
                <Sex handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={6}>
                <Form.Label>Primary spoken language used in class:</Form.Label>
              </Form.Group>
              <Form.Group as={Col} md={6}>
                <PriLang handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={6}>
                <Form.Label>Fraction of class time the primary language was uesd:</Form.Label>
              </Form.Group>
              <Form.Group as={Col} md={6}>
                <PriLangTime handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={6}>
                <Form.Label>Supplementary language(s) (can select more than one):</Form.Label>
              </Form.Group>
              <Form.Group as={Col} md={6}>
                <SuppLang handleMChange={this.handleMChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={6}>
                <Form.Label>Hours per week spent on this course outside class:</Form.Label>
              </Form.Group>
              <Form.Group as={Col} md={6}>
                <Hours handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={6}>
                <Form.Label>Expected grade in the course:</Form.Label>
              </Form.Group>
              <Form.Group as={Col} md={6}>
                <ExpGrade handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
          </div>

          <h3>Clarity of Explanation</h3>

          <Form.Row>
            <Form.Group as={Col} md={12}>
              <Form.Label>1. The teacher presented in a clear manner.</Form.Label>
              <Options name={"q1"} handleChange={this.handleChange} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={12}>
              <Form.Label>2. The teacher used relevant examples to assist my learning.</Form.Label>
              <Options name={"q2"} handleChange={this.handleChange} />
            </Form.Group>
          </Form.Row>
          <div className="Row1">
            <h3>Enthusiasm and Communication</h3>

            <Form.Row>
              <Form.Group as={Col} md={12}>
                <Form.Label>3. The teacher was enthusiastic about teaching.</Form.Label>
                <Options name={"q3"} handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={12}>
                <Form.Label>4. The teacher encouraged active participation in class.</Form.Label>
                <Options name={"q4"} handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={12}>
                <Form.Label>5. There was effective communication between teacher and students.</Form.Label>
                <Options name={"q5"} handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
          </div>
          <h3>Motivation</h3>

          <Form.Row>
            <Form.Group as={Col} md={12}>
              <Form.Label>6. The course was interesting.</Form.Label>
              <Options name={"q6"} handleChange={this.handleChange} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={12}>
              <Form.Label>7. The course was stimulating.</Form.Label>
              <Options name={"q7"} handleChange={this.handleChange} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={12}>
              <Form.Label>8. The course enhanced my knowledge in this subject.</Form.Label>
              <Options name={"q8"} handleChange={this.handleChange} />
            </Form.Group>
          </Form.Row>

          <div className="Row1">
            <h3>Learning Outcomes and Organisation</h3>
            <Form.Row>
              <Form.Group as={Col} md={12}>
                <Form.Label>9. The course was well-organised.</Form.Label>
                <Options name={"q9"} handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={12}>
                <Form.Label>10. Learning outcomes of the course were clear.</Form.Label>
                <Options name={"q10"} handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
          </div>
          <h3>Assessment</h3>

          <Form.Row>
            <Form.Group as={Col} md={12}>
              <Form.Label>11. Assessment methods were appropriate.</Form.Label>
              <Options name={"q11"} handleChange={this.handleChange} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={12}>
              <Form.Label>12. The amount of workload required was appropriate.</Form.Label>
              <Options name={"q12"} handleChange={this.handleChange} />
            </Form.Group>
          </Form.Row>

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

            <Form.Row>
              <Form.Group as={Col} md={12}>
                <Form.Label>13. Recommended readings were useful.</Form.Label>
                <Options name={"q13"} handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={12}>
                <Form.Label>14. Course content was of appropriate difficulty.</Form.Label>
                <Options name={"q14"} handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

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

          <Form.Row>
            <Form.Group as={Col} md={12}>
              <Form.Label>15. The course was well supported by library resources.</Form.Label>
              <Options name={"q15"} handleChange={this.handleChange} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={12}>
              <Form.Label>16. The course was well supported by IT resources.</Form.Label>
              <Options name={"q16"} handleChange={this.handleChange} />
            </Form.Group>
          </Form.Row>
          <div className="Row1">
            <h3>Overall Opinion</h3>

            <Form.Row>
              <Form.Group as={Col} md={12}>
                <Form.Label>17. Overall, I am satisfied with the course.</Form.Label>
                <Options name={"q17"} handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={12}>
                <Form.Label>18. Overall, I am satisfied with the teacher's performance.</Form.Label>
                <Options name={"q18"} handleChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
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

          <Form.Row>
            <Form.Group as={Col} md={1}>
              <Form.Label>token:</Form.Label>
            </Form.Group>
            <Form.Group as={Col} md={3}>
              <Form.Control as="input" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={1}>
              <Form.Label>key:</Form.Label>
            </Form.Group>
            <Form.Group as={Col} md={3}>
              <Form.Control as="input" />
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
        <div id="testing">
        </div>
      </div>
    );
  }
}

export default Evaluation;