import React, { useEffect } from 'react'
import $ from 'jquery';
import '../Css/DataTable.css'
import { Eye } from 'react-bootstrap-icons';
import { Table, Button } from 'react-bootstrap';
import { Delete, Edit } from '@material-ui/icons';


const EmployeeMaster = () => {
    const data = [
        { name: 'John', age: 30, country: 'USA' },
        { name: 'Alice', age: 25, country: 'Canada' },
        { name: 'Bob', age: 40, country: 'UK' },
        // Add more data here
    ];

    useEffect(() => {
        $('#example').DataTable({
            destroy: true,
            searching: false,
            responsive: true
        });

    }, []);
    return (
        <>
            <div className='container-fluid'>

                <div className="card m-3" style={{ 'boxShadow': '0px 1px 5px rgba(0, 0, 0, 0.1)' }}>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className="card-header" style={{ backgroundColor: 'white' }}>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="card-title">Employee Master</h5>
                                    </div>
                                    <div className="col-md-2  justify-content-end">

                                        <input type="text" id="custom-search" className="form-control " placeholder="Search" />
                                    </div>
                                    <div className="col-auto d-flex flex-wrap">
                                        <div className="form-custom me-2">
                                            <div id="tableSearch" className="dataTables_wrapper"></div>
                                        </div>

                                        <div className="btn btn-add" title="Add New" onClick={() => { }}>
                                            <button className='btn btn-md text-light' type='button' data-bs-toggle="modal"
                                                data-bs-target="#exampleModal1" style={{ backgroundColor: '#1B5A90' }}>Add</button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='card-body pt-5'>
                                <table id="example" className="display mt-5 table-responsive table-borderless hover-table" style={{ width: '100%' }}>

                                    <thead className='text-light' style={{ backgroundColor: '#1B5A90' }}>
                                        <tr>
                                            <th scope="col">Action</th>
                                            <th scope="col">Employee Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Designation</th>
                                            <th scope="col">Date of Birth</th>
                                            <th scope="col">Contact No.</th>
                                            <th scope="col">Email Id</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Remark</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td ><Edit data-bs-toggle="modal"
                                                data-bs-target="#exampleModal1" />&nbsp;&nbsp;
                                                <Eye data-bs-toggle="modal"
                                                    data-bs-target="#parameterValueMaster" />
                                            </td>

                                            <td>Employee Id</td>
                                            <td>Name</td>
                                            <td>Designation</td>
                                            <td>Date of Birth</td>
                                            <td>Contact No.</td>
                                            <td>Email Id</td>
                                            <td>Address</td>
                                            <td>Gender</td>
                                            <td>Status</td>
                                            <td>Remark</td>
                                        </tr>
                                        <tr>
                                            <td><Edit data-bs-toggle="modal"
                                                data-bs-target="#exampleModal1" />&nbsp;&nbsp;
                                                <Eye data-bs-toggle="modal"
                                                    data-bs-target="#parameterValueMaster" />
                                            </td>

                                            <td>Employee Id</td>
                                            <td>Name</td>
                                            <td>Designation</td>
                                            <td>Date of Birth</td>
                                            <td>Contact No.</td>
                                            <td>Email Id</td>
                                            <td>Address</td>
                                            <td>Gender</td>
                                            <td>Status</td>
                                            <td>Remark</td>
                                        </tr>
                                        <tr>
                                            <td ><Edit data-bs-toggle="modal"
                                                data-bs-target="#exampleModal1" />&nbsp;&nbsp;
                                                <Eye data-bs-toggle="modal"
                                                    data-bs-target="#parameterValueMaster" />
                                            </td>

                                            <td>Employee Id</td>
                                            <td>Name</td>
                                            <td>Designation</td>
                                            <td>Date of Birth</td>
                                            <td>Contact No.</td>
                                            <td>Email Id</td>
                                            <td>Address</td>
                                            <td>Gender</td>
                                            <td>Status</td>
                                            <td>Remark</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th scope="col">Action</th>
                                            <th scope="col">Employee Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Designation</th>
                                            <th scope="col">Date of Birth</th>
                                            <th scope="col">Contact No.</th>
                                            <th scope="col">Email Id</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Remark</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr key={1}>
                                        <td ><Edit data-bs-toggle="modal"
                                                data-bs-target="#exampleModal1" />&nbsp;&nbsp;
                                                <Eye data-bs-toggle="modal"
                                                    data-bs-target="#parameterValueMaster" />
                                            </td>

                                            <td>Employee Id</td>
                                            <td>Name</td>
                                            <td>Designation</td>
                                            <td>Date of Birth</td>
                                            <td>Contact No.</td>
                                            <td>Email Id</td>
                                            <td>Address</td>
                                            <td>Gender</td>
                                            <td>Status</td>
                                            <td>Remark</td>
                                        </tr>
                                        <tr key={1}>
                                            <td>Student 2</td>

                                            <td>
                                                <Button
                                                    variant="primary"

                                                >
                                                    Provide Feedback
                                                </Button>
                                            </td>
                                            <td>
                                                <Button
                                                    variant="primary"

                                                >

                                                    <Edit />
                                                </Button>
                                            </td>
                                            <td>
                                                <Button
                                                    variant="primary"

                                                >

                                                    <Delete />
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="modal fade"
                    id="exampleModal1"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                //  id="dialog-AddEmployee" role="dialog"
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Add New Parameter
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Employee Name <span className="text-danger">*</span></label>
                                            <input type="text" id="txtEmployeeName" name="txtEmployeeName" className="form-control mt-2" autoComplete="off" placeholder="Enter name" required />
                                        </div>
                                    </div>

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">

                                            <label className="control-label">Email Id <span className="text-danger">*</span></label>
                                            <input type="text" id="txtContactDetails" name="txtContactDetails" autoComplete="off" className="form-control mt-2" placeholder="Enter contact number" required />
                                            <span id="message"></span>

                                        </div>
                                    </div>

                                </div>
                                <div className="row mt-2">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Date of Birth <span className="text-danger">*</span></label>
                                            <input type="text" id="txtEmployeeName" name="txtEmployeeName" className="form-control mt-2" autoComplete="off" placeholder="Enter name" required />
                                        </div>
                                    </div>

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">

                                            <label className="control-label">Contact No  <span className="text-danger">*</span></label>
                                            <input type="text" id="txtContactDetails" name="txtContactDetails" autoComplete="off" className="form-control mt-2" placeholder="Enter contact number" required />
                                            <span id="message"></span>

                                        </div>
                                    </div>

                                </div>
                                <div className="row mt-2">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Designation <span className="text-danger">*</span></label>
                                            <input type="text" id="txtEmployeeName" name="txtEmployeeName" className="form-control mt-2" autoComplete="off" placeholder="Enter name" required />
                                        </div>
                                    </div>

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">

                                            <label className="control-label">Address <span className="text-danger">*</span></label>
                                            <input type="text" id="txtContactDetails" name="txtContactDetails" autoComplete="off" className="form-control mt-2" placeholder="Enter contact number" required />
                                            <span id="message"></span>

                                        </div>
                                    </div>

                                </div>
                                <div className="row mt-2">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Gender<span className="text-danger">*</span></label>
                                            <input type="text" id="txtEmployeeName" name="txtEmployeeName" className="form-control mt-2" autoComplete="off" placeholder="Enter name" required />
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    className="btn btn-success text-white"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="modal fade"
                    id="exampleModal2"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                //  id="dialog-AddEmployee" role="dialog"
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Add New Parameter
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Employee Name <span className="text-danger">*</span></label>
                                            <input type="text" id="txtEmployeeName" name="txtEmployeeName" className="form-control " autoComplete="off" placeholder="Enter name" required />
                                        </div>
                                    </div>

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">

                                            <label className="control-label">Email Id <span className="text-danger">*</span></label>
                                            <input type="text" id="txtContactDetails" name="txtContactDetails" autoComplete="off" className="form-control " placeholder="Enter contact number" required />
                                            <span id="message"></span>

                                        </div>
                                    </div>

                                </div>
                                <div className="row ">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Date of Birth <span className="text-danger">*</span></label>
                                            <input type="text" id="txtEmployeeName" name="txtEmployeeName" className="form-control " autoComplete="off" placeholder="Enter name" required />
                                        </div>
                                    </div>

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">

                                            <label className="control-label">Contact No  <span className="text-danger">*</span></label>
                                            <input type="text" id="txtContactDetails" name="txtContactDetails" autoComplete="off" className="form-control " placeholder="Enter contact number" required />
                                            <span id="message"></span>

                                        </div>
                                    </div>

                                </div>
                                <div className="row ">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Designation <span className="text-danger">*</span></label>
                                            <input type="text" id="txtEmployeeName" name="txtEmployeeName" className="form-control " autoComplete="off" placeholder="Enter name" required />
                                        </div>
                                    </div>

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">

                                            <label className="control-label">Address <span className="text-danger">*</span></label>
                                            <input type="text" id="txtContactDetails" name="txtContactDetails" autoComplete="off"
                                                className="form-control " placeholder="Enter contact number" required />
                                            <span id="message"></span>

                                        </div>
                                    </div>

                                </div>
                                <div className="row ">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Gender<span className="text-danger">*</span></label>
                                            <input type="text" id="txtEmployeeName" name="txtEmployeeName" className="form-control" autoComplete="off" placeholder="Enter name" required />
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    className="btn btn-success text-white"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default EmployeeMaster