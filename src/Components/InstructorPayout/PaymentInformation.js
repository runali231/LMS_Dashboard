
import React, { useState } from "react";

const PaymentInformation = () => {

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
                                <h4 className="mx-2">Setup Payment Information</h4>
                            </div>
                            <div className="card-body">
                                <div className="container-fluid py-3">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                            <div className="form-group form-group-sm">
                                                <label className="control-label fw-bold">Type<span className="text-danger">*</span></label>
                                                <select className="form-select form-select-md">
                                                    <option>Choose payment type</option>
                                                    <option>Paytm</option>
                                                    <option>Paypal</option>
                                                    <option>Bank Transfer</option>

                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                            <h5>PAYTM PAYMENT</h5>
                                            <div className="form-group form-group-sm">
                                                <label className="control-label fw-bold">Paytm Mobile No.<span className="text-danger">*</span></label>
                                                <input type="text" id="mobileNo" name="mobileNo" className="form-control " autoComplete="off" placeholder="Enter mobile No." required />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row mt-4">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                            <h5>PAYPAL PAYMENT</h5>
                                            <div className="form-group form-group-sm">
                                                <label className="control-label fw-bold">Paypal Email<span className="text-danger">*</span></label>
                                                <input type="text" id="email" name="email" className="form-control " autoComplete="off" placeholder="Enter paypal email id" required />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row mt-2">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                            <div className="form-group form-group-sm">
                                                <label className="control-label fw-bold">Account Holder Name <span className="text-danger">*</span></label>
                                                <input type="text" id="accountHolderName" name="accountHolderName" className="form-control " autoComplete="off" placeholder="Enter account holder name" required />
                                            </div>
                                        </div>

                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-3 mt-lg-0">
                                            <div className="form-group form-group-sm">

                                                <label className="control-label fw-bold">Bank Name <span className="text-danger">*</span></label>
                                                <input type="text" id="bankName" name="bankName" autoComplete="off" className="form-control " placeholder="Enter bank name" required />
                                                <span id="message"></span>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                            <div className="form-group form-group-sm">
                                                <label className="control-label fw-bold">IFSC Code<span className="text-danger">*</span></label>
                                                <input type="text" id="ifscCode" name="ifscCode" className="form-control " autoComplete="off" placeholder="Enter IFSC code" required />
                                            </div>
                                        </div>

                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-3 mt-lg-0">
                                            <div className="form-group form-group-sm">

                                                <label className="control-label fw-bold">Account Number<span className="text-danger">*</span></label>
                                                <input type="text" id="accountNumber" name="accountNumber" autoComplete="off" className="form-control " placeholder="Enter account number" required />
                                                <span id="message"></span>

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

export default PaymentInformation;
