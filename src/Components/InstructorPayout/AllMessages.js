import React, { useEffect } from 'react'
import $ from 'jquery';
import '../Css/DataTable.css'
import { Eye } from 'react-bootstrap-icons';
import { Table, Button } from 'react-bootstrap';
import { Delete, Edit } from '@material-ui/icons';
import PendingPayout from './PendingPayout';


const AllMessages = () => {
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
                                        <h4 className="card-title">All Messages</h4>
                                    </div>
                                    <div className="col-md-2  justify-content-end">

                                        <input type="text" id="custom-search" className="form-control " placeholder="Search" />
                                    </div>

                                </div>
                            </div>
                            <div className='card-body pt-3'>
                                <div className="row " >
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
                                            <th scope="col" style={headerCellStyle}>Name</th>
                                            <th scope="col" style={headerCellStyle}>Phone</th>
                                            <th scope="col" style={headerCellStyle}>Email</th>
                                            <th scope="col" style={headerCellStyle}>Message</th>
                                            <th scope="col" style={headerCellStyle}>View</th>
                                            <th scope="col" style={headerCellStyle}>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={1}>
                                            <td>Admin </td>
                                            <td>9075893456</td>
                                            <td>admin@gmail.com</td>
                                            <td>Welcome...........</td>
                                            <td><button className='btn btn-success' data-bs-toggle="modal"
                                                data-bs-target="#exampleModal1">View</button></td>
                                            <td><button className='btn btn-danger'><Delete /></button></td>
                                        </tr>
                                        <tr key={2}>
                                            <td>Merry </td>
                                            <td>9075894566</td>
                                            <td>merry@gmail.com</td>
                                            <td>Good Morning</td>
                                            <td><button className='btn btn-success' data-bs-toggle="modal"
                                                data-bs-target="#exampleModal1">View</button></td>
                                            <td><button className='btn btn-danger'><Delete /></button></td>
                                        </tr>
                                        <tr key={3}>
                                            <td>Admin </td>
                                            <td>9075893456</td>
                                            <td>admin@gmail.com</td>
                                            <td>Welcome...........</td>
                                            <td><button className='btn btn-success' data-bs-toggle="modal"
                                                data-bs-target="#exampleModal1">View</button></td>
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
                                    Messages
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body p-3">
                                <h4>Admin</h4>
                                <h6>instructor@mediacity.co.in</h6>
                                <div className='d-flex justify-content-between'>
                                    <h6>Phone: 9869547330</h6>
                                    <h6 className='text-end'>7th May 2023</h6>
                                </div>
                                <hr className='bg-dark'/>
                                <h5 className='py-3'>Hello From Admin</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AllMessages