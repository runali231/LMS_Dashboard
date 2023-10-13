import React from "react";
import { Delete, Edit } from "@material-ui/icons";
import { Table } from "react-bootstrap";
const ContentMaster = () => {
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
                    <h4 className="card-title">Content Master</h4>
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
                <Table striped hover responsive className="border ">
                  <thead>
                    <tr>
                      <th scope="col" style={headerCellStyle}>
                        Sr No.
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Title
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Description
                      </th>
                      <th scope="col" style={headerCellStyle}>
                       Notes
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Img Url
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Video Url
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
                    <tr key={1}>
                      <td>1</td>
                      <td>Introduction</td>
                      <td>Introduction</td>
                      <td>abc</td>
                      <td>xyz</td>
                      <td>pqr</td>
                      <td>
                        <button className="btn btn-success">View</button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editContent"
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
                      <td>Introduction</td>
                      <td>Introduction</td>
                      <td>abc</td>
                      <td>xyz</td>
                      <td>pqr</td>
                      <td>
                        <button className="btn btn-success">View</button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editContent"
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
                      <td>Introduction</td>
                      <td>Introduction</td>
                      <td>abc</td>
                      <td>xyz</td>
                      <td>pqr</td>
                      <td>
                        <button className="btn btn-success">View</button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editContent"
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
                  <div className='col-lg-4'>
                    <h6>Showing 1 to 3 of 3 entries</h6>
                  </div>
                  <div className='col-lg-4'>

                  </div>
                  <div className='col-lg-4'>
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
                <h4 className="modal-title" id="exampleModalLabel">
                  Add New Content
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
                        Title<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter title"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Description<span className="text-danger">*</span>
                      </label>
                      <textarea
                      type="text"
                      className="form-control mt-2"
                      id="description"
                      placeholder="Enter Content Description"
                      name="description"
                    />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Notes<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="notes"
                        name="notes"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter notes"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Image<span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        id="image"
                        name="image"
                        autoComplete="off"
                        className="form-control mt-2"
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
                        video<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="video"
                        name="video"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter video link"
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
          id="editContent"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          //  id="dialog-AddEmployee" role="dialog"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">
                  Edit Content
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
                        Title<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter title"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Description<span className="text-danger">*</span>
                      </label>
                      <textarea
                      type="text"
                      className="form-control mt-2"
                      id="description"
                      placeholder="Enter Content Description"
                      name="description"
                    />
                      <span id="message"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Notes<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="notes"
                        name="notes"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter notes"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Image<span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        id="image"
                        name="image"
                        autoComplete="off"
                        className="form-control mt-2"
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
                        video<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="video"
                        name="video"
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Enter video link"
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

export default ContentMaster;
