import React, { useState } from "react";
import { Edit, Delete } from "@material-ui/icons";
import { Eye } from "react-bootstrap-icons";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Table } from "react-bootstrap";

const UserMaster = () => {
  const [editorState, setEditorState] = useState();

  const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };
  const headerCellStyle = {
    backgroundColor: "rgb(27, 90, 144)",
    color: "#fff",
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
              <div className="card-header" /* style={{ backgroundColor: "white" }} */>
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">User Master</h4>
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
              <div className="row ">
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

                <Table striped hover responsive className="border ">
                  <thead>
                    <tr>
                      <th scope="col" style={headerCellStyle}>
                        Id
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Image
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Name
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Designation
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        DOB
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Contact No.
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Email Id
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Address
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Gender
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Country
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        State
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        City
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Status
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Edit
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><img src="data:image/jpeg;base64,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" alt=""/></td>
                      <td>Runali Kadam</td>
                      <td>Frontend Developer</td>
                      <td>21/12/1997</td>
                      <td>9075372929</td>
                      <td>runali@gmail.com</td>
                      <td>Badlapur</td>
                      <td>Female</td>
                      <td>India</td>
                      <td>Maharashtra</td>
                      <td>Badlapur</td>
                      <td>
                        <button className="btn btn-success">Active</button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editUser"
                        >
                          <Edit />
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-danger">
                          <Delete />
                        </button>
                      </td>
                    </tr>
                    <tr key={2}>
                      <td>2</td>
                      <td><img src="data:image/jpeg;base64,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" alt=""/></td>
                      <td>Runali Kadam</td>
                      <td>Frontend Developer</td>
                      <td>21/12/1997</td>
                      <td>9075372929</td>
                      <td>runali@gmail.com</td>
                      <td>Badlapur</td>
                      <td>Female</td>
                      <td>India</td>
                      <td>Maharashtra</td>
                      <td>Badlapur</td>
                      <td>
                        <button className="btn btn-success">Active</button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editUser"
                        >
                          <Edit />
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-danger">
                          <Delete />
                        </button>
                      </td>
                    </tr>
                    <tr key={3}>
                      <td>3</td>
                      <td><img src="data:image/jpeg;base64,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" alt=""/></td>
                      <td>Runali Kadam</td>
                      <td>Frontend Developer</td>
                      <td>21/12/1997</td>
                      <td>9075372929</td>
                      <td>runali@gmail.com</td>
                      <td>Badlapur</td>
                      <td>Female</td>
                      <td>India</td>
                      <td>Maharashtra</td>
                      <td>Badlapur</td>
                      <td>
                        <button className="btn btn-success">Active</button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editUser"
                        >
                          <Edit />
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-danger">
                          <Delete />
                        </button>
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
          id="editUser"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          //  id="dialog-AddEmployee" role="dialog"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">
                  Edit Users
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
                        placeholder="Enter your linkedin url"
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

export default UserMaster;
