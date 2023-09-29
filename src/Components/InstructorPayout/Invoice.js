import React, { useEffect } from 'react'
import $ from 'jquery';
import '../Css/DataTable.css'
import { Eye } from 'react-bootstrap-icons';
import { Table, Button } from 'react-bootstrap';
import { Delete, Edit } from '@material-ui/icons';
import PendingPayout from './PendingPayout';


const Invoice = () => {
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
            <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                <div className="card m-3" style={{ 'boxShadow': '0px 1px 5px rgba(0, 0, 0, 0.1)' }}>
                   
                            <div className="card-header" /* style={{ backgroundColor: 'white' }} */>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h4 className="card-title">Invoice</h4>
                                    </div>
                                 
                                </div>
                            </div>
                            <div className='card-body pt-3'>                             
                              <div className='card-header bg-light'>
                                <h3>LMS</h3>
                                <h5>Date: 29 April 2023</h5>
                              </div>
                              <div className='card-body bg-secondary'>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <p>From</p>
                                        <p><strong>Admin</strong></p>
                                        <p>Address: Company 12345 South Main Street Anywhere Rajasthan, INDIA</p>
                                        <p>Phone: 9123456789</p>
                                        <p>Email: admin@mediacity.co.in</p>
                                    </div>
                                    <div className='col-lg-4'>
                                        <p>To</p>
                                        <p><strong>Instructor</strong></p>
                                        <p>Address: Company 12345 South Main Street Anywhere Rajasthan, INDIA</p>
                                        <p>Phone: 9123456789</p>
                                        <p>Email: admin@mediacity.co.in</p>
                                    </div>
                                    <div className='col-lg-4'>
                                      
                                        <p><strong>OrderID</strong></p>
                                        <p>Address: Company 12345 South Main Street Anywhere Rajasthan, INDIA</p>
                                        <p>Phone: 9123456789</p>
                                        <p>Email: admin@mediacity.co.in</p>
                                    </div>
                                </div>
                             
                              </div>
                              <Table striped borderless hover responsive className="border mt-5" >
                                    <thead >
                                        <tr>
                                          
                                            <th scope="col" style={headerCellStyle}>Instructor</th>
                                            <th scope="col" style={headerCellStyle}>Currency</th>
                                            <th scope="col" style={headerCellStyle}>Total</th>
                                            <th scope="col" style={headerCellStyle}>Payment Method</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={1}>
                                            
                                            <td>Instructor</td>
                                           <td>USD</td>
                                           <td>$600</td>
                                           <td></td>
                                        </tr>
                                        <tr key={2}>
                                           
                                        <td>Instructor</td>
                                           <td>USD</td>
                                           <td>$600</td>
                                           <td></td>
                                        </tr>
                                        <tr key={3}>
                                             
                                        <td>Instructor</td>
                                           <td>USD</td>
                                           <td>$600</td>
                                           <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <button type="button" className="btn btn-secondary mt-3">Print Invoice</button>
                            </div>
                         </div>
                    </div> 
                </div>

              
            </div >
        </>
    )
}

export default Invoice