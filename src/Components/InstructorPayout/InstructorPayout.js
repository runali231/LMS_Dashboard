
import React, { useState } from "react";

const InstructorPayout = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <section className="container-fluid mt-2">
                <div className="row">
                    <div className="col-lg-12 col-xl-9 col-md-12 col-sm-12 col-12">
                        <div className="card shadow p-2 m-3 mt-5">
                            <div className="card-header" style={{ "backgroundColor": "white" }}>
                                <h4 className="mx-2">Instructor Settings</h4>
                            </div>
                            <div className="card-body">
                                <div className="container-fluid py-3">
                                    <div className="row">
                                        <div className="col-lg-6 ">
                                            <div className="row">
                                                <div className="col-lg-5 col-md-5">
                                                    <label>Instructor Revenue:</label>
                                                </div>
                                                <div className="col-lg-6 col-md-6 mt-2 mt-md-0">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Enter instructor revenue" />
                                                        <span className="input-group-text">%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-2 mt-md-4 mt-lg-0">
                                            <div className="row">
                                                <div className="col-lg-5 col-md-5">
                                                    <label>Admin Revenue</label>
                                                </div>
                                                <div className="col-lg-6 col-md-6 mt-2 mt-md-0">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Enter admin revenue" />
                                                        <span className="input-group-text">%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br className="d-none d-md-block" />
                                    <div className="row ">
                                        <div className="col-lg-6 mt-2 mt-md-0">
                                            <div className="row">
                                                <div className="col-md-5 col-md-5">
                                                    <label>Paytm Enable</label>
                                                </div>
                                                <div className="col-lg-6 col-md-6 mt-2 mt-md-0">
                                                    <button
                                                        className={`btn btn-lg ${isActive ? 'btn-success' : 'btn-danger'}`}
                                                        onClick={toggleButton}
                                                    >
                                                        {isActive ? 'Active' : 'Inactive'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-md-4 mt-lg-0">
                                            <div className="row">
                                                <div className="col-lg-5 col-md-5 mt-2 mt-md-0">
                                                    <label>Paypal Enable</label>
                                                </div>
                                                <div className="col-lg-6 col-md-6 mt-2 mt-md-0">
                                                    <button
                                                        className={`btn btn-lg ${isActive ? 'btn-success' : 'btn-danger'}`}
                                                        onClick={toggleButton}
                                                    >
                                                        {isActive ? 'Active' : 'Inactive'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br className="d-none d-md-block" />
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-lg-5 col-md-5 mt-2 mt-md-0">
                                                    <label>Bank Transfer Enable</label>
                                                </div>
                                                <div className="col-lg-6 col-md-6 mt-2 mt-md-0">
                                                    <button
                                                        className={`btn btn-lg ${isActive ? 'btn-success' : 'btn-danger'}`}
                                                        onClick={toggleButton}
                                                    >
                                                        {isActive ? 'Active' : 'Inactive'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-lg-6 mt-2 mt-md-0">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InstructorPayout;
