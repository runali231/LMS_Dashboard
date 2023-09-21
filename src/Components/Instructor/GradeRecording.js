import React, { useState } from 'react';
import { Container, Row, Col, Table, Form, Button, Card } from 'react-bootstrap';

function GradeRecording() {
    // Define a state to store grades for each student and assignment
    const [gradeData, setGradeData] = useState([
        { student: 'Student 1', assignment: 'Assignment 1', grade: '' },
        { student: 'Student 1', assignment: 'Assignment 2', grade: '' },
        { student: 'Student 2', assignment: 'Assignment 1', grade: '' },
        { student: 'Student 2', assignment: 'Assignment 2', grade: '' },
        // Add more assignments and students as needed
    ]);

    // Function to handle grade input changes
    const handleGradeChange = (student, assignment, value) => {
        // Update the gradeData state with the new grade value
        const updatedGradeData = gradeData.map((data) => {
            if (data.student === student && data.assignment === assignment) {
                return { ...data, grade: value };
            }
            return data;
        });
        setGradeData(updatedGradeData);
    };

    // Function to calculate the total grade for a student
    const calculateTotalGrade = (student) => {
        const studentGrades = gradeData.filter((data) => data.student === student);
        const totalGrade = studentGrades.reduce((total, data) => {
            return total + (parseFloat(data.grade) || 0);
        }, 0);
        return totalGrade.toFixed(2); // Adjust precision as needed
    };

    return (
        <Container className='container-fluid'>
            <Card>
                <Card.Header>
                    <h4>Grade Recording</h4>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Student</th>
                                        <th>Assignment</th>
                                        <th>Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gradeData.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.student}</td>
                                            <td>{data.assignment}</td>
                                            <td>
                                                <Form.Control
                                                    type="number"
                                                    value={data.grade}
                                                    onChange={(e) =>
                                                        handleGradeChange(data.student, data.assignment, e.target.value)
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card>
                <Card.Header>
                    <h4>Student Total Grades</h4>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Student</th>
                                        <th>Total Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Calculate and display total grades for each student */}
                                    {[...new Set(gradeData.map((data) => data.student))].map((student, index) => (
                                        <tr key={index}>
                                            <td>{student}</td>
                                            <td>{calculateTotalGrade(student)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>

                    <Row>
                        <Col>
                            <Button variant="primary">Save Grades</Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>


        </Container>
    );
}

export default GradeRecording;
