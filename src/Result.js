import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import './App.css';

class Score extends React.Component {
    render() {
        return (
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={this.props.eventKey}>
                        {this.props.question}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={this.props.eventKey}>
                    <Card.Body>
                        {this.props.value}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

class Result extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            courseTitle: "XXX",
            searchSuccess: false,
            neverSearch: true,
            q1: 0,
            q2: 0,
            q3: 0,
            q4: 0,
            q5: 0,
            q6: 0,
            q7: 0,
            q8: 0,
            q9: 0,
            q10: 0,
            q11: 0,
            q12: 0,
            q12s: 0,
            q13: 0,
            q14: 0,
            q14s: 0,
            q15: 0,
            q16: 0,
            q17: 0,
            q18: 0,
            a: "",
            b: ""
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.courseId_input = React.createRef();
    }
    handleSearch = (e) => {
        var searchID = this.courseId_input.current.value;
        var found = true;

        this.setState({
            courseTitle: searchID
        });
        //leave for search code

        //end of search code

        this.setState({
            searchSuccess: found
        });
        this.setState({
            neverSearch: false
        });
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <h2 className="text-secondary pt-5">Course Evaluation Results</h2>
                <br></br>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="CourseID"
                        aria-label="CourseID"
                        aria-describedby="basic-addon2"
                        ref={this.courseId_input}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={this.handleSearch}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>

                {
                    this.state.searchSuccess && <div>
                        <h3 className="pt-2">Results of {this.state.courseTitle}</h3>
                        <Accordion className="pt-4 text-center">
                            <Score value={this.state.q1} eventKey="1" question="1. The teacher presented in a clear manner." />
                            <Score value={this.state.q2} eventKey="2" question="2. The teacher used relevant examples to assist my learning." />
                            <Score value={this.state.q3} eventKey="3" question="3. The teacher was enthusiastic about teaching." />
                            <Score value={this.state.q4} eventKey="4" question="4. The teacher encouraged active participation in class." />
                            <Score value={this.state.q5} eventKey="5" question="5. There was effective communication between teacher and students." />
                            <Score value={this.state.q6} eventKey="6" question="6. The course was interesting." />
                            <Score value={this.state.q7} eventKey="7" question="7. The course was stimulating." />
                            <Score value={this.state.q8} eventKey="8" question="8. The course enhanced my knowledge in this subject." />
                            <Score value={this.state.q9} eventKey="9" question="9. The course was well-organised." />
                            <Score value={this.state.q10} eventKey="10" question="10. Learning outcomes of the course were clear." />
                            <Score value={this.state.q11} eventKey="11" question="11. Assessment methods were appropriate." />
                            <Score value={this.state.q12} eventKey="12" question="12. The amount of workload required was appropriate." />
                            <Score value={this.state.q12s} eventKey="13" question="I found the amount of work required for assessment:" />
                            <Score value={this.state.q13} eventKey="14" question="13. Recommended readings were useful." />
                            <Score value={this.state.q14} eventKey="15" question="14. Course content was of appropriate difficulty." />
                            <Score value={this.state.q14s} eventKey="16" question="I found the course content:" />
                            <Score value={this.state.q15} eventKey="17" question="15. The course was well supported by library resources." />
                            <Score value={this.state.q16} eventKey="18" question="16. The course was well supported by IT resources." />
                            <Score value={this.state.q17} eventKey="19" question="17. Overall, I am satisfied with the course." />
                            <Score value={this.state.q18} eventKey="20" question="18. Overall, I am satisfied with the teacher's performance." />
                            <Score value={this.state.a} eventKey="21" question="a. Comments for the teacher:" />
                            <Score value={this.state.b} eventKey="22" question="b. Comment for the course:" />
                        </Accordion>
                    </div>
                }
                {
                    !this.state.searchSuccess && !this.state.neverSearch && <div>
                        <h3 className="pt-2">Results of {this.state.courseTitle}</h3>
                        <div className="pt-4 text-center">
                            No related results
                        </div>
                    </div>
                }

            </div>
        );
    }
}

export default Result;
