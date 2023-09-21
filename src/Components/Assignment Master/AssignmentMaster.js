import React, { useEffect } from "react";
import $ from "jquery";
import "../Css/DataTable.css";
import { Edit } from "@material-ui/icons";
import { Eye } from "react-bootstrap-icons";

const AssignmentMaster = () => {

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
                    <h5 className="card-title">Assignment Master</h5>
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
                  className="display mt-5 table-responsive hover-table"
                  style={{ width: "100%" }}
                >
                  <thead
                    className="text-light"
                    style={{ backgroundColor: "#1B5A90" }}
                  >
                    <tr>
                      <th scope="col">Action</th>
                      <th scope="col">Assignment Name</th>
                      <th scope="col">Assignment Description</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">End Date</th>               
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
                
                      <td>Assignment Name</td>
                      <td>Assignment Description</td>
                      <td>Start Date</td>
                      <td>End Date</td>         
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

                      <td>Assignment Name</td>
                      <td>Assignment Description</td>
                      <td>Start Date</td>
                      <td>End Date</td>  
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

                      <td>Assignment Name</td>
                      <td>Assignment Description</td>
                      <td>Start Date</td>
                      <td>End Date</td>  
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
                  Add New Assignment
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
                        Assignment Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="assignmentName"
                        name="assignmentName"
                        className="form-control mt-3"
                        autoComplete="off"
                        placeholder="Enter assignment name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Description<span className="text-danger">*</span>
                      </label>
                      <textarea
                      type="text"
                      className="form-control mt-3"
                      id="description"
                      placeholder="Enter Assignment Description"
                      name="description"
                    />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Start Date<span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="endDate"
                        className="form-control mt-3"
                        autoComplete="off"
                        
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        End Date<span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        autoComplete="off"
                        className="form-control mt-3"
                        required
                      />
                      <span id="message"></span>
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
                  Edit Assignment
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
                        Assignment Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="assignmentName"
                        name="assignmentName"
                        className="form-control mt-3"
                        autoComplete="off"
                        placeholder="Enter assignment name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Description<span className="text-danger">*</span>
                      </label>
                      <textarea
                      type="text"
                      className="form-control mt-3"
                      id="description"
                      placeholder="Enter Assignment Description"
                      name="description"
                    />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Start Date<span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="endDate"
                        className="form-control mt-3"
                        autoComplete="off"
                        
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        End Date<span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        autoComplete="off"
                        className="form-control mt-3"
                        required
                      />
                      <span id="message"></span>
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

export default AssignmentMaster;