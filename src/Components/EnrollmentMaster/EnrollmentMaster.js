import React from "react";
import { Delete, Edit } from "@material-ui/icons";
import { Eye } from "react-bootstrap-icons";
import { Table } from 'react-bootstrap';

const EnrollmentMaster = () => {
  const headerCellStyle = {
    backgroundColor: 'rgb(27, 90, 144)', // Replace with your desired background color
    color: '#fff', // Optional: Set the text color to contrast with the background
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
              <div className="card-header" style={{ backgroundColor: "white" }}>
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">Enrollment Master</h4>
                  </div>
                  <div className="col-md-2  justify-content-end">
                    <input
                      type="text"
                      id="custom-search"
                      className="form-control "
                      placeholder="Search"
                    />
                  </div>
                  <div className="col-auto d-flex flex-wrap">
                    <div className="form-custom me-2">
                      <div
                        id="tableSearch"
                        className="dataTables_wrapper"
                      ></div>
                    </div>

                    <div
                      className="btn btn-add"
                      title="Add New"
                      onClick={() => { }}
                    >
                      <button
                        className="btn btn-md text-light"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                        style={{ backgroundColor: "#1B5A90" }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-5">                
                <div className="row " >
                  <div className="col-lg-3 d-flex"><h6 className='mt-2'>Show</h6>&nbsp;&nbsp;<select className="form-select w-auto" aria-label="Default select example">
                    <option selected>10</option>
                    <option value="1">10</option>
                    <option value="2">50</option>
                    <option value="3">100</option>
                  </select>&nbsp;&nbsp;
                    <h6 className='mt-2'>entries</h6></div>
                </div>
                <br />
                <Table striped hover responsive className="border ">
                  <thead>
                   <tr>
                      <th scope="col" style={headerCellStyle}>Id</th>
                      <th scope="col" style={headerCellStyle}>Type</th>
                      <th scope="col" style={headerCellStyle}>Source</th>
                      <th scope="col" style={headerCellStyle}>Enrollment Date</th>
                      <th scope="col" style={headerCellStyle}>Completion Date</th>
                      <th scope="col" style={headerCellStyle}>Grade</th>
                      <th scope="col" style={headerCellStyle}>Status</th>
                      <th scope="col" style={headerCellStyle}>Edit</th>
                      <th scope="col" style={headerCellStyle}>Delete</th>
                   </tr>
                  </thead>
                  <tbody>
                  <tr key={1}>
                      <td>
                        1
                      </td>
                      <td>
                       Free
                      </td>
                      <td>
                        Free
                      </td>
                      <td>
                      10/8/2023
                      </td>
                       <td>
                        10/10/2023
                      </td>
                      <td>
                        90%
                      </td>
                      <td>
                        <button className="btn btn-success">Pending</button>
                      </td>
                      <td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editEnrollment"
                        >
                          <Edit />
                        </button>
                      </td>
                      </td>
                      <td>
                      <td>
                        <button
                          className="btn btn-danger"

                        >
                          <Delete />
                        </button>
                      </td>
                      </td>
                    </tr>
                    <tr key={2}>
                      <td>
                        2
                      </td>
                      <td>
                       Free
                      </td>
                      <td>
                        Free
                      </td>
                      <td>
                      10/8/2023
                      </td>
                       <td>
                        10/10/2023
                      </td>
                      <td>
                        90%
                      </td>
                      <td>
                        <button className="btn btn-success">Pending</button>
                      </td>
                      <td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editEnrollment"
                        >
                          <Edit />
                        </button>
                      </td>
                      </td>
                      <td>
                      <td>
                        <button
                          className="btn btn-danger"

                        >
                          <Delete />
                        </button>
                      </td>
                      </td>
                    </tr>
                    <tr key={3}>
                      <td>
                        3
                      </td>
                      <td>
                       Free
                      </td>
                      <td>
                        Free
                      </td>
                      <td>
                      10/8/2023
                      </td>
                       <td>
                        10/10/2023
                      </td>
                      <td>
                        90%
                      </td>
                      <td>
                        <button className="btn btn-success">Pending</button>
                      </td>
                      <td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editEnrollment"
                        >
                          <Edit />
                        </button>
                      </td>
                      </td>
                      <td>
                      <td>
                        <button
                          className="btn btn-danger"

                        >
                          <Delete />
                        </button>
                      </td>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div className="row">
                  <div className='col-lg-4'>
                    <h6>Showing 1 to 3 of 3 entries</h6>
                  </div>
                  <div className='col-lg-4'>

                  </div>
                  <div className='col-lg-4'>
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

        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        //  id="dialog-AddEmployee" role="dialog"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">
                  Add New Enrollment
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Enrollment Id<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="enrollmentId"
                        name="enrollmentId"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter course name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Enrollment type<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="enrollmentType"
                        name="enrollmentType"
                        autoComplete="off"
                        className="form-control mt-2"
                        placeholder="Enter session name"
                        required
                      />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Enrollment Date<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="enrollmentDate"
                        name="enrollmentDate"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter course duration"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Completion Date<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="completionDate"
                        name="completionDate"
                        autoComplete="off"
                        className="form-control mt-2"
                        placeholder="Enter course category"
                        required
                      />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Source<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="source"
                        name="source"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter course level"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Grade <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="Grade"
                        name="Grade"
                        autoComplete="off"
                        className="form-control mt-2"
                        placeholder="Enter price"
                        required
                      />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Enrollment status<span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select mt-2"
                        aria-label="Default select example"

                      >
                        <option value="" disabled >
                          Select Course Category
                        </option>

                        <option value="1">Enrollment</option>
                        <option value="2">Pending</option>
                        <option value="3">In progress</option>
                        <option value="3">Completed</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className="btn btn-success text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="editEnrollment"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        //  id="dialog-AddEmployee" role="dialog"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">
                  Edit New Enrollment
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Enrollment Id<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="enrollmentId"
                        name="enrollmentId"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter course name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Enrollment type<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="enrollmentType"
                        name="enrollmentType"
                        autoComplete="off"
                        className="form-control mt-2"
                        placeholder="Enter session name"
                        required
                      />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Enrollment Date<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="enrollmentDate"
                        name="enrollmentDate"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter course duration"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Completion Date<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="completionDate"
                        name="completionDate"
                        autoComplete="off"
                        className="form-control mt-2"
                        placeholder="Enter course category"
                        required
                      />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Source<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="source"
                        name="source"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter course level"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Grade <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="Grade"
                        name="Grade"
                        autoComplete="off"
                        className="form-control mt-2"
                        placeholder="Enter price"
                        required
                      />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Enrollment status<span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select mt-2"
                        aria-label="Default select example"

                      >
                        <option value="" disabled >
                          Select Course Category
                        </option>

                        <option value="1">Enrollment</option>
                        <option value="2">Pending</option>
                        <option value="3">In progress</option>
                        <option value="3">Completed</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className="btn btn-success text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollmentMaster;
