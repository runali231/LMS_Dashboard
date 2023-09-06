import React, { useEffect } from 'react'
import $ from 'jquery';
import '../Css/DataTable.css'
import { Edit} from '@material-ui/icons';
import { Eye } from 'react-bootstrap-icons';


const ParameterMaster = () => {
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
                    <h5 className="card-title">Parameter Master</h5>
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
                      <th scope="col">Code</th>
                      <th scope="col">Name</th>
                      <th scope="col">Status</th>
                      <th scope="col">Updated by</th>
                      <th scope="col">Updated date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row"><Edit data-bs-toggle="modal"
                        data-bs-target="#exampleModal1" />&nbsp;&nbsp;
                        <Eye data-bs-toggle="modal"
                          data-bs-target="#parameterValueMaster" />
                      </td>
                      <td>1</td>
                      <td>BloodGroup</td>
                      <td>Status</td>
                      <td>Chetan</td>
                      <td>06/09/2023</td>

                    </tr>
                    <tr>
                      <td scope="row"><Edit data-bs-toggle="modal"
                        data-bs-target="#exampleModal1" />&nbsp;&nbsp;
                        <Eye data-bs-toggle="modal"
                          data-bs-target="#parameterValueMaster" />
                      </td>
                      <td>1</td>
                      <td>BloodGroup</td>
                      <td>Status</td>
                      <td>Chetan</td>
                      <td>06/09/2023</td>
                    </tr>
                    <tr>
                      <td scope="row"><Edit data-bs-toggle="modal"
                        data-bs-target="#exampleModal1" />&nbsp;&nbsp;
                        <Eye data-bs-toggle="modal"
                          data-bs-target="#parameterValueMaster" />
                      </td>
                      <td>1</td>
                      <td>BloodGroup</td>
                      <td>Status</td>
                      <td>Chetan</td>
                      <td>06/09/2023</td>
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
        >
          <div className="modal-dialog modal-md">
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
                <section className="container-fluid ">
                  <div className="container-fluid py-3">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor='code'>Code</label>
                          </div>
                          <div className="col-lg-6 mt-2 mt-md-0">
                            <input
                              // defaultValue="Initial text"
                              type="text"
                              className="form-control"
                              id="sDate"
                              placeholder="Enter Code"
                              name="date"

                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className='row'>
                      <div className="col-lg-12 mt-2 mt-md-0">
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor='parameterName'>Parameter Name</label>
                          </div>
                          <div className="col-lg-6 mt-2 mt-md-0">
                            <input
                              type="text"
                              className="form-control"
                              id="sDate"
                              placeholder="Enter Name"
                              name="courseCategory"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </section>
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
        >
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit New Parameter
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <section className="container-fluid ">
                  <div className="container-fluid py-3">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor='Code'>Code</label>
                          </div>
                          <div className="col-lg-6 mt-2 mt-md-0">
                            <input
                              // defaultValue="Initial text"
                              type="text"
                              className="form-control"
                              id="sDate"
                              placeholder="Enter Code"
                              name="date"

                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className='row'>
                      <div className="col-lg-12 mt-2 mt-md-0">
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor='ParameterName'>Parameter Name</label>
                          </div>
                          <div className="col-lg-6 mt-2 mt-md-0">
                            <input
                              // defaultValue="Initial text"
                              type="text"
                              className="form-control"
                              id="sDate"
                              placeholder="Enter Name"
                              name="courseCategory"


                            />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </section>
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

export default ParameterMaster