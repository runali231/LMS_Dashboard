import React, { useEffect } from "react";
import $ from "jquery";
import "../Css/DataTable.css";
import { Eye, EyeFill } from "react-bootstrap-icons";
import { Table, Button } from "react-bootstrap";
import { Delete, Edit } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const ZoomSetting = () => {
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
                    <h4 className="card-title">Update Zoom Token and Email</h4>
                  </div>
                </div>
              </div>
              <div className="card-body pt-3">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Zoom Email:
                        <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          id="zoomEmail"
                          name="zoomEmail"
                          className="form-control "
                          autoComplete="off"
                          placeholder="Enter Zoom Email"
                          required
                        />
                        <span className="input-group-text">
                          <EyeFill />
                        </span>
                      </div>
                    </div>


                    <div className="form-group form-group-sm mt-4">
                      <label className="control-label fw-bold">
                        Zoom JWT Token
                        <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="jwtToken"
                        rows="3"
                        placeholder="Enter Zoom JWT Token"
                      ></textarea>
                    </div>
                    <br/>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      //   onClick={handleAddCourseForm}
                    >
                      Save
                    </button>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 ">
                    <div className="card-header">
                      <h5>How to get JWT Token and Email</h5>
                    </div>
                    <div className="card ">
                      <ul>
                        <li>
                          First Sign up and Sign in here:- Zoom Market Place
                          Portal
                        </li>
                        <li>
                          Click on Top right side menu and click on build app:
                          Create app
                        </li>
                        <li>Choose JWT App and continue...</li>
                        <li>
                          After filling details click on credentials tab and
                          bottom you will see <strong>JWT Token</strong> change
                          token expiry according to your setting.
                        </li>
                        <li>
                          Paste your zoom email account id and JWT Token here
                          and credit, edit meeting here.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <br />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZoomSetting;
