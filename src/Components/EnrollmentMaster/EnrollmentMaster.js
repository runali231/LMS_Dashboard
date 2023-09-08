import React, { useEffect } from "react";
import $ from "jquery";
import "../Css/DataTable.css";
import { Edit } from "@material-ui/icons";
import { Eye } from "react-bootstrap-icons";

const EnrollmentMaster = () => {

  useEffect(() => {
    $("#example").DataTable({
      destroy: true,
      searching: false,
      responsive: true,
    });
  }, []);
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
                      onClick={() => {}}
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
                <table
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
                </table>
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
                        className="form-control mt-3"
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
                        className="form-control mt-3"
                        placeholder="Enter session name"
                        required
                      />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Enrollment Date<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="enrollmentDate"
                        name="enrollmentDate"
                        className="form-control mt-3"
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
                        className="form-control mt-3"
                        placeholder="Enter course category"
                        required
                      />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Source<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="source"
                        name="source"
                        className="form-control mt-3"
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
                        className="form-control mt-3"
                        placeholder="Enter price"
                        required
                      />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Enrollment status<span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select mt-3"
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
                        className="form-control mt-3"
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
                        className="form-control mt-3"
                        placeholder="Enter session name"
                        required
                      />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Course Duration<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="courseDuration"
                        name="courseDuration"
                        className="form-control mt-3"
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
                        className="form-control mt-3"
                        placeholder="Enter course category"
                        required
                      />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Course level <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="courseLevel"
                        name="courseLevel"
                        className="form-control mt-3"
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
                        className="form-control mt-3"
                        placeholder="Enter price"
                        required
                      />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Study Material<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="studyMaterial"
                        name="studyMaterial"
                        className="form-control mt-3"
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
                        className="form-control mt-3"
                        autoComplete="off"
                        placeholder="Enter certificate"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Enrollment status<span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select mt-3"
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
