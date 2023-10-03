import React, { useEffect } from "react";
import { EyeFill} from "react-bootstrap-icons";

const GeneralSetting = () => {

  return (
    <>
      <div className="container-fluid">
                <div className="row mt-4">
                  <div className="col-lg-12">
                   
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 ">
                            <div className="form-group form-group-sm">
                              <label className="control-label fw-bold">
                                Text/Logo:
                                <span className="text-danger">*</span>
                              </label>
                              <br/>
                              <button className="btn btn-success">Logo</button>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 mt-4 mt-lg-0">
                            <div className="form-group form-group-sm">
                              <label className="control-label fw-bold">
                              Project Logo - Size: 120*40
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="file"
                                id="projectLogo"
                                name="projectLogo"
                                className="form-control"
                                autoComplete="off"
                               
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="form-group form-group-sm">
                              <label className="control-label fw-bold">
                                Project Title:
                                <span className="text-danger">*</span>
                              </label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Project Title"
                                />
                                
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 mt-4 mt-lg-0">
                            <div className="form-group form-group-sm">
                              <label className="control-label fw-bold">
                                Project Favicon- Size : 35*35
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="file"
                                id="favicon"
                                name="favicon"
                                className="form-control "
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="form-group form-group-sm">
                              <label className="control-label fw-bold">
                               App Url:
                                <span className="text-danger">*</span>
                              </label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter App Url"
                                />
                                
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
                            <div className="form-group form-group-sm">
                              <label className="control-label fw-bold">
                                Contact No: 
                                <span className="text-danger">*</span>
                              </label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Contact No"
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
                                Copyright Text:
                                <span className="text-danger">*</span>
                              </label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Copyright Text"
                                />
                                
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
                            <div className="form-group form-group-sm">
                              <label className="control-label fw-bold">
                                Email:
                                <span className="text-danger">*</span>
                              </label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Email"
                                />                              
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="form-group form-group-sm">
                              <label className="control-label fw-bold">
                                Address:
                                <span className="text-danger">*</span>
                              </label>
                              <div className="input-group">
                              <textarea className="form-control" rows="3" id="address" name="text" placeholder="Enter Address"></textarea>
                                
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 mt-4 mt-lg-0">
                            <div className="form-group form-group-sm">
                              <label className="control-label fw-bold">
                                Right Click:
                                <span className="text-danger">*</span>
                              </label>
                              <br/>
                              <button className="btn btn-success">Enable</button>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 mt-4 mt-lg-0">
                            <div className="form-group form-group-sm">
                              <label className="control-label fw-bold">
                                Inspect Element:
                                <span className="text-danger">*</span>
                              </label>
                              <br/>
                              <button className="btn btn-success">Enable</button>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="form-group form-group-sm">
                              <label className="control-label fw-bold">
                                Welcome Email for User:
                                <span className="text-danger">*</span>
                              </label>
                              <br/>
                              <button className="btn btn-success">Enable</button>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 mt-4 mt-lg-0">
                            <div className="form-group form-group-sm">
                              <label className="control-label fw-bold">
                                Become An Instructor:
                                <span className="text-danger">*</span>
                              </label>
                              <br/>
                              <button className="btn btn-success">Enable</button>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 mt-4 mt-lg-0">
                            <div className="form-group form-group-sm">
                              <label className="control-label fw-bold">
                                App Debug:
                                <span className="text-danger">*</span>
                              </label>
                              <br/>
                              <button className="btn btn-success">Enable</button>
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
                        {/* </div> */}
                      </div>
                    </div>
                
              </div>
            
       
    </>
  );
};

export default GeneralSetting;
