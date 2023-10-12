import { Delete, Edit } from "@material-ui/icons";
import React from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const QuizQuestion = () => {
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
                    <h4 className="card-title">Quiz Question</h4>
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
                        className="btn btn-md text-light "
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#addQuestion"
                        style={{ backgroundColor: "#1B5A90" }}
                      >
                        Add Question
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
                        Course
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Topic
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Question
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        A
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        B
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        C
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        D
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Answer
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
                      <td>2</td>
                      <td>2</td>
                      <td>How long is a around in boxing (usually)?</td>
                      <td>3 Minutes</td>
                      <td>6 Minutes</td>
                      <td>10 Minutes</td>
                      <td>10 Minutes</td>
                      <td>A</td>
                      <td>
                       
                          <button
                            className="btn btn-success"
                            data-bs-toggle="modal"
                            data-bs-target="#editQuizQuestion"
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
                      <td>2</td>
                      <td>2</td>
                      <td>How long is a around in boxing (usually)?</td>
                      <td>3 Minutes</td>
                      <td>6 Minutes</td>
                      <td>10 Minutes</td>
                      <td>10 Minutes</td>
                      <td>A</td>
                      <td>
                        
                          <button className="btn btn-success" data-bs-toggle="modal"
                            data-bs-target="#editQuizQuestion">
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
                      <td>2</td>
                      <td>2</td>
                      <td>How long is a around in boxing (usually)?</td>
                      <td>3 Minutes</td>
                      <td>6 Minutes</td>
                      <td>10 Minutes</td>
                      <td>10 Minutes</td>
                      <td>A</td>
                      <td>
                        {/* <NavLink to="/invoice"> */}
                          <button className="btn btn-success" data-bs-toggle="modal"
                            data-bs-target="#editQuizQuestion">
                            <Edit />
                          </button>
                        {/* </NavLink> */}
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
                id="addQuestion"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                //  id="dialog-AddEmployee" role="dialog"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title fw-bold"
                        id="exampleModalLabel"
                      >
                        Add Question
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
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              Question<span className="text-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows="5"
                              placeholder="Enter your question"
                            ></textarea>
                          </div>
                          <br />
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              Answer<span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-select"
                              id="sel1"
                              name="sellist1"
                            >
                              <option>Please Select Option</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              A-Option<span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Option A"
                            />
                          </div>
                          <br />
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              B-Option<span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Option B"
                            />
                          </div>
                          <br />
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              C-Option<span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Option C"
                            />
                          </div>
                          <br />
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              D-Option<span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Option D"
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
                        className="btn btn-success text-white me-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="editQuizQuestion"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                //  id="dialog-AddEmployee" role="dialog"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title fw-bold"
                        id="exampleModalLabel"
                      >
                        Add Question
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
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              Question<span className="text-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows="5"
                              placeholder="Enter your question"
                            ></textarea>
                          </div>
                          <br />
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              Answer<span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-select"
                              id="sel1"
                              name="sellist1"
                            >
                              <option>Please Select Option</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              A-Option<span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Option A"
                            />
                          </div>
                          <br />
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              B-Option<span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Option B"
                            />
                          </div>
                          <br />
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              C-Option<span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Option C"
                            />
                          </div>
                          <br />
                          <div className="form-group form-group-sm">
                            <label className="control-label fw-bold">
                              D-Option<span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Option D"
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
                        className="btn btn-success text-white me-auto"
                      >
                        Submit
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

export default QuizQuestion;
