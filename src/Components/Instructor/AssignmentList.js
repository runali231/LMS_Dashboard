import React, { useState } from 'react';
import { Container, Row, Col, Button, Table, Modal, Form , Card} from 'react-bootstrap';

function GradingAndAssessment() {
  const [assignments, setAssignments] = useState([
    { id: 1, name: 'Assignment 1', dueDate: '2023-07-15', status: 'Not Graded' },
    { id: 2, name: 'Assignment 2', dueDate: '2023-07-15', status: 'Not Graded' },
    { id: 3, name: 'Assignment 3', dueDate: '2023-07-15', status: 'Not Graded' },
    // Add more assignments
  ]);

  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [grade, setGrade] = useState('');
  const [showGradeModal, setShowGradeModal] = useState(false);

  const handleGradeClick = (assignment) => {
    setSelectedAssignment(assignment);
    setShowGradeModal(true);
  };

  const handleGradeSave = () => {
    // Perform grade saving logic here
    // You can update the assignment's status and record the grade
    // For simplicity, we'll just update the status
    console.log("hii")
    const updatedAssignments = assignments.map((assignment) =>
      assignment.id === selectedAssignment.id
        ? { ...assignment, status: 'Graded', grade }
        : assignment
    );
    console.log("28",updatedAssignments)
    setAssignments(updatedAssignments);
    // Close the modal after saving the grade
    setShowGradeModal(false);
  };

  return (
    <Container>
        <Card>
            <Card.Header>
            <h4>Grading and Assessment</h4>
            </Card.Header>
            <Card.Body>
            <Row>
        <Col>
          
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Assignment Name</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td>{assignment.name}</td>
                  <td>{assignment.dueDate}</td>
                  <td>{assignment.status}</td>
                  <td>
                    {assignment.status === 'Not Graded' && (
                      <Button
                        variant="primary"
                        onClick={() => handleGradeClick(assignment)}
                      >
                        Grade
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

            </Card.Body>
        </Card>
    
     <Modal show={showGradeModal} onHide={() => setShowGradeModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Grade Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="gradeForm">
              <Form.Label>Grade</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowGradeModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleGradeSave}>
            Save Grade
          </Button>
        </Modal.Footer>
      </Modal>
    
    </Container>
  );
}

export default GradingAndAssessment;
