import React from "react";
import { Eye } from "react-bootstrap-icons";
import { Table } from "react-bootstrap";
import { Delete, Edit } from "@material-ui/icons";

const EmployeeMaster = () => {
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
                    <h4 className="card-title">Employee Master</h4>
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
              <div className="card-body pt-3">
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
                        Status
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        View
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
                      <td>Runali Kadam</td>
                      <td>Frontend Developer</td>
                      <td>21/12/1997</td>
                      <td>9075372929</td>
                      <td>runali@gmail.com</td>
                      <td>Badlapur</td>
                      <td>Female</td>
                      <td>
                        <button className="btn btn-success">Active</button>
                      </td>
                      <td>
                        <button className="btn btn-success">
                          <Eye />
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editEmployee"
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
                      <td>Runali Kadam</td>
                      <td>Frontend Developer</td>
                      <td>21/12/1997</td>
                      <td>9075372929</td>
                      <td>runali@gmail.com</td>
                      <td>Badlapur</td>
                      <td>Female</td>
                      <td>
                        <button className="btn btn-success">Active</button>
                      </td>
                      <td>
                        <button className="btn btn-success">
                          <Eye />
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editEmployee"
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
                      <td>Runali Kadam</td>
                      <td>Frontend Developer</td>
                      <td>21/12/1997</td>
                      <td>9075372929</td>
                      <td>runali@gmail.com</td>
                      <td>Badlapur</td>
                      <td>Female</td>
                      <td>
                        <button className="btn btn-success">Active</button>
                      </td>
                      <td>
                        <button className="btn btn-success">
                          <Eye />
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editEmployee"
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
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold" id="exampleModalLabel">
                  Add Employee
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
                      <label className="control-label fw-bold">
                        Email Id <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="txtContactDetails"
                        name="txtContactDetails"
                        autoComplete="off"
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
                      <label className="control-label fw-bold">
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
                      <label className="control-label fw-bold">
                        Contact No <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="txtContactDetails"
                        name="txtContactDetails"
                        autoComplete="off"
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
                      <label className="control-label fw-bold">
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
                      <label className="control-label fw-bold">
                        Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="txtContactDetails"
                        name="txtContactDetails"
                        autoComplete="off"
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
                      <label className="control-label fw-bold">
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
        <div
          className="modal fade"
          id="editEmployee"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          //  id="dialog-AddEmployee" role="dialog"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold" id="exampleModalLabel">
                  Edit Employee
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
                      <label className="control-label fw-bold">
                        Email Id <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="txtContactDetails"
                        name="txtContactDetails"
                        autoComplete="off"
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
                      <label className="control-label fw-bold">
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
                      <label className="control-label fw-bold">
                        Contact No <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="txtContactDetails"
                        name="txtContactDetails"
                        autoComplete="off"
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
                      <label className="control-label fw-bold">
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
                      <label className="control-label fw-bold">
                        Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="txtContactDetails"
                        name="txtContactDetails"
                        autoComplete="off"
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
                      <label className="control-label fw-bold">
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

export default EmployeeMaster;
