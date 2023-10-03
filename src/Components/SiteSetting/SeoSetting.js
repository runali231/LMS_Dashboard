import React, { useEffect } from "react";
import $ from "jquery";
import "../Css/DataTable.css";
import { Eye, EyeFill, Facebook, Google } from "react-bootstrap-icons";
import { Table, Button } from "react-bootstrap";
import { Delete, Edit, GitHub, ViewAgenda } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const SeoSetting = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 ">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Meta Data Description:
                <span className="text-danger">*</span>
              </label>
              <br />
              <textarea
                className="form-control"
                rows="5"
                id="description"
                name="text"
                placeholder="Enter Description"
              ></textarea>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Meta Data Keywords:
                <span className="text-danger">*</span>
              </label>
              <br />
              <textarea
                className="form-control"
                rows="5"
                id="keywords"
                name="text"
                placeholder="Enter Keywords"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Google Analytic Key:
                <span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Google analytic Key"
                />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Enter Facebook Pixel Code:
                <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="mailUsername"
                name="facebookPixelCode"
                className="form-control "
                autoComplete="off"
                placeholder="Enter Facebook Pixel Code"
                required
              />
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

export default SeoSetting;
