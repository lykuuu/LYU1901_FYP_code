import React from 'react';
import Container from '../node_modules/react-bootstrap/Container'
import Row from '../node_modules/react-bootstrap/Row'
import Col from '../node_modules/react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import './App.css';

class Result extends React.Component {

    render() {
        return (
            <Container fluid className="background">

                <Row className="py-5 text-primary">
                    <Col>
                        <h1>Online Course Evaluation</h1>
                    </Col>
                </Row>
                <Row className="py-2 text-primary">
                    <Col xs={1} sm={3}></Col>

                    <Col xs={10} sm={6} className="id_select text-left">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="CourseID"
                                aria-label="CourseID"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                    <Col xs={1} sm={3}></Col>
                </Row>
                <Row className="py-1">
                    <Col>
                        <h3>Results of Course_XXX</h3>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col xs={1} sm={3}></Col>

                    <Col xs={10} sm={6} className="id_select text-left">

                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        1. The teacher presented in a clear manner.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        2. The teacher used relevant examples to assist my learning.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                        3. The teacher was enthusiastic about teaching.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                        4. The teacher encouraged active participation in class.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                        5. There was effective communication between teacher and students.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="6">
                                        6. The course was interesting.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="6">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="7">
                                        7. The course was stimulating.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="7">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="8">
                                        8. The course enhanced my knowledge in this subject.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="8">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="9">
                                        9. The course was well-organised.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="9">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="10">
                                        10. Learning outcomes of the course were clear.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="10">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="11">
                                        11. Assessment methods were appropriate.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="11">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="12">
                                        12. The amount of workload required was appropriate.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="12">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="13">
                                        13. Recommended readings were useful.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="13">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="14">
                                        14. Course content was of appropriate difficulty.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="14">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="15">
                                        15. The course was well supported by library resources.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="15">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="16">
                                        16. The course was well supported by IT resources.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="16">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="17">
                                        17. Overall, I am satisfied with the course.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="17">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="18">
                                        18. Overall, I am satisfied with the teacher's performance.
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="18">
                                    <Card.Body>4/6</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="19">
                                        a. Comments for the teacher:
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="19">
                                    <Card.Body></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="20">
                                        b. Comment for the course:
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="20">
                                    <Card.Body></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>

                    <Col xs={1} sm={3}></Col>
                </Row>
            </Container>
        );
    }
}

export default Result;