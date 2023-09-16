import { Delete, Edit } from '@material-ui/icons';
import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form, Table , Card} from 'react-bootstrap';

function FeedbackInterface() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleFeedbackClick = (student) => {
    setSelectedStudent(student);
    setShowFeedbackModal(true);
  };

  const handleFeedbackSave = () => {
    // Perform feedback saving logic here
    // You can update the student's feedback
    // For simplicity, we'll just update the feedback
    setSelectedStudent({ ...selectedStudent, feedback });
    // Close the modal after saving the feedback
    setShowFeedbackModal(false);
  };

  return (
    <Container>
        <Card>
            <Card.Header>
            <h4>Feedback on Student Performance</h4>
            </Card.Header>
            <Card.Body>
            <Row>
        <Col>
          
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Feedback</th>
                <th>Actions</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace with a loop through your students */}
              <tr key={1}>
                <td>Student 1</td>
                <td>{selectedStudent === null ? 'No feedback' : selectedStudent.feedback}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleFeedbackClick({ id: 1, feedback: selectedStudent?.feedback })}
                  >
                    Provide Feedback
                  </Button>
                </td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleFeedbackClick({ id: 1, feedback: selectedStudent?.feedback })}
                  >
                   {/* Edit */}
                   <Edit/>
                  </Button>
                </td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleFeedbackClick({ id: 1, feedback: selectedStudent?.feedback })}
                  >
                    {/* Delete */}
                    <Delete/>
                  </Button>
                </td>
              </tr>
              <tr key={1}>
                <td>Student 2</td>
                <td>{selectedStudent === null ? 'No feedback' : selectedStudent.feedback}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleFeedbackClick({ id: 1, feedback: selectedStudent?.feedback })}
                  >
                    Provide Feedback
                  </Button>
                </td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleFeedbackClick({ id: 1, feedback: selectedStudent?.feedback })}
                  >
                   {/* Edit */}
                   <Edit/>
                  </Button>
                </td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleFeedbackClick({ id: 1, feedback: selectedStudent?.feedback })}
                  >
                    {/* Delete */}
                    <Delete/>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
            </Card.Body>
        </Card>
    

      <Modal show={showFeedbackModal} onHide={() => setShowFeedbackModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Provide Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="feedbackForm">
              <Form.Label>Feedback</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowFeedbackModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFeedbackSave}>
            Save Feedback
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default FeedbackInterface;
