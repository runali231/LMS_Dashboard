import React, { useState, useEffect } from "react";
import $ from "jquery";
import "../Css/DataTable.css";
import { Edit } from "@material-ui/icons";
import { Eye } from "react-bootstrap-icons";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const UserMaster = () => {
  const [editorState, setEditorState] = useState();

  const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };
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
                    <h5 className="card-title">User Master</h5>
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
                  className="display mt-5 table-responsive table-borderless hover-table"
                  style={{ width: "100%" }}
                >
                  <thead
                    className="text-light"
                    style={{ backgroundColor: "#1B5A90" }}
                  >
                    <tr>
                      <th scope="col">Action</th>
                      <th scope="col">Employee Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Designation</th>
                      <th scope="col">Date of Birth</th>
                      <th scope="col">Contact No.</th>
                      <th scope="col">Email Id</th>
                      <th scope="col">Address</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Status</th>
                      <th scope="col">Remark</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Edit
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                        />
                        &nbsp;&nbsp;
                        <Eye
                          data-bs-toggle="modal"
                          data-bs-target="#parameterValueMaster"
                        />
                      </td>

                      <td>Employee Id</td>
                      <td>Name</td>
                      <td>Designation</td>
                      <td>Date of Birth</td>
                      <td>Contact No.</td>
                      <td>Email Id</td>
                      <td>Address</td>
                      <td>Gender</td>
                      <td>Status</td>
                      <td>Remark</td>
                    </tr>
                    <tr>
                      <td>
                        <Edit
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                        />
                        &nbsp;&nbsp;
                        <Eye
                          data-bs-toggle="modal"
                          data-bs-target="#parameterValueMaster"
                        />
                      </td>

                      <td>Employee Id</td>
                      <td>Name</td>
                      <td>Designation</td>
                      <td>Date of Birth</td>
                      <td>Contact No.</td>
                      <td>Email Id</td>
                      <td>Address</td>
                      <td>Gender</td>
                      <td>Status</td>
                      <td>Remark</td>
                    </tr>
                    <tr>
                      <td>
                        <Edit
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                        />
                        &nbsp;&nbsp;
                        <Eye
                          data-bs-toggle="modal"
                          data-bs-target="#parameterValueMaster"
                        />
                      </td>

                      <td>Employee Id</td>
                      <td>Name</td>
                      <td>Designation</td>
                      <td>Date of Birth</td>
                      <td>Contact No.</td>
                      <td>Email Id</td>
                      <td>Address</td>
                      <td>Gender</td>
                      <td>Status</td>
                      <td>Remark</td>
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
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Users
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
                      <label className="control-label fw-bold">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter first name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Last Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        autoComplete="off"
                        maxLength="10"
                        className="form-control mt-2"
                        placeholder="Enter your last name"
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
                        Email<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter your email id"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Mobile Number<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        autoComplete="off"
                        maxLength="10"
                        className="form-control mt-2"
                        placeholder="Enter your mobile number"
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
                        Address <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="address"
                        rows="3"
                        placeholder="Enter your address"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Date of Birth <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                          @
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your date of birth"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Gender<span className="text-danger">*</span>
                      </label>
                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            1
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            2
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            3
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Password<span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="off"
                        maxLength="10"
                        className="form-control mt-2"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        country<span className="text-danger">*</span>
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select an option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        State<span className="text-danger">*</span>
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select an option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        City<span className="text-danger">*</span>
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select an option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Pincode / zipcode<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter your pincode"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        User Image<span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        id="file"
                        name="file"
                        className="form-control "
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Select Role<span className="text-danger">*</span>
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select an option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Choose Marriage Status
                        <span className="text-danger">*</span>
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select an option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Verified<span className="text-danger">*</span>
                      </label>
                      <br />
                      <button className="btn btn-success">On</button>
                    </div>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Status<span className="text-danger">*</span>
                      </label>
                      <br />
                      <button className="btn btn-success">Active</button>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {/* <Editor
                      editorState={editorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={(newEditorState) => setEditorState(newEditorState)}
                    /> */}
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Detail<span className="text-danger">*</span>
                      </label>
                      <Editor
                      editorState={editorState}
                      onEditorStateChange={handleEditorStateChange}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                    
                    />
                    </div>
                   
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Facebook Url<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="Facebook Url"
                        name="Facebook Url"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter facebook url"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Youtube Url<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="youtubeUrl"
                        name="youtubeUrl"
                        autoComplete="off"
                        maxLength="10"
                        className="form-control mt-2"
                        placeholder="Enter your youtube url"
                        required
                      />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Twitter Url<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="twitterUrl"
                        name="twitterUrl"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter twitter url"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        LinkedIn Url<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="linkedInUrl"
                        name="linkedInUrl"
                        autoComplete="off"
                        maxLength="10"
                        className="form-control mt-2"
                        placeholder="Enter your linkdin url"
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
                  Add New Parameter
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
                        Employee Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="txtEmployeeName"
                        name="txtEmployeeName"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Email Id <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="txtContactDetails"
                        name="txtContactDetails"
                        autoComplete="off"
                        maxLength="10"
                        className="form-control mt-2"
                        placeholder="Enter contact number"
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
                        Date of Birth <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="txtEmployeeName"
                        name="txtEmployeeName"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Contact No <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="txtContactDetails"
                        name="txtContactDetails"
                        autoComplete="off"
                        maxLength="10"
                        className="form-control mt-2"
                        placeholder="Enter contact number"
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
                        Designation <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="txtEmployeeName"
                        name="txtEmployeeName"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="txtContactDetails"
                        name="txtContactDetails"
                        autoComplete="off"
                        maxLength="10"
                        className="form-control mt-2"
                        placeholder="Enter contact number"
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
                        Gender<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="txtEmployeeName"
                        name="txtEmployeeName"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter name"
                        required
                      />
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

export default UserMaster;
