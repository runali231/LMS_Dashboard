import React, { useEffect } from "react";
import $ from "jquery";
import "../Css/DataTable.css";
import { Edit } from "@material-ui/icons";
import { Eye } from "react-bootstrap-icons";
import { Table, Button } from 'react-bootstrap';

const EnrollmentMaster = () => {

  useEffect(() => {

    $("#example").DataTable({
      destroy: true,
      searching: false,
      responsive: true,
    });
  }, []);
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
                    <h5 className="card-title">Enrollment Master</h5>
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
                {/* <table
                  id="example"
                  className="display mt-5 table-responsive table-bordered hover-table"
                  style={{ width: "100%" }}
                >
                  <thead
                    className="text-light"
                    style={{ backgroundColor: "#1B5A90" }}
                  >
                    <tr>
                      <th scope="col">Action</th>
                      <th scope="col">Enrollment Id</th>
                      <th scope="col">User Id</th>
                      <th scope="col">Course Id</th>
                      <th scope="col">Enrollment Date</th>
                      <th scope="col">Type</th>
                      <th scope="col">Source</th>
                      <th scope="col">Completion Date</th>
                      <th scope="col">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td >
                        <Edit
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal2"
                        />
                        &nbsp;&nbsp;
                        <Eye
                          data-bs-toggle="modal"
                          data-bs-target="#parameterValueMaster"
                        />
                      </td>
                      <td>Enrollment Id</td>
                      <td>User Id</td>
                      <td>Course Id</td>
                      <td>Enrollment Date</td>
                      <td>Type</td>
                      <td>Source</td>
                      <td>Completion Date</td>
                      <td>Grade</td>
                    </tr>
                    <tr>
                      <td >
                        <Edit
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal2"
                        />
                        &nbsp;&nbsp;
                        <Eye
                          data-bs-toggle="modal"
                          data-bs-target="#parameterValueMaster"
                        />
                      </td>

                      <td>Enrollment Id</td>
                      <td>User Id</td>
                      <td>Course Id</td>
                      <td>Enrollment Date</td>
                      <td>Type</td>
                      <td>Source</td>
                      <td>Completion Date</td>
                      <td>Grade</td>
                    </tr>
                    <tr>
                      <td >
                        <Edit
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal2"
                        />
                        &nbsp;&nbsp;
                        <Eye
                          data-bs-toggle="modal"
                          data-bs-target="#parameterValueMaster"
                        />
                      </td>

                      <td>Enrollment Id</td>
                      <td>User Id</td>
                      <td>Course Id</td>
                      <td>Enrollment Date</td>
                      <td>Type</td>
                      <td>Source</td>
                      <td>Completion Date</td>
                      <td>Grade</td>
                    </tr>
                  </tbody>
                </table> */}
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
                <Table striped borderless hover responsive className="border text-center" >
                  <thead >
                    <tr>

                      <th scope="col" style={headerCellStyle}>Action</th>
                      <th scope="col" style={headerCellStyle}>Enrollment Id</th>
                      <th scope="col" style={headerCellStyle}>Enrollment Date</th>
                      <th scope="col" style={headerCellStyle}>Type</th>

                      <th scope="col" style={headerCellStyle}>Source</th>
                      <th scope="col" style={headerCellStyle}>Completion Date</th>
                      <th scope="col" style={headerCellStyle}>Grade</th>

                    </tr>
                  </thead>
                  <tbody>

                    <tr key={1}>
                      <td className='d-flex'><Edit data-bs-toggle="modal"
                        data-bs-target="#exampleModal1" />&nbsp;&nbsp;
                        <Eye data-bs-toggle="modal"
                          data-bs-target="#parameterValueMaster" />
                      </td>

                      <td>Enrollment Id</td>
                      <td>Enrollment Date</td>
                      <td >Type</td>

                      <td>Source</td>
                      <td>Completion Date</td>
                      <td >Grade</td>
                    </tr>
                    <tr key={2}>
                      <td className='d-flex'><Edit data-bs-toggle="modal"
                        data-bs-target="#exampleModal1" />&nbsp;&nbsp;
                        <Eye data-bs-toggle="modal"
                          data-bs-target="#parameterValueMaster" />
                      </td>

                      <td>Enrollment Id</td>
                      <td>Enrollment Date</td>
                      <td >Type</td>

                      <td>Source</td>
                      <td>Completion Date</td>
                      <td >Grade</td>
                    </tr>
                    <tr key={3}>
                      <td className='d-flex text-center'>
                        {/* <Button>  */}
                        <Edit data-bs-toggle="modal"
                          data-bs-target="#exampleModal1" />
                        {/* </Button> */}
                        &nbsp;&nbsp;
                        {/* <Button> */}
                        <Eye data-bs-toggle="modal"
                          data-bs-target="#parameterValueMaster" />
                        {/* </Button> */}
                      </td>

                      <td>Enrollment Id</td>
                      <td>Enrollment Date</td>
                      <td >Type</td>

                      <td>Source</td>
                      <td>Completion Date</td>
                      <td >Grade</td>
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
                          <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
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
                <h5 className="modal-title" id="exampleModalLabel">
                  Add New Enrollment
                </h5>
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
                      <label className="control-label">
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
                      <label className="control-label">
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
                      <label className="control-label">
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
                      <label className="control-label">
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
                      <label className="control-label">
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
                      <label className="control-label">
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
                      <label className="control-label">
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
          id="exampleModal2"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        //  id="dialog-AddEmployee" role="dialog"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Course
                </h5>
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
                      <label className="control-label">
                        Course Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="courseName"
                        name="courseName"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter course name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Session Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="sessionName"
                        name="sessionName"
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
                      <label className="control-label">
                        Course Duration<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="courseDuration"
                        name="courseDuration"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter course duration"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Course Category<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="courseCategory"
                        name="courseCategory"
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
                      <label className="control-label">
                        Course level <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="courseLevel"
                        name="courseLevel"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter course level"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Price <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="price"
                        name="price"
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
                      <label className="control-label">
                        Study Material<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="studyMaterial"
                        name="studyMaterial"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter study material"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Certificate<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="certificate"
                        name="certificate"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter certificate"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
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
