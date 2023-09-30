
import React, { useState } from "react";

const BankDetails = () => {

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
                                <h4 className="mx-2">Bank Details</h4>
                            </div>
                            <div className="card-body">
                                <div className="container-fluid py-3">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                            <div className="form-group form-group-sm">
                                                <label className="control-label fw-bold">Bank Enable<span className="text-danger">*</span></label>
                                                <br/>
                                               <button className="btn btn-success">Enable</button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                            <div className="form-group form-group-sm">
                                                <label className="control-label fw-bold">Account Holder Name<span className="text-danger">*</span></label>
                                                <input type="text" id="holderName" name="holderName" className="form-control " autoComplete="off" placeholder="Account Holder Name" required />
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="row mt-4">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 "> 
                                            <div className="form-group form-group-sm">
                                                <label className="control-label fw-bold">Bank Name<span className="text-danger">*</span></label>
                                                <input type="text" id="bankName" name="bankName" className="form-control " autoComplete="off" placeholder="Bank Name" required />
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="row mt-4">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                            <div className="form-group form-group-sm">
                                                <label className="control-label fw-bold">IFSC Code<span className="text-danger">*</span></label>
                                                <input type="text" id="ifscCode" name="ifscCode" className="form-control " autoComplete="off" placeholder="IFSC Code" required />
                                            </div>
                                        </div>

                                        
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                            <div className="form-group form-group-sm">
                                                <label className="control-label fw-bold">Account Number<span className="text-danger">*</span></label>
                                                <input type="text" id="accountNumber" name="accountNumber" className="form-control " autoComplete="off" placeholder="Account Number" required />
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

export default BankDetails;
