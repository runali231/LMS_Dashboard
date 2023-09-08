import React, { useEffect } from "react";
import $ from "jquery";
import "../Css/DataTable.css";
import { Edit } from "@material-ui/icons";
import { Eye } from "react-bootstrap-icons";

const ContentMaster = () => {
  

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
                    <h5 className="card-title">Content Master</h5>
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
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Notes</th>
                      <th scope="col">Image Url</th>  
                      <th scope="col">Video Url</th>              
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
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
                
                      <td>Title</td>
                      <td>Description</td>
                      <td>Notes</td>
                      <td>Image Url</td>  
                      <td>Video Url</td>     
                    </tr>
                    <tr>
                      <td>
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

                      <td>Title</td>
                      <td>Description</td>
                      <td>Notes</td>
                      <td>Image Url</td>  
                      <td>Video Url</td>     
                    </tr>
                    <tr>
                      <td>
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

                      <td>Title</td>
                      <td>Description</td>
                      <td>Notes</td>
                      <td>Image Url</td>  
                      <td>Video Url</td>     
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
                  Add New Content
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
                        Title<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control mt-3"
                        autoComplete="off"
                        placeholder="Enter title"
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
                      placeholder="Enter Content Description"
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
                        Notes<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="notes"
                        name="notes"
                        className="form-control mt-3"
                        autoComplete="off"
                        placeholder="Enter notes"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Image<span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        id="image"
                        name="image"
                        autoComplete="off"
                        className="form-control mt-3"
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
                        video<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="video"
                        name="video"
                        className="form-control mt-3"
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
                  Edit Content
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
                        Title<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control mt-3"
                        autoComplete="off"
                        placeholder="Enter title"
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
                      placeholder="Enter Content Description"
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
                        Notes<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="notes"
                        name="notes"
                        className="form-control mt-3"
                        autoComplete="off"
                        placeholder="Enter notes"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Image<span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        id="image"
                        name="image"
                        autoComplete="off"
                        className="form-control mt-3"
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
                        video<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="video"
                        name="video"
                        className="form-control mt-3"
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
