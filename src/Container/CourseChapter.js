import React from "react";
import { Table } from "react-bootstrap";
import { Add, Delete, Edit } from "@material-ui/icons";

const CourseChapter = () => {
  const headerCellStyle = {
    backgroundColor: "rgb(27, 90, 144)", // Replace with your desired background color
    color: "#fff", // Optional: Set the text color to contrast with the background
  };

  return (
    <>
      <div className="container-fluid">
        <button
          className="btn btn-md text-light mt-4"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#courseChapter"
          style={{ backgroundColor: "#1B5A90" }}
        >
          <Add /> Add
        </button>

        <div className="row pt-3">
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
                Course
              </th>
              <th scope="col" style={headerCellStyle}>
                Chapter Name
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
              <td>React Js</td>
              <td>Introduction</td>

              <td>
                <button className="btn btn-success">Active</button>
              </td>
              <td>
                <button
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#editCourseChapter"
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
              <td>React Js</td>
              <td>Introduction</td>

              <td>
                <button className="btn btn-success">Active</button>
              </td>
              <td>
                <button
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#editCourseChapter"
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
              <td>React Js</td>
              <td>Introduction</td>

              <td>
                <button className="btn btn-success">Active</button>
              </td>
              <td>
                <button
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#editCourseChapter"
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
      <div
        className="modal fade"
        id="courseChapter"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        //  id="dialog-AddEmployee" role="dialog"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="exampleModalLabel">
                Add New Course Chapter
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
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group form-group-sm">
                    <label className="control-label fw-bold">
                      Chapter Name:
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter chapter name"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
                  <div className="form-group form-group-sm">
                    <label className="control-label fw-bold">
                      Status:
                      <span className="text-danger">*</span>
                    </label>
                    <br />
                    <button className="btn btn-danger">Disable</button>
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
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="editCourseChapter"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        //  id="dialog-AddEmployee" role="dialog"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="exampleModalLabel">
                Edit New Course Chapter
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
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group form-group-sm">
                    <label className="control-label fw-bold">
                      Chapter Name:
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter chapter name"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
                  <div className="form-group form-group-sm">
                    <label className="control-label fw-bold">
                      Status:
                      <span className="text-danger">*</span>
                    </label>
                    <br />
                    <button className="btn btn-danger">Disable</button>
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
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseChapter;
