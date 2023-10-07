import React, {useState} from "react";
import { Table } from "react-bootstrap";
import { Cancel, Delete, Edit } from "@material-ui/icons";
import { Check } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";


const Language = () => {
  const [activeTab, setActiveTab] = useState();
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
                    <h4 className="card-title">Language</h4>
                  </div>
                </div>
              </div>
              <div className="card-body pt-3">
              <ul className="nav nav-tabs" role="tablist">
      <li className="nav-item">
        <NavLink
          className={`nav-link ${activeTab === 'language' ? 'active' : ''}`}
          onClick={() => setActiveTab("language")}
          style={{ borderBottom: activeTab === "language" ? "3px solid rgb(27, 90, 144)" : "" }}
        >
          Language
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={`nav-link ${activeTab === 'fontStaticWordTranslation' ? 'active' : ''}`}
          onClick={() => setActiveTab("fontStaticWordTranslation")}
          style={{ borderBottom: activeTab === "fontStaticWordTranslation" ? "3px solid rgb(27, 90, 144)" : "" }}
        >
          Front Static Word Translation
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={`nav-link ${activeTab === 'adminStaticWordTranslation' ? 'active' : ''}`}
          onClick={() => setActiveTab("adminStaticWordTranslation")}
          style={{ borderBottom: activeTab === "adminStaticWordTranslation" ? "3px solid rgb(27, 90, 144)" : "" }}
          
        >
          Admin Static Word Translation
        </NavLink>
      </li>
    </ul>

                {/* Add content for each tab */}
                {activeTab === "language" && (
                  <>
                  
                  </>
                )}
                {activeTab === "fontStaticWordTranslation" && (
                  <>
                    
                  </>
                )}
                {activeTab === "adminStaticWordTranslation" && (
                  <>
                   
                  </>
                )}
                <button
                  className="btn btn-primary mt-4"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  Add
                </button>
                <div className="row mt-4">
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
                        Name
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Local
                      </th>
                      <th scope="col" style={headerCellStyle}>
                        Default
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
                      <td>1 </td>
                      <td>English</td>
                      <td>en</td>
                      <td>
                        <Check />
                      </td>

                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
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
                      <td>2 </td>
                      <td>Hindi</td>
                      <td>hi</td>
                      <td>
                        <Cancel />
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
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
                      <td>3 </td>
                      <td>Marathi</td>
                      <td>en</td>
                      <td>
                        <Check />
                      </td>

                      <td>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
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

        {/* <div
          className="modal fade"
          id="exampleModal1"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Language
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
                        Local<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="txtEmployeeName"
                        name="txtEmployeeName"
                        className="form-control "
                        autoComplete="off"
                        placeholder="Please enter language local name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="txtEmployeeName"
                        name="txtEmployeeName"
                        className="form-control "
                        autoComplete="off"
                        placeholder="Please enter language name eg: English"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row mt-lg-3">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label">
                        Set Default <span className="text-danger">*</span>
                      </label>
                      <div className="form-check ml-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
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
                  Save
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Language;
