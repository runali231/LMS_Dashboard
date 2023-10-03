import React, { useEffect } from "react";
import $ from "jquery";
import "../Css/DataTable.css";
import { Eye, EyeFill, Facebook, Google } from "react-bootstrap-icons";
import { Table, Button } from "react-bootstrap";
import { Delete, Edit, GitHub, ViewAgenda } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const MailSetting = () => {
  const headerCellStyle = {
    backgroundColor: "rgb(27, 90, 144)", // Replace with your desired background color
    color: "#fff", // Optional: Set the text color to contrast with the background
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 ">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Sender Name:
                <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="senderName"
                name="senderName"
                className="form-control "
                autoComplete="off"
                placeholder="Enter Sender Name"
                required
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Mail Address:
                <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="mailAddress"
                name="mailAddress"
                className="form-control "
                autoComplete="off"
                placeholder="Enter Mail Address"
                required
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Mail Driver: (ex. SMTP, MAIL)
                <span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mail Driver"
                />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Mail Username: (ex.info@test.com)
                <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="mailUsername"
                name="mailUsername"
                className="form-control "
                autoComplete="off"
                placeholder="Enter Mail Username"
                required
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Mail Host: (ex. smtp, mailtrap.io)
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
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Mail Password:
                <span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mail Password"
                />
                <span className="input-group-text">
                  <EyeFill />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Mail Port: (ex.2525, 467)
                <span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mail Port"
                />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Mail Encryption: (ex.TLS/SSL)
                <span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mail Encryption"
                />
              </div>
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
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MailSetting;
