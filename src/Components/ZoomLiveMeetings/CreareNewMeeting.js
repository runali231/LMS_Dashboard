import React, { useEffect } from "react";
import $ from "jquery";
import "../Css/DataTable.css";
import { Eye, EyeFill, QuestionCircle, QuestionCircleFill } from "react-bootstrap-icons";
import { Table, Button } from "react-bootstrap";
import { Delete, Edit } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const CreateNewMeeting = () => {
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
                    <h4 className="card-title">Create New Zoom Meeting</h4>
                  </div>
                </div>
              </div>
              <div className="card-body pt-3">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Link By Course:
                        <span className="text-danger">*</span>
                      </label>
                      <br />
                      <button className="btn btn-success">Enable</button>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Courses:
                        <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Meeting Topic:
                        <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Mail Host"
                        />
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div className="row mt-4">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Meeting Start Time
                        <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Enter Mail Port"
                        />
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div className="row mt-4">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Meeting Duration
                        <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter in mins eg 60"
                        />
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div className="row mt-4">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Meeting Password (Optional):
                    
                      </label>
                      <div className="input-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter meeting password"
                        />
                        <span className="input-group-text"><EyeFill/></span>
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div className="row mt-4">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Meeting Agenda
                        <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter meeting agenda"
                        />
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div className="row mt-4">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group form-group-sm">
                      <label className="control-label fw-bold">
                        Time Zone
                        <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <p className="mt-1"><QuestionCircleFill/> Set to None if you want to use your account timezone</p>
                    </div>
                  </div>
                 
                </div>
                <div className="card mt-4">
                    <div className="card-header bg-light">
                        <h5>Meeting Setting:</h5>
                    </div>
                    <div className="card-body">
                    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Enable Host Video
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label" for="flexCheckChecked">
    Enable Participant Video
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Join Before Host?
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label" for="flexCheckChecked">
    Mute Upon Entry?
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" for="flexCheckChecked">
    Registrants email notification?
  </label>
</div>
                    </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-6 mt-3 ">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      //   onClick={handleAddCourseForm}
                    >
                      Create New Meeting
                    </button>
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

export default CreateNewMeeting;
