import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Assessment() {
  const [assignments, setAssignments] = useState([]);
  const [assignment, setAssignment] = useState({
    title: '',
    description: '',
    dueDate: '',
    criteria: '',
  });

  const [assessmentCriteria, setAssessmentCriteria] = useState('');
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [assessmentResults, setAssessmentResults] = useState([]);
  const [countdown, setCountdown] = useState(0);
  const [countdownRunning, setCountdownRunning] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [activeCountdowns, setActiveCountdowns] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAssignment({ ...assignment, [name]: value });
  };

  const handleCreateAssignment = () => {
    setAssignments([...assignments, assignment]);
    setAssignment({
      title: '',
      description: '',
      dueDate: '',
      criteria: '',
    });
  };

  const handleSetAssessmentCriteria = () => {
    setAssessmentCriteria(assignment.criteria);
  };

  const handleViewAssessmentResults = (index) => {
    setSelectedAssignment(assignments[index]);
    // Assuming assessmentResults is an array of results for each assignment
    // Replace this with your actual data retrieval logic
    setAssessmentResults([
      // Sample assessment results data
      { student: 'Student 1', score: 90 },
      { student: 'Student 2', score: 85 },
      { student: 'Student 3', score: 95 },
    ]);
  };

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
    <div className="container mt-5">
      <h1>Assignment Management</h1>

      <div className="row">
        <div className="col-md-6">
          <h2>Create Assignment</h2>
          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={assignment.title}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="mb-3">
            <textarea
              name="description"
              value={assignment.description}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="mb-3">
            <input
              type="date"
              name="dueDate"
              value={assignment.dueDate}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="criteria"
              value={assignment.criteria}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Assessment Criteria"
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={handleCreateAssignment}
          >
            Create Assignment
          </button>
          <button
            className="btn btn-secondary"
            onClick={handleSetAssessmentCriteria}
          >
            Set Assessment Criteria
          </button>
        </div>
        <div className="col-md-6">
          <h2>Assignments</h2>
          <ul className="list-group">
            {assignments.map((assign, index) => (
              <li key={index} className="list-group-item">
                <h3>{assign.title}</h3>
                <p>{assign.description}</p>
                <p>Due Date: {assign.dueDate}</p>
                <p>Criteria: {assign.criteria}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleViewAssessmentResults(index)}
                >
                  View Assessment Results
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Assessment Criteria</h2>
          <p>{assessmentCriteria}</p>
        </div>
        <div className="col-md-6">
          <h2>Assessment Results</h2>
          {selectedAssignment && (
            <div>
              <h3>{selectedAssignment.title} Results</h3>
              <ul>
                {assessmentResults.map((result, index) => (
                  <li key={index}>
                    {result.student}: {result.score}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Countdown Timer</h2>
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
        <div className="col-md-6">
          <h2>Countdown Display</h2>
          <p>Countdown: {countdown} seconds</p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h2>View Countdowns</h2>
          {activeCountdowns.length === 0 ? (
            <p>No active countdowns.</p>
          ) : (
            <ul className="list-group">
              {activeCountdowns.map((countdown, index) => (
                <li key={index} className="list-group-item">
                  <strong>Quiz/Exam:</strong> {countdown.quizTitle}
                  <br />
                  <strong>Countdown:</strong> {countdown.duration} seconds
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Assessment;
