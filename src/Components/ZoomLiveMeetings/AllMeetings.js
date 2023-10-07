import React from "react";

import {
  Eye,
} from "react-bootstrap-icons";
import { Table} from "react-bootstrap";
import { Edit } from "@material-ui/icons";

const AllMeetings = () => {
  const headerCellStyle = {
    backgroundColor: "rgb(27, 90, 144)", // Replace with your desired background color
    color: "#fff", // Optional: Set the text color to contrast with the background
  };
  return (
    <>
      <div className="container-fluid">
        <div
          className="card m-3"
          style={{ boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="row">
            <div className="col-lg-12">
              <div
                className="card-header" /* style={{ backgroundColor: 'white' }} */
              >
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">All Meetings</h4>
                  </div>
                  <div className="col-auto d-flex flex-wrap">
                    <div
                      className="btn btn-add"
                      title="Add New"
                      onClick={() => {}}
                    >
                      <button
                        className="btn btn-md text-light"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                        style={{ backgroundColor: "#1B5A90" }}
                      >
                        Create New Meeting
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-3">
                <div className="card">
                  <div className="card-header">
                    <h5>Your Zoom Profile</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-3">
                        <img
                          className="img-fluid"
                          src="/Images/team-1.jpg"
                          alt=""
                          style={{ height: "15vh", width: "150px" }}
                        />
                      </div>
                      <div className="col-lg-4">
                        <h6>
                          <strong>First Name:</strong> Runali
                        </h6>
                        <h6>
                          <strong>Last Name:</strong> Kadam
                        </h6>
                        <h6>
                          <strong>Timezone:</strong> Asia/culcutta
                        </h6>
                      </div>
                      <div className="col-lg-4">
                        <h6>
                          <strong>Status:</strong> active
                        </h6>
                        <h6>
                          <strong>Zoom ID:</strong>{" "}
                        </h6>
                        <h6>
                          <strong>Language:</strong> India
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-3 d-flex">
                    <h6 className="mt-2">Show</h6>&nbsp;&nbsp;
                    <select
                      className="form-select w-auto"
                      aria-label="Default select example"
                    >
                      <option selected>10</option>
                      <option value="1">10</option>
                      <option value="2">50</option>
                      <option value="3">100</option>
                    </select>
                    &nbsp;&nbsp;
                    <h6 className="mt-2">entries</h6>
                  </div>
                </div>
                <br />
                <Table
                  striped                 
                  hover
                  responsive
                  className="border text-left"
                >
                  <thead>
                    <tr>
                      <th scope="col" style={headerCellStyle}>
                        Sr No.
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Meeting ID
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Meeting URL
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={1}>
                      <td>1</td>
                      <td>
                        <strong>Meeting ID:</strong> 786356454
                        <br />
                        <strong>Meeting Topic:</strong> Online Classes
                        <br />
                        <strong>Meeting Agenda:</strong> Online Classes
                        <br />
                        <strong>Duration:</strong> 10 min
                        <br />
                        <strong>Start Time:</strong> <br />
                      </td>
                      <td>
                        https://zoom.us/j/95648992579?pwd=d3JTTnpxRVluWUVYRmpzbEVSYWNEUT09#success
                      </td>
                      <td className="">
                        <button className="btn btn-primary">  <Edit
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                        /></button>
                      
                        &nbsp;&nbsp;
                        <button className="btn btn-success"> <Eye
                          data-bs-toggle="modal"
                          data-bs-target="#parameterValueMaster"
                        /></button>
                       
                      </td>
                    </tr>
                    <tr key={2}>
                      <td>2</td>
                      <td>
                        <strong>Meeting ID:</strong> 786356454
                        <br />
                        <strong>Meeting Topic:</strong> Online Classes
                        <br />
                        <strong>Meeting Agenda:</strong> Online Classes
                        <br />
                        <strong>Duration:</strong> 10 min
                        <br />
                        <strong>Start Time:</strong> <br />
                      </td>
                      <td>
                        https://zoom.us/j/95648992579?pwd=d3JTTnpxRVluWUVYRmpzbEVSYWNEUT09#success
                      </td>
                      <td className="d-flex">
                        <button className="btn btn-primary">  <Edit
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                        /></button>
                      
                        &nbsp;&nbsp;
                        <button className="btn btn-success"> <Eye
                          data-bs-toggle="modal"
                          data-bs-target="#parameterValueMaster"
                        /></button>
                       
                      </td>
                    </tr>
                    <tr key={3}>
                      <td>3</td>
                      <td>
                        <strong>Meeting ID:</strong> 786356454
                        <br />
                        <strong>Meeting Topic:</strong> Online Classes
                        <br />
                        <strong>Meeting Agenda:</strong> Online Classes
                        <br />
                        <strong>Duration:</strong> 10 min
                        <br />
                        <strong>Start Time:</strong> <br />
                      </td>
                      <td>
                        https://zoom.us/j/95648992579?pwd=d3JTTnpxRVluWUVYRmpzbEVSYWNEUT09#success
                      </td>
                      <td className="">
                        <button className="btn btn-primary">  <Edit
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                        /></button>
                      
                        &nbsp;&nbsp;
                        <button className="btn btn-success"> <Eye
                          data-bs-toggle="modal"
                          data-bs-target="#parameterValueMaster"
                        /></button>
                       
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div className="row">
                  <div className="col-lg-4">
                    <h6>Showing 1 to 3 of 3 entries</h6>
                  </div>
                  <div className="col-lg-4"></div>
                  <div className="col-lg-4">
                  <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-end">
                        <li className="page-item">
                          <button
                            className="page-link"
                            /* onClick={handlePrevious} */ aria-label="Previous"
                          >
                            <span aria-hidden="true">&laquo;</span>
                          </button>
                        </li>
                        <li className="page-item active">
                          <button
                            className="page-link" /* onClick={handlePageClick(1)} */
                          >
                            1
                          </button>
                        </li>
                        <li className="page-item">
                          <button
                            className="page-link" /* onClick={handlePageClick(2)} */
                          >
                            2
                          </button>
                        </li>
                        <li className="page-item">
                          <button
                            className="page-link" /* onClick={handlePageClick(3)} */
                          >
                            3
                          </button>
                        </li>
                        <li className="page-item">
                          <button
                            className="page-link"
                            /* onClick={handleNext} */ aria-label="Next"
                          >
                            <span aria-hidden="true">&raquo;</span>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMeetings;
