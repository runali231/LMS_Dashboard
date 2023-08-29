
import React, { useState } from 'react';

const Instructor = () => {
  const [iName, setIName] = useState('');
  const [iDescription, setIDescription] = useState('');
  const [iImage, setIImage] = useState('');
  const [iDuration, setIDuration] = useState('');

//   const addSessionForm = () => {
//     const token = getToken();
//     const userId = '820ef9fe-43c1-4a57-a279-d3238a7da437';

//     const sessionData = {
//       sessionNo: '2',
//       userId: userId,
//       courseId: 'ba39ba53-32fe-4ddb-8c56-76bc1bc7f5b2',
//       sessionName: sName,
//       sessionDescription: sDescription,
//       sessionLink: sLink,
//       duration: sDuration,
//     };

//     addSession(sessionData, token)
//       .then((response) => {
//         console.log(response.data.data);
//         alert("Session added successfully!")
//         // You can perform actions based on the response here
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

  return (
    <>
    <section className="container mt-5">
      <h3 className="mx-4">Add Instructor</h3>
      
    <div className="card shadow p-2 m-3 mt-5">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-5 mt-2 mt-md-0">
                  <label>Instructor Name</label>
                </div>
                <div className="col-lg-6 mt-2 mt-md-0">
                  <input
                    type="text"
                    className="form-control"
                    id="iName"
                    placeholder="Enter Instructor Name"
                    name="iName"
                    value={iName}
                    onChange={(e) => setIName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-5 mt-2 mt-md-0">
                  <label>Instructor Description</label>
                </div>
                <div className="col-lg-6 mt-2 mt-md-0">
                  <textarea
                    type="text"
                    className="form-control"
                    id="iDescription"
                    placeholder="Enter Instructor Description"
                    name="iDescription"
                    value={iDescription}
                    onChange={(e) => setIDescription(e.target.value)}
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
                  <label>Instructor Image</label>
                </div>
                <div className="col-lg-6 mt-2 mt-md-0">
                  <input
                    type="file"
                    className="form-control"
                    id="iImage"
                    placeholder="Enter Instructor Image"
                    name="iImage"
                    value={iImage}
                    onChange={(e) => setIImage(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-5 mt-2 mt-md-0">
                  <label>Instructor Duration</label>
                </div>
                <div className="col-lg-6 mt-2 mt-md-0">
                  <input
                    type="text"
                    className="form-control"
                    id="iDuration"
                    placeholder="Enter Instructor Duration"
                    name="iDuration"
                    value={iDuration}
                    onChange={(e) => setIDuration(e.target.value)}
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
                // onClick={addSessionForm}
              >
                Add Instructor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
};

export default Instructor;
