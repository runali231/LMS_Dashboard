import React, { useEffect } from 'react'
import $ from 'jquery';
import '../Css/DataTable.css'
import { Eye } from 'react-bootstrap-icons';
import { Table, Button } from 'react-bootstrap';
import { Delete, Edit } from '@material-ui/icons';
import PendingPayout from './PendingPayout';


const PayToInstructor = () => {
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
                        <div className='col-lg-8 col-md-12'>
                <div className="card m-3" style={{ 'boxShadow': '0px 1px 5px rgba(0, 0, 0, 0.1)' }}>
                   
                            <div className="card-header" /* style={{ backgroundColor: 'white' }} */>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h4 className="card-title">Pay To Instructor</h4>
                                    </div>
                                 
                                </div>
                            </div>
                            <div className='card-body pt-3'>                             
                               <div className="card p-4 bg-secondary">
                                <h5><strong>Instructor:</strong> Instructor</h5>
                                <h5><strong>Total Instructor Revenue:</strong> 720</h5>
                               </div>
                               
                               <h6 className='mt-5'><strong>PayPal Email:</strong> info@gmail.com</h6>
                            
                               <button type="button" className="btn btn-secondary mt-3">Pay with PayPal</button>

                               <div className='mt-4 '>
                                <h4>Bank Transfer</h4>
                                <div className='card p-4'>
                                <h5>Account holder Name: 3456789</h5>
                                <hr style={{backgroundColor:"black"}}/>
                                <h5>Bank Name: Union Bank</h5>
                                <hr style={{backgroundColor:"black"}}/>
                                <h5>IFSC Code: </h5>
                                <hr style={{backgroundColor:"black"}}/>
                                <h5>Bank Account Number: 12345678</h5>
                                </div>
                                <button type="button" className="btn btn-secondary mt-3">Pay to instructor</button>
                               </div>
                            </div>
                         </div>
                    </div> 
                </div>

              
            </div >
        </>
    )
}

export default PayToInstructor