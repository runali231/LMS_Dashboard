import React, { useEffect } from "react";
import $ from "jquery";
import "../Css/DataTable.css";
import { Eye } from "react-bootstrap-icons";
import { Table, Button } from "react-bootstrap";
import { Add, Delete, Description, Edit } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const Category = () => {
  const headerCellStyle = {
    backgroundColor: "rgb(27, 90, 144)", // Replace with your desired background color
    color: "#fff", // Optional: Set the text color to contrast with the background
  };
  const data = [
    { name: "John", age: 30, country: "USA" },
    { name: "Alice", age: 25, country: "Canada" },
    { name: "Bob", age: 40, country: "UK" },
    // Add more data here
  ];

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
              <div
                className="card-header" /* style={{ backgroundColor: 'white' }} */
              >
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">Categories</h4>
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
                    <div className="form-custom me-1">
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
                        <Add /> Add Category
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
                        Sr No.
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Category
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Icon
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Slug
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Featured
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
                    <tr key={1}>
                      <td>1</td>
                      <td>Design</td>
                      <td>
                        <Description />
                      </td>
                      <td>design</td>
                      <td>
                        <button className="btn btn-success">Yes</button>
                      </td>
                      <td>
                        <button className="btn btn-success">Active</button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editCategory"
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
                      <td>Design</td>
                      <td>
                        <Description />
                      </td>
                      <td>design</td>
                      <td>
                        <button className="btn btn-success">Yes</button>
                      </td>
                      <td>
                        <button className="btn btn-success">Active</button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editCategory"
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
                      <td>Design</td>
                      <td>
                        <Description />
                      </td>
                      <td>design</td>
                      <td>
                        <button className="btn btn-success">Yes</button>
                      </td>
                      <td>
                        <button className="btn btn-success">Active</button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editCategory"
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
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
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

              <div
                className="modal fade"
                id="exampleModal1"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                //  id="dialog-AddEmployee" role="dialog"
              >
                <div className="modal-dialog modal-md">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title fw-bold"
                        id="exampleModalLabel"
                      >
                        Add Category
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
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              Category Name:
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="categoryName"
                              name="categoryName"
                              className="form-control "
                              autoComplete="off"
                              placeholder="Enter Category Name"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              Category Icon
                              <span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Category Icon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              Featured:
                              <span className="text-danger">*</span>
                            </label>
                            <br />
                            <button className="btn btn-success">Enabled</button>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              Status:
                              <span className="text-danger">*</span>
                            </label>
                            <br />
                            <button className="btn btn-success">Enabled</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        className="btn btn-primary text-white me-auto"
                      >
                        Add Category
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="editCategory"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                //  id="dialog-AddEmployee" role="dialog"
              >
                <div className="modal-dialog modal-md">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title fw-bold"
                        id="exampleModalLabel"
                      >
                        Edit Category
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
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              Category Name:
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="categoryName"
                              name="categoryName"
                              className="form-control "
                              autoComplete="off"
                              placeholder="Enter Category Name"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              Category Icon
                              <span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Category Icon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              Featured:
                              <span className="text-danger">*</span>
                            </label>
                            <br />
                            <button className="btn btn-success">Enabled</button>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              Status:
                              <span className="text-danger">*</span>
                            </label>
                            <br />
                            <button className="btn btn-success">Enabled</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        className="btn btn-primary text-white me-auto"
                      >
                        Edit Category
                      </button>
                    </div>
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

export default Category;
