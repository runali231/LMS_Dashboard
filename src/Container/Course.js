import React from "react";
import { Table } from "react-bootstrap";
import { Add, Delete, Edit } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();
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
                    <h4 className="card-title">Course</h4>
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
                      onClick={() => {
                        navigate("/courseInsertForm");
                      }}
                    >
                      <button
                        className="btn btn-md text-light"
                        type="button"
                        style={{ backgroundColor: "#1B5A90" }}
                      >
                        <Add />
                        Add Course
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
                        Image
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Title
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Detail
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
                      <td>Wordpress Theme Development</td>
                      <td>I don't mess around. I do this for...</td>
                      <td>wordpress-theme-development</td>
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
                          onClick={() => {
                            navigate("/coursesTab");
                          }}
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
                      <td>Wordpress Theme Development</td>
                      <td>
                        I don't mess around. I do this for...I don't mess
                        around. I do this for...
                      </td>
                      <td>wordpress-theme-development</td>
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
                          onClick={() => {
                            navigate("/coursesTab");
                          }}
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
                      <td>Wordpress Theme Development</td>
                      <td>I don't mess around. I do this for...</td>
                      <td>wordpress-theme-development</td>
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
                          onClick={() => {
                            navigate("/coursesTab");
                          }}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
