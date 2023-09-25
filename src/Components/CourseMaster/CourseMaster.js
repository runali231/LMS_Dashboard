import React, { useEffect } from 'react'
import $ from 'jquery';
import '../Css/DataTable.css'
import { Edit } from '@material-ui/icons';
import { Eye } from 'react-bootstrap-icons';


const CourseMaster = () => {


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
                                        <h5 className="card-title">Course Master</h5>
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
                                            <th scope="col">Course Name</th>
                                            <th scope="col">Session Name</th>
                                            <th scope="col">Course Duration</th>
                                            <th scope="col">Course Category</th>
                                            <th scope="col">Course Level</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Study Material</th>
                                            <th scope="col">Certificate</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><Edit data-bs-toggle="modal"
                                                data-bs-target="#exampleModal2" />&nbsp;&nbsp;
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
                                           
                                        </tr>
                                        <tr>
                                            <td><Edit data-bs-toggle="modal"
                                                data-bs-target="#exampleModal2" />&nbsp;&nbsp;
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
                                          
                                        </tr>
                                        <tr>
                                            <td><Edit data-bs-toggle="modal"
                                                data-bs-target="#exampleModal2" />&nbsp;&nbsp;
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
                                         
                                        </tr>
                                    </tbody>
                                </table>
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
                                    Add New Course
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
                                            <label className="control-label">Course Name <span className="text-danger">*</span></label>
                                            <input type="text" id="courseName" name="courseName" className="form-control mt-2" autocomplete="off" placeholder="Enter course name" required />
                                        </div>
                                    </div>

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">

                                            <label className="control-label">Session Name<span className="text-danger">*</span></label>
                                            <input type="text" id="sessionName" name="sessionName" autocomplete="off" className="form-control mt-2" placeholder="Enter session name" required />
                                            <span id="message"></span>

                                        </div>
                                    </div>

                                </div>
                                <div className="row mt-2">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Course Duration<span className="text-danger">*</span></label>
                                            <input type="text" id="courseDuration" name="courseDuration" className="form-control mt-2" autocomplete="off" placeholder="Enter course duration" required />
                                        </div>
                                    </div>

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">

                                            <label className="control-label">Course Category<span className="text-danger">*</span></label>
                                            <input type="text" id="courseCategory" name="courseCategory" autocomplete="off" className="form-control mt-2" placeholder="Enter course category" required />
                                            <span id="message"></span>

                                        </div>
                                    </div>

                                </div>
                                <div className="row mt-2">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Course level <span className="text-danger">*</span></label>
                                            <input type="text" id="courseLevel" name="courseLevel" className="form-control mt-2" autocomplete="off" placeholder="Enter course level" required />
                                        </div>
                                    </div>

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">

                                            <label className="control-label">Price <span className="text-danger">*</span></label>
                                            <input type="text" id="price" name="price" autocomplete="off"  className="form-control mt-2" placeholder="Enter price" required />
                                            <span id="message"></span>

                                        </div>
                                    </div>

                                </div>
                                <div className="row mt-2">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Study Material<span className="text-danger">*</span></label>
                                            <input type="text" id="studyMaterial" name="studyMaterial" className="form-control mt-2" autocomplete="off" placeholder="Enter study material" required />
                                        </div>
                                    </div>

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Certificate<span className="text-danger">*</span></label>
                                            <input type="text" id="certificate" name="certificate" className="form-control mt-2" autocomplete="off" placeholder="Enter certificate" required />
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
                                   Edit Course
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
                                            <label className="control-label">Course Name <span className="text-danger">*</span></label>
                                            <input type="text" id="courseName" name="courseName" className="form-control mt-2" autocomplete="off" placeholder="Enter course name" required />
                                        </div>
                                    </div>

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">

                                            <label className="control-label">Session Name<span className="text-danger">*</span></label>
                                            <input type="text" id="sessionName" name="sessionName" autocomplete="off" className="form-control mt-2" placeholder="Enter session name" required />
                                            <span id="message"></span>

                                        </div>
                                    </div>

                                </div>
                                <div className="row mt-2">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Course Duration<span className="text-danger">*</span></label>
                                            <input type="text" id="courseDuration" name="courseDuration" className="form-control mt-2" autocomplete="off" placeholder="Enter course duration" required />
                                        </div>
                                    </div>

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">

                                            <label className="control-label">Course Category<span className="text-danger">*</span></label>
                                            <input type="text" id="courseCategory" name="courseCategory" autocomplete="off" className="form-control mt-2" placeholder="Enter course category" required />
                                            <span id="message"></span>

                                        </div>
                                    </div>

                                </div>
                                <div className="row mt-2">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Course level <span className="text-danger">*</span></label>
                                            <input type="text" id="courseLevel" name="courseLevel" className="form-control mt-2" autocomplete="off" placeholder="Enter course level" required />
                                        </div>
                                    </div>

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">

                                            <label className="control-label">Price <span className="text-danger">*</span></label>
                                            <input type="text" id="price" name="price" autocomplete="off"  className="form-control mt-2" placeholder="Enter price" required />
                                            <span id="message"></span>

                                        </div>
                                    </div>

                                </div>
                                <div className="row mt-2">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Study Material<span className="text-danger">*</span></label>
                                            <input type="text" id="studyMaterial" name="studyMaterial" className="form-control mt-2" autocomplete="off" placeholder="Enter study material" required />
                                        </div>
                                    </div>

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Certificate<span className="text-danger">*</span></label>
                                            <input type="text" id="certificate" name="certificate" className="form-control mt-2" autocomplete="off" placeholder="Enter certificate" required />
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

export default CourseMaster