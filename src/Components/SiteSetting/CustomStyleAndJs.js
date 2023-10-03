import React, { useEffect } from "react";
import $ from "jquery";
import "../Css/DataTable.css";
import { Eye, EyeFill, Facebook, Google } from "react-bootstrap-icons";
import { Table, Button } from "react-bootstrap";
import { Delete, Edit, GitHub, ViewAgenda } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const CustomStyleAndJs = () => {
  const headerCellStyle = {
    backgroundColor: "rgb(27, 90, 144)", // Replace with your desired background color
    color: "#fff", // Optional: Set the text color to contrast with the background
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Custom CSS:
                <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                rows="8"
                id="description"
                name="text"
                placeholder="Enter Custom CSS"
              ></textarea>
              <br />

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                //   onClick={handleAddCourseForm}
              >
                Add CSS
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Custom JS:
                <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                rows="8"
                id="description"
                name="text"
                placeholder="Enter Custom JS"
              ></textarea>
            </div>
          </div>
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          //   onClick={handleAddCourseForm}
        >
          Add JS
        </button>
      </div>
    </>
  );
};

export default CustomStyleAndJs;
