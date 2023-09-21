
import React, { useState } from 'react';
import { addSession } from './AddSessionApi'; // Import API function
import { getToken } from '../../util.token';
import { useNavigate } from 'react-router-dom';

const Session = () => {
  const [sName, setSName] = useState('');
  const [sDescription, setSDescription] = useState('');
  const [sLink, setSLink] = useState('');
  const [sDuration, setSDuration] = useState('');

  const navigate = useNavigate();
  const courseId = localStorage.getItem("course_id");

  
  const addSessionForm = () => {
    const token = getToken()
    const userId = '820ef9fe-43c1-4a57-a279-d3238a7da437';

    const sessionData = {
      sessionNo: '2',
      userId: userId,
      courseId: courseId,
      sessionName: sName,
      sessionDescription: sDescription,
      sessionLink: sLink,
      duration: sDuration,
    };

    addSession(sessionData, token)
      .then((response) => {
        console.log(response.data.data);
        alert("Session added Successfully!");
        navigate("/courseDetails")
        // You can perform actions based on the response here
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <section className="container-fluid mt-5">
      
      
    <div className="card shadow p-2 m-3 mt-5">
      <div className='card-header' style={{"backgroundColor":"white"}}>
      <h3 className="mx-4">Add Session</h3>
      </div>
      <div className='card-body'>
      <div className="container-fluid py-3">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-5 mt-2 mt-md-0">
                  <label>Session Name</label>
                </div>
                <div className="col-lg-6 mt-2 mt-md-0">
                  <input
                    type="text"
                    className="form-control"
                    id="sName"
                    placeholder="Enter Session Name"
                    name="sName"
                    value={sName}
                    onChange={(e) => setSName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-5 mt-2 mt-md-0">
                  <label>Session Description</label>
                </div>
                <div className="col-lg-6 mt-2 mt-md-0">
                  <textarea
                    type="text"
                    className="form-control"
                    id="sDescription"
                    placeholder="Enter Session Description"
                    name="sDescription"
                    value={sDescription}
                    onChange={(e) => setSDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <br className='d-none d-md-block'/>
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-5 mt-2 mt-md-0">
                  <label>Session Link</label>
                </div>
                <div className="col-lg-6 mt-2 mt-md-0">
                  <input
                    type="text"
                    className="form-control"
                    id="sLink"
                    placeholder="Enter Session Link"
                    name="sLink"
                    value={sLink}
                    onChange={(e) => setSLink(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-5 mt-2 mt-md-0">
                  <label>Session Duration</label>
                </div>
                <div className="col-lg-6 mt-2 mt-md-0">
                  <input
                    type="text"
                    className="form-control"
                    id="sDuration"
                    placeholder="Enter Session Duration"
                    name="sDuration"
                    value={sDuration}
                    onChange={(e) => setSDuration(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        <br/>
          <div className="row">
            <div className="col-lg-6">
              <button
                type="submit"
                className="btn btn-primary btn-md"
                onClick={addSessionForm}
              >
                Add Session
              </button>
            </div>
          </div>
        </div>
      </div>
     
      </div>
    </section>
      
    </>
  )
};

export default Session;
