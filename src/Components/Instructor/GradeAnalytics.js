import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Dropdown, Table, Card } from 'react-bootstrap';

function GradeAnalytics() {
  // Mock data for student grades (you can replace it with your data)
  const [studentGrades, setStudentGrades] = useState([
    { student: 'Student 1', assignment: 'Assignment 1', grade: 85 },
    { student: 'Student 1', assignment: 'Assignment 2', grade: 92 },
    { student: 'Student 2', assignment: 'Assignment 1', grade: 78 },
    { student: 'Student 2', assignment: 'Assignment 2', grade: 88 },
    // Add more grades as needed
  ]);

  // State to store selected student or class-wide analytics
  const [selectedStudent, setSelectedStudent] = useState(null);

  // State to store analytics data for the selected student or class
  const [analyticsData, setAnalyticsData] = useState([]);

  // Function to calculate the total grade for a student
  const calculateTotalGrade = (student) => {
    const studentGradesFiltered = studentGrades.filter(
      (grade) => grade.student === student
    );
    const totalGrade = studentGradesFiltered.reduce(
      (total, grade) => total + grade.grade,
      0
    );
    return totalGrade / studentGradesFiltered.length;
  };

  // Function to calculate analytics for the selected student or entire class
  const calculateAnalytics = () => {
    if (selectedStudent) {
      // Calculate analytics for the selected student
      const totalGrade = calculateTotalGrade(selectedStudent);
      setAnalyticsData([{ label: 'Average Grade', value: totalGrade.toFixed(2) }]);
    } else {
      // Calculate class-wide analytics
      const averageGrade = studentGrades.reduce(
        (total, grade) => total + grade.grade,
        0
      );
      const totalAssignments = studentGrades.length;
      const average = (averageGrade / totalAssignments).toFixed(2);
      setAnalyticsData([
        { label: 'Average Grade', value: average },
        { label: 'Total Assignments', value: totalAssignments },
      ]);
    }
  };

  // Load analytics data when the component mounts
  useEffect(() => {
    calculateAnalytics();
  }, [selectedStudent]);

  return (
    <Container>
        <Card>
            <Card.Header> <Row>
        <Col>
          <h4>Grade Analytics and Progress Reports</h4>
        </Col>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-student">
              Select Student
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {[
                'Student 1',
                'Student 2',
                // Add more student names as needed
              ].map((student) => (
                <Dropdown.Item
                  key={student}
                  onClick={() => setSelectedStudent(student)}
                >
                  {student}
                </Dropdown.Item>
              ))}
              <Dropdown.Item onClick={() => setSelectedStudent(null)}>
                Entire Class
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
   
      </Card.Header>
      <Card.Body>

      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Label</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {analyticsData.map((data, index) => (
                <tr key={index}>
                  <td>{data.label}</td>
                  <td>{data.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      </Card.Body>
        </Card>
     
    
    
    </Container>
  );
}

export default GradeAnalytics;
