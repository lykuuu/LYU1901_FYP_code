import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import './App.css';
import { decrypt } from './function/Elgamal.js'


let Information = [
    { "faculty": [0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { "level": [0, 0, 0] },
    { "studyYear": [0, 0, 0, 0, 0, 0] },
    { "courseProperty": [0, 0, 0, 0, 0] },
    { "sex": [0, 0] },
    { "priLang": [0, 0, 0, 0] },
    { "priLangTime": [0, 0, 0, 0, 0] },
    { "suppLang": [0, 0, 0, 0, 0] },
    { "hours": [0, 0, 0, 0, 0, 0] },
    { "expGrade": [0, 0, 0, 0, 0, 0] },
];

let question = [
    { q: "1. The teacher presented in a clear manner.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "2. The teacher used relevant examples to assist my learning.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "3. The teacher was enthusiastic about teaching.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "4. The teacher encouraged active participation in class.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "5. There was effective communication between teacher and students.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "6. The course was interesting.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "7. The course was stimulating.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "8. The course enhanced my knowledge in this subject.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "9. The course was well-organised.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "10. Learning outcomes of the course were clear.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "11. Assessment methods were appropriate.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "12. The amount of workload required was appropriate.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "13. Recommended readings were useful.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "14. Course content was of appropriate difficulty.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "15. The course was well supported by library resources.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "16. The course was well supported by IT resources.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "17. Overall, I am satisfied with the course.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
    { q: "18. Overall, I am satisfied with the teacher's performance.", StD: 0, D: 0, SlD: 0, SlA: 0, A: 0, StA: 0, NA: 0, Average: 0 },
];

let Complain1 = [
    { q: "I found the amount of work required for assessment:", M: 0, L: 0 }
];

let Complain2 = [
    { q: "I found the course content:", D: 0, S: 0 }
];

const InformationH = [
    ["My faculty", "ART", "BAS", "EDU", "ERG", "LAW", "MED", "SCI", "SSC", "OTHER"],
    ["Level", "Undergraduate", "Postgraduate", "Other"],
    ["Year of study", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year >= 6"],
    ["This course is", "Major Required", "Major Elective", "Minor", "Elective", "U Core", "N/A"],
    ["Sex", "Female", "Male"],
    ["Primary spoken language used in class", "English", "Cantonese", "Putonghua", "Others"],
    ["Fraction of class time the primary language was used", "51-60%", "61-70%", "71-80%", "81-90%", "91-100%"],
    ["Supplementary language(s)", "English", "Cantonese", "Putonghua", "Others", "N/A"],
    ["Hours per week spent on this course outside class", "0-2.0", "2.1-4.0", "4.1-8.0", "8.1-12.0", "12.0+", "N/A"],
    ["Expected grade", "A", "A-", "B+", "B/B-", "C+ or below", "N/A"]
]
let CourseID = "CSCI0000";
let id_generator = 0;

class Result extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            privateKey: "XXX",
            searchSuccess: false,
            neverSearch: true,
            updated: false
            /* ,
             */
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.privateKey_input = React.createRef();
    }
    handleSearch = (e) => {
        var searchID = this.privateKey_input.current.value;
        var found = true;
        var courseID = "";
        while (courseID === "") {
            courseID = prompt("Please enter course ID.");
        }
        //replace with real search code
        if (searchID !== "" && (courseID !== null || courseID !== "")) {
            this.setState({
                privateKey: searchID
            });
            CourseID = courseID;
            fetch(`http://3.113.9.168:8080/api/course/${courseID}`).then(response => {
                if (response.status !== 200) {
                    //TODO: change it to bad response reaction
                    alert("Please check your course id")
                    this.setState({
                        updated: false
                    })
                }
                else {
                    response.json().then(json => {
                        alert("loading")
                        let { result, courseInfo } = json
                        
                        for (const key in result) {
                            result[key] = result[key].map((v, i) => {
                                return decrypt(v, courseInfo.p, courseInfo.g, this.state.privateKey)
                            })
                        }

                        //TOD: link result to display,result is the already decrypted format
                        Information[0].faculty = result.faculty;
                        Information[1].level = result.level;
                        Information[2].studyYear = result.studyYear;
                        Information[3].courseProperty = result.courseProperty;
                        Information[4].sex = result.sex;
                        Information[5].priLang = result.priLang;
                        Information[6].priLangTime = result.priLangTime;
                        Information[7].suppLang = result.suppLang;
                        Information[8].hours = result.hours;
                        Information[9].expGrade = result.expGrade;

                        var Rcounter = 0;
                        var tmp = [];
                        var stage = 0;
                        for (const key in result) {
                            if (Rcounter > 9) {
                                tmp.push(result[key]);
                            }
                            Rcounter += 1;
                        }
                        for (var i = 0; i < 20; i++) {
                            if (i === 12 || i === 15) {
                                stage += 1;
                                if (i === 12) {
                                    Complain1[0].M = tmp[i][0];
                                    Complain1[0].L = tmp[i][1];
                                }
                                if (i === 15) {
                                    Complain2[0].D = tmp[i][0];
                                    Complain2[0].S = tmp[i][1];
                                }
                                continue;
                            }
                            question[i - stage].StD = tmp[i][0];
                            question[i - stage].D = tmp[i][1];
                            question[i - stage].SlD = tmp[i][2];
                            question[i - stage].SlA = tmp[i][3];
                            question[i - stage].A = tmp[i][4];
                            question[i - stage].StA = tmp[i][5];
                            question[i - stage].NA = tmp[i][6];
                            var total = parseInt(tmp[i][0]) + parseInt(tmp[i][1]) + parseInt(tmp[i][2]) + parseInt(tmp[i][3]) + parseInt(tmp[i][4]) + parseInt(tmp[i][5]) + parseInt(tmp[i][6]);
                            var Average = (1 * parseInt(tmp[i][0]) + 2 * parseInt(tmp[i][1]) + 3 * parseInt(tmp[i][2]) + 4 * parseInt(tmp[i][3]) + 5 * parseInt(tmp[i][4]) + 6 * parseInt(tmp[i][5]) + 0 * parseInt(tmp[i][6])) / total;
                            if (Math.floor(Average) === 0)
                                question[i - stage].Average = "N/A";
                            if (Math.floor(Average) === 1)
                                question[i - stage].Average = "Strongly Disagree";
                            if (Math.floor(Average) === 2)
                                question[i - stage].Average = "Disagree"
                            if (Math.floor(Average) === 3)
                                question[i - stage].Average = "Slightly Disagree"
                            if (Math.floor(Average) === 4)
                                question[i - stage].Average = "Slightly Agree"
                            if (Math.floor(Average) === 5)
                                question[i - stage].Average = "Agree"
                            if (Math.floor(Average) === 6)
                                question[i - stage].Average = "Strongly Agree"

                        }
                        console.log(tmp);
                        console.log(question)
                        console.log(result)
                        this.setState({
                            updated: true,
                            searchSuccess:found
                        })

                    })
                }

            })

        } else {
            this.setState({
                searchSuccess: false
            });
        }
        this.setState({
            neverSearch: false
        });
        e.preventDefault();
    }
    renderInformation(Head, data) {
        const row1 = [];
        row1.push(Head.map(function (item, index, array) {
            id_generator += 1;
            var id = id_generator + "";
            return <React.Fragment key={id}><th>{item}</th></React.Fragment>;
        }));
        //////////////////////////////////////////////////////////////////////
        id_generator += 1;
        var id = id_generator + "";
        const row = [];
        row.push(<td key={id}></td>);
        const q = Object.keys(data);
        row.push(data[q[0]].map(function (item, index, array) {
            id_generator += 1;
            var id = id_generator + "";
            return <React.Fragment key={id}><td>{item}</td></React.Fragment>;
        }));
        return (<React.Fragment><thead><tr>{row1}</tr></thead><tbody><tr>{row}</tr></tbody></React.Fragment>);
    }
    renderInformation2() {
        const rows = [];
        var count = 0;
        while (InformationH[count] && Information[count]) {
            id_generator += 1;
            var id = id_generator + "";
            rows.push(<Table striped bordered hover size="sm" key={id}>{this.renderInformation(InformationH[count], Information[count])}</Table>);
            count += 1;
        }
        return (<div>{rows}</div>);
    }
    renderTableData1() {
        return question.map((question, index) => {
            const { q, StD, D, SlD, SlA, A, StA, NA, Average } = question;
            return (
                <tr key={q}>
                    <td>{q}</td>
                    <td>{StD}</td>
                    <td>{D}</td>
                    <td>{SlD}</td>
                    <td>{SlA}</td>
                    <td>{A}</td>
                    <td>{StA}</td>
                    <td>{NA}</td>
                    <td>{Average}</td>
                </tr>
            );
        });
    }
    renderComplain1() {
        return Complain1.map((question, index) => {
            const { q, M, L } = question;
            return (
                <tr key={q}>
                    <td>{q}</td>
                    <td>{M}</td>
                    <td>{L}</td>
                </tr>
            );
        });
    }
    renderComplain2() {
        return Complain2.map((question, index) => {
            const { q, D, S } = question;
            return (
                <tr key={q}>
                    <td>{q}</td>
                    <td>{D}</td>
                    <td>{S}</td>
                </tr>
            );
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-secondary pt-5">Course Evaluation Results</h2>
                <br></br>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Please enter private key to see the corresponding result."
                        aria-label="private key"
                        aria-describedby="basic-addon2"
                        ref={this.privateKey_input}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={this.handleSearch}>Sumbit</Button>
                    </InputGroup.Append>
                </InputGroup>

                {
                    this.state.searchSuccess && this.state.updated && <div>
                        <h3 className="pt-5">Results of {CourseID}</h3>

                        <h4 className="pt-5 pb-3 text-left"><b>Student Information</b></h4>
                        {this.renderInformation2()}
                        <h4 className="pt-5 pb-3 text-left"><b>Student Response</b></h4>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Strongly Disagree</th>
                                    <th>Disagree</th>
                                    <th>Slightly Disagree</th>
                                    <th>Slightly Agree</th>
                                    <th>Agree</th>
                                    <th>Strongly Agree</th>
                                    <th>N/A</th>
                                    <th>Average</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTableData1()}
                            </tbody>
                        </Table>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Complain 1</th>
                                    <th>Too Much</th>
                                    <th>Too Little</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderComplain1()}
                            </tbody>
                        </Table>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Complain 2</th>
                                    <th>Too Difficult</th>
                                    <th>Too Simple</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderComplain2()}
                            </tbody>
                        </Table>

                    </div>
                }
                {
                    !this.state.searchSuccess && !this.state.neverSearch && !this.state.updated && <div>
                        <h3 className="pt-2">Results of {CourseID}</h3>
                    </div>
                }

            </div>
        );
    }
}

export default Result;