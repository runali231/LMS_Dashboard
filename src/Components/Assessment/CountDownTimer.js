import { Delete, Edit } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { Button, Table, Modal, Form} from 'react-bootstrap';


const CountDownTimer=()=>{
  const [countdown, setCountdown] = useState(0);
  const [countdownRunning, setCountdownRunning] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [activeCountdowns, setActiveCountdowns] = useState([]);
  const [showModal, setShowModal]=useState(false)

  const handleCountdownDurationChange = (e) => {
    setCountdown(e.target.value);
  };

  const handleSetCountdown = () => {
    setCountdownRunning(true);
    const countdownInterval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(countdownInterval);
        setCountdownRunning(false);
      }
    }, 1000);

    // Store the active countdown with its associated quiz/exam title
    setActiveCountdowns([
      ...activeCountdowns,
      {
        quizTitle: selectedQuiz,
        duration: countdown,
      },
    ]);
  };

  useEffect(() => {
    if (!countdownRunning) {
      setCountdown(0);
    }
  }, [countdownRunning]);

  return (
    <div className="container-fluid mt-5">
      <div className="row mt-5">
        <div className="col-md-6">
          <div className='card'>
            <div className='card-header'>
            <h4>Countdown Timer</h4>
            </div>
            <div className='card-body'>
            <div className="mb-3">
            <select
              className="form-control"
              onChange={(e) => setSelectedQuiz(e.target.value)}
              value={selectedQuiz}
            >
              <option value="">Select Quiz/Exam</option>
              <option value="Quiz1">Quiz 1</option>
              <option value="Quiz2">Quiz 2</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={countdown}
              onChange={handleCountdownDurationChange}
              className="form-control"
              placeholder="Countdown Duration (seconds)"
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={handleSetCountdown}
            disabled={countdownRunning || !selectedQuiz || countdown <= 0}
          >
            Set Countdown
          </button>
            </div>
          </div>
          
       
        </div>
        <div className="col-md-6">
          <div className='card'>
            <div className='card-header'>
            <h4>Countdown Display</h4>
            </div>
            <div className='card-body'>
            <p>Countdown: {countdown} seconds</p>
            </div>
          </div>
         
          
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <div className='card'>
            <div className='card-header'>
            <h4>View Countdowns</h4>
            </div>
            <div className='card-body'>
            {activeCountdowns.length === 0 ? (
            <p>No active countdowns.</p>
          ) : (
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>Quiz</th>              
                <th>Countdown</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
             {activeCountdowns.map((countdown, index) => (
                <tr key={index}>
                  <td>{countdown.quizTitle}</td>
                
                  <td>{countdown.duration} seconds</td>
                  <td> <Button variant="primary" onClick={()=>setShowModal(true)}>
                <Edit/>
              </Button>
              &nbsp;
              <Button variant="danger"   >
                <Delete/>
              </Button>
              </td>
                </tr>
              ))}
              
            </tbody>
          </Table>
          )}
            </div>
          </div>
         
       
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Grade Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="mb-3">
            <select
              className="form-control"
              onChange={(e) => setSelectedQuiz(e.target.value)}
              value={selectedQuiz}
            >
              <option value="">Select Quiz/Exam</option>
              <option value="Quiz1">Quiz 1</option>
              <option value="Quiz2">Quiz 2</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={countdown}
              onChange={handleCountdownDurationChange}
              className="form-control"
              placeholder="Countdown Duration (seconds)"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" >
            Save Grade
          </Button>
        </Modal.Footer>
      </Modal>
     
    </div>
  );
}

export default CountDownTimer;
