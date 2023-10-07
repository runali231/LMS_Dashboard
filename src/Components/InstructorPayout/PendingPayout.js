import React from 'react'
import { Table } from 'react-bootstrap';


const PendingPayout = () => {
    const headerCellStyle = {
        backgroundColor: 'rgb(27, 90, 144)', // Replace with your desired background color
        color: '#fff', // Optional: Set the text color to contrast with the background
    };

    return (
        <>
            <div className='container-fluid'>

                <div className="card m-3" style={{ 'boxShadow': '0px 1px 5px rgba(0, 0, 0, 0.1)' }}>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className="card-header" /* style={{ backgroundColor: 'white' }} */>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h4 className="card-title">Pending Payout</h4>
                                    </div>
                                    <div className="col-md-2  justify-content-end">

                                        <input type="text" id="custom-search" className="form-control " placeholder="Search" />
                                    </div>
                                    <div className="col-auto d-flex flex-wrap">
                                        <div className="form-custom ">
                                            <div id="tableSearch" className="dataTables_wrapper"></div>
                                        </div>


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
                                <Table striped hover responsive className="border " >
                                    <thead >
                                        <tr>
                                            <th scope="col" style={headerCellStyle}>Sr No.</th>
                                            <th scope="col" style={headerCellStyle}>Instructor</th>
                                            <th scope="col" style={headerCellStyle}>View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={1}>
                                            <td>1</td>
                                            <td>Mansi</td>
                                            <td className='d-flex flex-wrap'><button type="button" className="btn btn-primary btn-sm">View Pending Payout</button>&nbsp;&nbsp;<button type="button" className="btn btn-success btn-sm">View Paid Payout</button></td>
                                        </tr>
                                        <tr key={2}>
                                            <td>2</td>
                                            <td>Runali</td>
                                            <td className='d-flex flex-wrap'><button type="button" className="btn btn-primary btn-sm">View Pending Payout</button>&nbsp;&nbsp;<button type="button" className="btn btn-success btn-sm">View Paid Payout</button></td>
                                        </tr>
                                        <tr key={3}>
                                            <td>3</td>
                                            <td>Rushika</td>
                                            <td className='d-flex flex-wrap'><button type="button" className="btn btn-primary btn-sm">View Pending Payout</button>&nbsp;&nbsp;<button type="button" className="btn btn-success btn-sm">View Paid Payout</button></td>
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
                          <button
                            className="page-link"
                            /* onClick={handlePrevious} */ aria-label="Previous"
                          >
                            <span aria-hidden="true">&laquo;</span>
                          </button>
                        </li>
                        <li className="page-item active">
                          <button
                            className="page-link" /* onClick={handlePageClick(1)} */
                          >
                            1
                          </button>
                        </li>
                        <li className="page-item">
                          <button
                            className="page-link" /* onClick={handlePageClick(2)} */
                          >
                            2
                          </button>
                        </li>
                        <li className="page-item">
                          <button
                            className="page-link" /* onClick={handlePageClick(3)} */
                          >
                            3
                          </button>
                        </li>
                        <li className="page-item">
                          <button
                            className="page-link"
                            /* onClick={handleNext} */ aria-label="Next"
                          >
                            <span aria-hidden="true">&raquo;</span>
                          </button>
                        </li>
                      </ul>
                    </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              
            </div >
        </>
    )
}

export default PendingPayout