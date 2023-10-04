import React from "react";
import { Camera,  Mic, QuestionCircle, QuestionCircleFill } from "react-bootstrap-icons";
import {  VideoCallOutlined } from "@material-ui/icons";


const ViewMeeting = () => {
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
                    <h4 className="card-title">View Meeting: 72884530458</h4>
                  </div>
                </div>
              </div>
              <div className="card-body pt-3">
                <h5><strong>Meeting Id:</strong> 72884530458 </h5>
                <hr className="bg-dark"/>
                <h5><strong>Meeting Topic:</strong> Meeting Topic</h5>
                <hr className="bg-dark"/>
                <h5><strong>Meeting Agenda:</strong> Test</h5>
                <hr className="bg-dark"/>
                <h5><strong>Start Time:</strong> 26-06-2023 | 02:36:50 PM</h5>
                <hr className="bg-dark"/>
                <h5><strong>Invite Url:</strong></h5>
                <hr className="bg-dark"/>
                <h5><strong>Meeting Duration:</strong> 30 min.</h5>
                <hr className="bg-dark"/>
                <h5><strong>Other Meeting Settings:</strong></h5>
                <hr className="bg-dark"/>
                <h5><Mic/> Audio: Computer and Internet Call</h5>
                <h5><Camera/> Host Video: Enable</h5>
                <h5><VideoCallOutlined/> Join before Host: No</h5>
                <h5><VideoCallOutlined/> Participant Video: Disabled</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMeeting;
