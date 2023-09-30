import React, { useEffect } from 'react'
import $ from 'jquery';
import '../Css/DataTable.css'
import { Table, Button } from 'react-bootstrap';
import { Cancel, Delete, Edit } from '@material-ui/icons';
import { Check } from 'react-bootstrap-icons';



const Language = () => {
    const headerCellStyle = {
        backgroundColor: 'rgb(27, 90, 144)', // Replace with your desired background color
        color: '#fff', // Optional: Set the text color to contrast with the background
    };
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
                            <div className="card-header" /* style={{ backgroundColor: 'white' }} */>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h4 className="card-title">Language</h4>
                                    </div>


                                </div>
                            </div>
                            <div className='card-body pt-3'>
                                <ul className="nav nav-tabs customtab" role="tablist">
                                    <li className="nav-item"><a className="nav-link active show" data-toggle="tab" href="#profile2" role="tab" aria-selected="true"><span className="hidden-sm-up"></span><span className="hidden-xs-down">Language</span></a> </li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#home2" role="tab" aria-selected="false"><span className="hidden-sm-up"></span><span className="hidden-xs-down">Front Static Word Translation</span></a> </li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#profile3" role="tab" aria-selected="false"><span className="hidden-sm-up"></span><span className="hidden-xs-down">Admin Static Word Translation</span></a> </li>

                                </ul>
                                <button className='btn btn-primary mt-4' data-bs-toggle="modal"
                                    data-bs-target="#exampleModal1">Add</button>
                                <div className="row mt-4" >
                                    <div className="col-lg-3 d-flex"><h6 className='mt-2'>Show</h6>&nbsp;&nbsp;<select className="form-select w-auto" aria-label="Default select example">
                                        <option selected>10</option>
                                        <option value="1">10</option>
                                        <option value="2">50</option>
                                        <option value="3">100</option>
                                    </select>&nbsp;&nbsp;
                                        <h6 className='mt-2'>entries</h6></div>
                                </div>
                                <br />
                                <Table striped borderless hover responsive className="border " >
                                    <thead >
                                        <tr>
                                            <th scope="col" style={headerCellStyle}>Sr No.</th>
                                            <th scope="col" style={headerCellStyle}>Name</th>
                                            <th scope="col" style={headerCellStyle}>Local</th>
                                            <th scope="col" style={headerCellStyle}>Default</th>
                                            <th scope="col" style={headerCellStyle}>Edit</th>
                                            <th scope="col" style={headerCellStyle}>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={1}>
                                            <td>1 </td>
                                            <td>English</td>
                                            <td>en</td>
                                            <td><Check /></td>

                                            <td><button className='btn btn-success' data-bs-toggle="modal"
                                                data-bs-target="#exampleModal1"><Edit /></button></td>
                                            <td><button className='btn btn-danger'><Delete /></button></td>
                                        </tr>
                                        <tr key={2}>
                                            <td>2 </td>
                                            <td>Hindi</td>
                                            <td>hi</td>
                                            <td><Cancel /></td>
                                            <td><button className='btn btn-success' data-bs-toggle="modal"
                                                data-bs-target="#exampleModal1"><Edit /></button></td>
                                            <td><button className='btn btn-danger'><Delete /></button></td>
                                        </tr>
                                        <tr key={3}>
                                            <td>3 </td>
                                            <td>Marathi</td>
                                            <td>en</td>
                                            <td><Check /></td>

                                            <td><button className='btn btn-success' data-bs-toggle="modal"
                                                data-bs-target="#exampleModal1"><Edit /></button></td>
                                            <td><button className='btn btn-danger'><Delete /></button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div className="row">
                                    <div className='col-lg-4'>
                                        <h6>Showing 1 to 3 of 3 entries</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                    </div>
                                    <div className='col-lg-4'>
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-end">
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                    </a>
                                                </li>
                                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
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
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Add Language
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
                                            <label className="control-label">Local<span className="text-danger">*</span></label>
                                            <input type="text" id="txtEmployeeName" name="txtEmployeeName" className="form-control " autoComplete="off" placeholder="Please enter language local name" required />
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Name<span className="text-danger">*</span></label>
                                            <input type="text" id="txtEmployeeName" name="txtEmployeeName" className="form-control " autoComplete="off" placeholder="Please enter language name eg: English" required />
                                        </div>
                                    </div>


                                </div>

                                <div className="row mt-lg-3">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                        <div className="form-group form-group-sm">
                                            <label className="control-label">Set Default <span className="text-danger">*</span></label>
                                            <div className="form-check ml-2">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

                                            </div>
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
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Language