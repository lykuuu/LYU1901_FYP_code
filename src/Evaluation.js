import React from 'react';
import Container from '../node_modules/react-bootstrap/Container'
import Row from '../node_modules/react-bootstrap/Row'
import Col from '../node_modules/react-bootstrap/Col'
import Button from '../node_modules/react-bootstrap/Button'
import Form from '../node_modules/react-bootstrap/Form'
import './App.css';

class Options extends React.Component {
  render() {
    return (
      <div>
        {['radio'].map(type => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check inline label="Strongly Disargee" name="1" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="Disargee" name="1" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="Slightly Disagree" name="1" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="Slightly Agree" name="1" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="Agree" name="1" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="Strongly Agree" name="1" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="N/A" name="1" type={type} id={`inline-${type}-1`} />
          </div>
        ))}

      </div>

    );
  }
}

class Evaluation extends React.Component {

  constructor(prop) {
    super(prop)
    this.state = {
      token: 'EMPTY',
      faculty: 'EMPTY',
      level: 'EMPTY',
      studyYear: 'EMPTY',
      courseProperty: 'EMPTY',
      sex: 'EMPTY',
      priLang: 'EMPTY',
      priLangTime: 'EMPTY',
      suppLang: 'EMPTY',
      hours: 'EMPTY',
      expGrade: 'EMPTY',
      c1: 'EMPTY',
      c2: 'EMPTY',
      e1: 'EMPTY',
      e2: 'EMPTY',
      e3: 'EMPTY',
      m1: 'EMPTY',
      m2: 'EMPTY',
      m3: 'EMPTY',
      l1: 'EMPTY',
      l2: 'EMPTY',
      a1: 'EMPTY',
      a2: 'EMPTY',
      a2s: 'EMPTY',
      d1: 'EMPTY',
      d2: 'EMPTY',
      d2s: 'EMPTY',
      s1: 'EMPTY',
      s2: 'EMPTY',
      o1: 'EMPTY',
      o2: 'EMPTY'

    }

    this.onFacultyChange = this.onFacultyChange.bind(this);
    this.onLevelChange = this.onLevelChange.bind(this);
    this.onStudyYearChange = this.onStudyYearChange.bind(this);
    this.onCoursePropertyChange = this.onCoursePropertyChange.bind(this);
    this.onSexChange = this.onSexChange.bind(this);
    this.onPriLangChange = this.onPriLangChange.bind(this);
    this.onPriLangTimeChange = this.onPriLangTimeChange.bind(this);
    this.onSuppLangChange = this.onSuppLangChange.bind(this);
    this.onHoursChange = this.onHoursChange.bind(this);
    this.onExpGradeChange = this.onExpGradeChange.bind(this);
    this.onc1Change = this.onc1Change.bind(this);
    this.onc2Change = this.onc2Change.bind(this);
    this.one1Change = this.one1Change.bind(this);
    this.one2Change = this.one2Change.bind(this);
    this.one3Change = this.one3Change.bind(this);
    this.onm1Change = this.onm1Change.bind(this);
    this.onm2Change = this.onm2Change.bind(this);
    this.onl1Change = this.onl1Change.bind(this);
    this.onl2Change = this.onl2Change.bind(this);
    this.ona1Change = this.ona1Change.bind(this);
    this.ona2Change = this.ona2Change.bind(this);
    this.ona2sChange = this.ona2sChange.bind(this);
    this.ond1Change = this.ond1Change.bind(this);
    this.ond2Change = this.ond2Change.bind(this);
    this.ond2sChange = this.ond2sChange.bind(this);
    this.ons1Change = this.ons1Change.bind(this);
    this.ons2Change = this.ons2Change.bind(this);
    this.ono1Change = this.ono1Change.bind(this);
    this.ono2Change = this.ono2Change.bind(this);
  }

  onFacultyChange = (e) => {
    this.setState({
      faculty: e.target.value
    });
  }
  onLevelChange = (e) => {
    this.setState({
      level: e.target.value
    });
  }
  onStudyYearChange = (e) => {
    this.setState({
      studyYear: e.target.value
    });
  }
  onCoursePropertyChange = (e) => {
    this.setState({
      courseProperty: e.target.value
    });
  }
  onSexChange = (e) => {
    this.setState({
      sex: e.target.value
    });
  }

  onPriLangChange = (e) => {
    this.setState({
      priLang: e.target.value
    });
  }

  onPriLangTimeChange = (e) => {
    this.setState({
      priLangTime: e.target.value
    });
  }

  onSuppLangChange = (e) => {
    this.setState({
      suppLang: e.target.value
    });
  }

  onHoursChange = (e) => {
    this.setState({
      hours: e.target.value
    });
  }

  onExpGradeChange = (e) => {
    this.setState({
      expGrade: e.target.value
    });
  }

  onc1Change = (e) => {
    this.setState({
      c1: e.target.value
    });
  }

  onc2Change = (e) => {
    this.setState({
      c2: e.target.value
    });
  }

  one1Change = (e) => {
    this.setState({
      e1: e.target.value
    });
  }

  one2Change = (e) => {
    this.setState({
      e2: e.target.value
    });
  }

  one3Change = (e) => {
    this.setState({
      e3: e.target.value
    });
  }

  onm1Change = (e) => {
    this.setState({
      m1: e.target.value
    });
  }

  onm2Change = (e) => {
    this.setState({
      m2: e.target.value
    });
  }

  onm3Change = (e) => {
    this.setState({
      m3: e.target.value
    });
  }

  onl1Change = (e) => {
    this.setState({
      l1: e.target.value
    });
  }

  onl2Change = (e) => {
    this.setState({
      l2: e.target.value
    });
  }

  ona1Change = (e) => {
    this.setState({
      a1: e.target.value
    });
  }

  ona2Change = (e) => {
    this.setState({
      a2: e.target.value
    });
  }

  ona2sChange = (e) => {
    this.setState({
      a2s: e.target.value
    });
  }

  ond1Change = (e) => {
    this.setState({
      d1: e.target.value
    });
  }

  ond2Change = (e) => {
    this.setState({
      d2: e.target.value
    });
  }

  ond2sChange = (e) => {
    this.setState({
      d2s: e.target.value
    });
  }

  ons1Change = (e) => {
    this.setState({
      s1: e.target.value
    });
  }

  ons2Change = (e) => {
    this.setState({
      s2: e.target.value
    });
  }

  ono1Change = (e) => {
    this.setState({
      o1: e.target.value
    });
  }

  ono2Change = (e) => {
    this.setState({
      o2: e.target.value
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

        <Row className="py-4">
          <Col xs={1} sm={3}></Col>

          <Col xs={10} sm={6} className="id_select">
            <Form onSubmit={this.handleSubmit} noValidate className="Form">
              <div className="Row1">
                <h3>Basic Information</h3>

                <Form.Row>
                  <Form.Group as={Col} sm={3}>
                    <Form.Label>My faculty:</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} sm={9}>
                    {['radio'].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="ART" type={type} name="faculty" value="ART" checked={this.state.faculty === "ART"} onChange={this.onFacultyChange} />
                        <Form.Check inline label="BAS" type={type} name="faculty" value="BAS" checked={this.state.faculty === "BAS"} onChange={this.onFacultyChange} />
                        <Form.Check inline label="EDU" type={type} name="faculty" value="EDU" checked={this.state.faculty === "EDU"} onChange={this.onFacultyChange} />
                        <Form.Check inline label="ERG" type={type} name="faculty" value="ERG" checked={this.state.faculty === "ERG"} onChange={this.onFacultyChange} />
                        <Form.Check inline label="LAW" type={type} name="faculty" value="LAW" checked={this.state.faculty === "LAW"} onChange={this.onFacultyChange} />
                        <Form.Check inline label="MED" type={type} name="faculty" value="MED" checked={this.state.faculty === "MED"} onChange={this.onFacultyChange} />
                        <Form.Check inline label="SCI" type={type} name="faculty" value="SCI" checked={this.state.faculty === "SCI"} onChange={this.onFacultyChange} />
                        <Form.Check inline label="SSC" type={type} name="faculty" value="SSC" checked={this.state.faculty === "SSC"} onChange={this.onFacultyChange} />
                        <Form.Check inline label="OTHER" type={type} name="faculty" value="OTHER" checked={this.state.faculty === "OTHER"} onChange={this.onFacultyChange} />
                      </div>
                    ))}
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={3}>
                    <Form.Label>Level:</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} sm={9}>
                    {['radio'].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Undergraduate" type={type} name="level" id={`inline-${type}-1`} />
                        <Form.Check inline label="Postgraduate" type={type} name="level" id={`inline-${type}-2`} />
                        <Form.Check inline label="Other" type={type} name="level" id={`inline-${type}-3`} />
                      </div>
                    ))}
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={3}>
                    <Form.Label>Year of study:</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} sm={9}>
                    {['radio'].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Year 1" type={type} name="Year of study:" id={`inline-${type}-1`} />
                        <Form.Check inline label="Year 2" type={type} name="Year of study:" id={`inline-${type}-2`} />
                        <Form.Check inline label="Year 3" type={type} name="Year of study:" id={`inline-${type}-3`} />
                        <Form.Check inline label="Year 4" type={type} name="Year of study:" id={`inline-${type}-4`} />
                        <Form.Check inline label="Year 5" type={type} name="Year of study:" id={`inline-${type}-5`} />
                        <Form.Check inline label="Year 6 or above" type={type} name="Year of study:" id={`inline-${type}-6`} />
                      </div>
                    ))}
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={3}>
                    <Form.Label>This course is (select one):</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} sm={9}>
                    {['radio'].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Major Required" type={type} name="This course is (select one):" id={`inline-${type}-1`} />
                        <Form.Check inline label="Major Elective" type={type} name="This course is (select one):" id={`inline-${type}-2`} />
                        <Form.Check inline label="Minor" type={type} name="This course is (select one):" id={`inline-${type}-3`} />
                        <Form.Check inline label="Elective" type={type} name="This course is (select one):" id={`inline-${type}-4`} />
                        <Form.Check inline label="U Core (GE, Lang, PE, IT)" type={type} name="This course is (select one):" id={`inline-${type}-5`} />
                        <Form.Check inline label="N/A" type={type} name="This course is (select one):" id={`inline-${type}-6`} />
                      </div>
                    ))}
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={3}>
                    <Form.Label>Sex:</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} sm={9}>
                    {['radio'].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Female" type={type} name="Sex" id={`inline-${type}-1`} />
                        <Form.Check inline label="Male" type={type} name="Sex" id={`inline-${type}-2`} />
                      </div>
                    ))}
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={6}>
                    <Form.Label>Primary spoken language used in class:</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} sm={6}>
                    {['radio'].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="English" type={type} name="Primary spoken language" id={`inline-${type}-1`} />
                        <Form.Check inline label="Cantonese" type={type} name="Primary spoken language" id={`inline-${type}-1`} />
                        <Form.Check inline label="Putonghua" type={type} name="Primary spoken language" id={`inline-${type}-1`} />
                        <Form.Check inline label="Others" type={type} name="Primary spoken language" id={`inline-${type}-1`} />
                      </div>
                    ))}
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={6}>
                    <Form.Label>Fraction of class time the primary language was uesd:</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} sm={6}>
                    {['radio'].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="51-60%" type={type} name="Fraction of class time the primary language was uesd" id={`inline-${type}-1`} />
                        <Form.Check inline label="61-70%" type={type} name="Fraction of class time the primary language was uesd" id={`inline-${type}-1`} />
                        <Form.Check inline label="71-80%" type={type} name="Fraction of class time the primary language was uesd" id={`inline-${type}-1`} />
                        <Form.Check inline label="81-90%" type={type} name="Fraction of class time the primary language was uesd" id={`inline-${type}-1`} />
                        <Form.Check inline label="91-100%" type={type} name="Fraction of class time the primary language was uesd" id={`inline-${type}-1`} />
                      </div>
                    ))}
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={6}>
                    <Form.Label>Supplementary language(s) (can select more than one):</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} sm={6}>
                    {['checkbox'].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="English" name="Supplementary language" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="Cantonese" name="Supplementary language" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="Putonghua" name="Supplementary language" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="Others" name="Supplementary language" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="N/A" name="Supplementary language" type={type} id={`inline-${type}-1`} />
                      </div>
                    ))}
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={6}>
                    <Form.Label>Hours per week spent on this course outside class:</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} sm={6}>
                    {['radio'].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="0-2.0" name="Hours" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="2.1-4.0" name="Hours" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="4.1-8.0" name="Hours" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="8.1-12.0" name="Hours" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="12.0+" name="Hours" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="N/A" name="Hours" type={type} id={`inline-${type}-1`} />
                      </div>
                    ))}
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={6}>
                    <Form.Label>Expected grade in the course:</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} sm={6}>
                    {['radio'].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="A" name="Expected grade" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="B" name="Expected grade" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="B+" name="Expected grade" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="B/B-" name="Expected grade" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="C+ or below" name="Expected grade" type={type} id={`inline-${type}-1`} />
                      </div>
                    ))}
                  </Form.Group>
                </Form.Row>
              </div>

              <h3>Clarity of Explanation</h3>

              <Form.Row>
                <Form.Group as={Col} sm={12}>
                  <Form.Label>1. The teacher presented in a clear manner.</Form.Label>
                  <Options />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} sm={12}>
                  <Form.Label>2. The teacher used relevant examples to assist my learning.</Form.Label>
                  <Options />
                </Form.Group>
              </Form.Row>
              <div className="Row1">
                <h3>Enthusiasm and Communication</h3>

                <Form.Row>
                  <Form.Group as={Col} sm={12}>
                    <Form.Label>3. The teacher was enthusiastic about teaching.</Form.Label>
                    <Options />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={12}>
                    <Form.Label>4. The teacher encouraged active participation in class.</Form.Label>
                    <Options />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={12}>
                    <Form.Label>5. There was effective communication between teacher and students.</Form.Label>
                    <Options />
                  </Form.Group>
                </Form.Row>
              </div>
              <h3>Motivation</h3>

              <Form.Row>
                <Form.Group as={Col} sm={12}>
                  <Form.Label>6. The course was interesting.</Form.Label>
                  <Options />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} sm={12}>
                  <Form.Label>7. The course was stimulating.</Form.Label>
                  <Options />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} sm={12}>
                  <Form.Label>8. The course enhanced my knowledge in this subject.</Form.Label>
                  <Options />
                </Form.Group>
              </Form.Row>

              <div className="Row1">
                <h3>Learning Outcomes and Organisation</h3>
                <Form.Row>
                  <Form.Group as={Col} sm={12}>
                    <Form.Label>9. The course was well-organised.</Form.Label>
                    <Options />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={12}>
                    <Form.Label>10. Learning outcomes of the course were clear.</Form.Label>
                    <Options />
                  </Form.Group>
                </Form.Row>
              </div>
              <h3>Assessment</h3>

              <Form.Row>
                <Form.Group as={Col} sm={12}>
                  <Form.Label>11. Assessment methods were appropriate.</Form.Label>
                  <Options />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} sm={12}>
                  <Form.Label>12. The amount of workload required was appropriate.</Form.Label>
                  <Options />
                </Form.Group>
              </Form.Row>

              <Form.Label>If your answer is Strongly Disargee, Disargee or Slightly Disagree to Q12:</Form.Label>

              <Form.Row>
                <Form.Group as={Col} sm={6}>
                  <Form.Label>I found the amount of work required for assessment:</Form.Label>
                </Form.Group>
                <Form.Group as={Col} sm={6}>
                  {['radio'].map(type => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check inline label="Too Much" name="12.1" type={type} id={`inline-${type}-1`} />
                      <Form.Check inline label="Too Little" name="12.1" type={type} id={`inline-${type}-1`} />
                    </div>
                  ))}
                </Form.Group>
              </Form.Row>
              <div className="Row1">
                <h3>Course Difficulty</h3>

                <Form.Row>
                  <Form.Group as={Col} sm={12}>
                    <Form.Label>13. Recommended readings were useful.</Form.Label>
                    <Options />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={12}>
                    <Form.Label>14. Course content was of appropriate difficulty.</Form.Label>
                    <Options />
                  </Form.Group>
                </Form.Row>

                <Form.Label>If your answer is Strongly Disargee, Disargee or Slightly Disagree to Q14:</Form.Label>

                <Form.Row>
                  <Form.Group as={Col} sm={3}>
                    <Form.Label>I found the course content:</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} sm={9}>
                    {['radio'].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Too Difficult" name="14.1" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="Too Simple" name="14.1" type={type} id={`inline-${type}-1`} />
                      </div>
                    ))}
                  </Form.Group>
                </Form.Row>
              </div>

              <h3>Learning Support</h3>

              <Form.Row>
                <Form.Group as={Col} sm={12}>
                  <Form.Label>15. The course was well supported by library resources.</Form.Label>
                  <Options />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} sm={12}>
                  <Form.Label>16. The course was well supported by IT resources.</Form.Label>
                  <Options />
                </Form.Group>
              </Form.Row>
              <div className="Row1">
                <h3>Overall Opinion</h3>

                <Form.Row>
                  <Form.Group as={Col} sm={12}>
                    <Form.Label>17. Overall, I am satisfied with the course.</Form.Label>
                    <Options />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={12}>
                    <Form.Label>18. Overall, I am satisfied with the teacher's performance.</Form.Label>
                    <Options />
                  </Form.Group>
                </Form.Row>
              </div>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>a. Comments for the teacher:</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>b. Comment for the course:</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} sm={1}>
                  <Form.Label>token:</Form.Label>
                </Form.Group>
                <Form.Group as={Col} sm={3}>
                  <Form.Control as="input" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} sm={1}>
                  <Form.Label>key:</Form.Label>
                </Form.Group>
                <Form.Group as={Col} sm={3}>
                  <Form.Control as="input" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Col>
                  <div className="text-center">
                    <Button type="submit">Submit</Button>
                  </div>
                  <br></br>
                </Col>
              </Form.Row>
            </Form>
          </Col>

          <Col xs={1} sm={3}></Col>
        </Row>
      </Container>
    );
  }
}

export default Evaluation;