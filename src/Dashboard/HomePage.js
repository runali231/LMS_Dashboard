import React from 'react'
import { CashStack, CreditCard, Facebook, Google, Linkedin, People, Person, ThreeDotsVertical, Twitter } from 'react-bootstrap-icons'
import ReactImage from '../assets/reactImage.jpg'
import AngularImage from '../assets/angularImage.jpg'
import VueImage from '../assets/vueImage.jpg'
import CardTitle from '../assets/cardTitle.jpg'
import NightLife from '../assets/nightLife.jpg'


const HomePage = () => {
  return (
    <div>
        <div className='container-fluid p-4'>
            <div className='row'>
                <div className='col-sm-6 col-lg-4'>
                    <div className='card mb-3'>
                        <div className='card-header text-center bg-primary p-4'>
                            <Facebook style={{fontSize: '70px', color: 'white'}} />
                        </div>
                        <div className='card-body'>
                            <div className='row text-center'>
                                <div className='col-6 col-lg-6'>
                                    <div className='h5'>89k</div>
                                    <div className='lead text-uppercase'>Friends</div>
                                </div>
                                <div className='col-6 col-lg-6 border-start border-secondary'>
                                    <div className='h5'>450</div>
                                    <div className='lead text-uppercase'>Feeds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-4'>
                    <div className='card mb-3'>
                        <div className='card-header text-center bg-info p-4'>
                            <Twitter style={{fontSize: '70px', color: 'white'}} />
                        </div>
                        <div className='card-body'>
                            <div className='row text-center'>
                                <div className='col-6 col-lg-6'>
                                    <div className='h5'>900k</div>
                                    <div className='lead text-uppercase'>Followers</div>
                                </div>
                                <div className='col-6 col-lg-6 border-start border-secondary'>
                                    <div className='h5'>2.749</div>
                                    <div className='lead text-uppercase'>Tweets</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-4'>
                    <div className='card mb-3'>
                        <div className='card-header text-center bg-primary p-4'>
                            <Linkedin style={{fontSize: '70px', color: 'white'}} />
                        </div>
                        <div className='card-body'>
                            <div className='row text-center'>
                                <div className='col-6 col-lg-6'>
                                    <div className='h5'>500+</div>
                                    <div className='lead text-uppercase'>Contacts</div>
                                </div>
                                <div className='col-6 col-lg-6 border-start border-secondary'>
                                    <div className='h5'>230</div>
                                    <div className='lead text-uppercase'>Feeds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid p-4'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <p>Traffic and Sales</p>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-sm-6 col-lg-6 mb-4'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='border-start border-4 border-info px-3 mb-3'>
                                                <p className='small'>New Clients</p>
                                                <div className='h5'>9,000</div>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='border-start border-4 border-danger px-3 mb-3'>
                                                <p className='small text-nowrap'>Recurring Clients</p>
                                                <div className='h5'>25,201</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <table className='table table-borderless'>
                                            <tbody>
                                                <tr>
                                                    <td className='col-3'>Monday</td>
                                                    <td className='col-9'>
                                                        <div className='progress mb-2' style={{height: '3px'}}>
                                                            <div className='progress-bar bg-info' style={{width: '25%'}} />
                                                        </div>
                                                        <div className='progress mb-2' style={{height: '3px'}}>
                                                            <div className='progress-bar bg-danger' style={{width: '75%'}} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Tuesday</td>
                                                    <td>
                                                        <div className='progress mb-2' style={{height: '3px'}}>
                                                            <div className='progress-bar bg-info' style={{width: '10%'}} />
                                                        </div>
                                                        <div className='progress mb-2' style={{height: '3px'}}>
                                                            <div className='progress-bar bg-danger' style={{width: '90%'}} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Wednesday</td>
                                                    <td>
                                                        <div className='progress mb-2' style={{height: '3px'}}>
                                                            <div className='progress-bar bg-info' style={{width: '45%'}} />
                                                        </div>
                                                        <div className='progress mb-2' style={{height: '3px'}}>
                                                            <div className='progress-bar bg-danger' style={{width: '55%'}} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Thursday</td>
                                                    <td>
                                                        <div className='progress mb-2' style={{height: '3px'}}>
                                                            <div className='progress-bar bg-info' style={{width: '37%'}} />
                                                        </div>
                                                        <div className='progress mb-2' style={{height: '3px'}}>
                                                            <div className='progress-bar bg-danger' style={{width: '61%'}} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Friday</td>
                                                    <td>
                                                        <div className='progress mb-2' style={{height: '3px'}}>
                                                            <div className='progress-bar bg-info' style={{width: '79%'}} />
                                                        </div>
                                                        <div className='progress mb-2' style={{height: '3px'}}>
                                                            <div className='progress-bar bg-danger' style={{width: '16%'}} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Saturday</td>
                                                    <td>
                                                        <div className='progress mb-2' style={{height: '3px'}}>
                                                            <div className='progress-bar bg-info' style={{width: '3%'}} />
                                                        </div>
                                                        <div className='progress mb-2' style={{height: '3px'}}>
                                                            <div className='progress-bar bg-danger' style={{width: '67%'}} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Sunday</td>
                                                    <td>
                                                        <div className='progress mb-2' style={{height: '3px'}}>
                                                            <div className='progress-bar bg-info' style={{width: '34%'}} />
                                                        </div>
                                                        <div className='progress mb-2' style={{height: '3px'}}>
                                                            <div className='progress-bar bg-danger' style={{width: '62%'}} />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-lg-6 mb-4'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='border-start border-4 border-warning px-3 mb-3'>
                                                <p className='small'>Page views</p>
                                                <div className='h5'>80,000</div>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='border-start border-4 border-success px-3 mb-3'>
                                                <p className='small'>Organic</p>
                                                <div className='h5'>49,719</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='mb-3'>
                                            <div>
                                                <Person style={{fontSize: '25px'}} />
                                                <span className='ms-3'>Male</span>
                                                <span className='h6 ms-5'>45%</span>
                                            </div>
                                            <div className='progress' style={{height: '3px'}}>
                                                <div className='progress-bar bg-warning' style={{width: '45%'}} />
                                            </div>
                                        </div>
                                        <div className='mb-5'>
                                            <div>
                                                <Person style={{fontSize: '25px'}} />
                                                <span className='ms-3'>Female</span>
                                                <span className='h6 ms-5'>40%</span>
                                            </div>
                                            <div className='progress' style={{height: '3px'}}>
                                                <div className='progress-bar bg-warning' style={{width: '40%'}} />
                                            </div>
                                        </div>
                                        <div className='mb-3'>
                                            <div className='mb-2'>
                                                <Google style={{fontSize: '25px'}} />
                                                <span className='ms-3'>Organic Search</span>
                                                <span><span className='h6 ms-5'>192.34 </span>(57%)</span>
                                            </div>
                                            <div className='progress' style={{height: '3px'}}>
                                                <div className='progress-bar bg-success' style={{width: '57%'}} />
                                            </div>
                                        </div>
                                        <div className='mb-3'>
                                            <div className='mb-2'>
                                                <Facebook style={{fontSize: '25px'}} />
                                                <span className='ms-3'>Facebook</span>
                                                <span><span className='h6 ms-5'>50.112 </span>(14%)</span>
                                            </div>
                                            <div className='progress' style={{height: '3px'}}>
                                                <div className='progress-bar bg-success' style={{width: '14%'}} />
                                            </div>
                                        </div>
                                        <div className='mb-3'>
                                            <div className='mb-2'>
                                                <Twitter style={{fontSize: '25px'}} />
                                                <span className='ms-3'>Twitter</span>
                                                <span><span className='h6 ms-5'>35.714 </span>(10%)</span>
                                            </div>
                                            <div className='progress' style={{height: '3px'}}>
                                                <div className='progress-bar bg-success' style={{width: '10%'}} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='mb-2'>
                                                <Linkedin style={{fontSize: '25px'}} />
                                                <span className='ms-3'>Linkedin</span>
                                                <span><span className='h6 ms-5'>23.693 </span>(6%)</span>
                                            </div>
                                            <div className='progress' style={{height: '3px'}}>
                                                <div className='progress-bar bg-success' style={{width: '6%'}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='table-responsive'>
                                        <table className='table border'>
                                            <thead className='table-secondary'>
                                                <tr>
                                                    <th className='text-center'>
                                                        <People style={{fontSize: '22px'}} />
                                                    </th>
                                                    <th>User</th>
                                                    <th>Usage</th>
                                                    <th>Payment Method</th>
                                                    <th>Activity</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img src={ReactImage} className='rounded-circle' width='50px' height='50px' alt='personOne' />
                                                    </td>
                                                    <td>
                                                        <p className='h6'>Jack Doe</p>
                                                        <p className='small text-secondary'>
                                                            New | 
                                                            <span>Registered: Jan 20, 2022</span>
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div className='mb-2'>
                                                            <span className='small'><span className='h6 me-4'>50% </span>Aug 1, 2022 - Sep 1, 2022</span>
                                                        </div>
                                                        <div className='progress' style={{height: '5px'}}>
                                                            <div className='progress-bar bg-primary' style={{width: '50%'}} />
                                                        </div>
                                                    </td>
                                                    <td className='text-center'>
                                                        <CashStack style={{fontSize: '30px'}}  />
                                                    </td>
                                                    <td>
                                                        <p className='small text-secondary'>Last Login</p>
                                                        <p className='h6'>30 sec ago</p>
                                                    </td>
                                                    <td>
                                                        <div className='dropdown text-center pt-2'>
                                                            <button type='button' className='btn btn-white' data-bs-toggle='dropdown' aria-expanded='false'><ThreeDotsVertical /></button>
                                                            <div className='dropdown-menu'>
                                                                <button type='button' className='dropdown-item text-success' data-bs-toggle='/'>Info</button>
                                                                <button type='button' className='dropdown-item' data-bs-toggle='/'>Edit</button>
                                                                <button type='button' className='dropdown-item text-danger' data-bs-toggle='/'>Delete</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src={AngularImage} className='rounded-circle' width='50px' height='50px' alt='personTwo' />
                                                    </td>
                                                    <td>
                                                        <p className='h6'>James Smith</p>
                                                        <p className='small text-secondary'>
                                                            New | 
                                                            <span>Registered: Jan 20, 2022</span>
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div className='mb-2'>
                                                            <span className='small'><span className='h6 me-4'>5% </span>Aug 1, 2022 - Sep 1, 2022</span>
                                                        </div>
                                                        <div className='progress' style={{height: '5px'}}>
                                                            <div className='progress-bar bg-danger' style={{width: '5%'}} />
                                                        </div>
                                                    </td>
                                                    <td className='text-center'>
                                                        <CreditCard style={{fontSize: '30px'}}  />
                                                    </td>
                                                    <td>
                                                        <p className='small text-secondary'>Last Login</p>
                                                        <p className='h6'>10 minutes ago</p>
                                                    </td>
                                                    <td>
                                                        <div className='dropdown text-center pt-2'>
                                                            <button type='button' className='btn btn-white' data-bs-toggle='dropdown' aria-expanded='false'><ThreeDotsVertical /></button>
                                                            <div className='dropdown-menu'>
                                                                <button type='button' className='dropdown-item text-success' data-bs-toggle='/'>Info</button>
                                                                <button type='button' className='dropdown-item' data-bs-toggle='/'>Edit</button>
                                                                <button type='button' className='dropdown-item text-danger' data-bs-toggle='/'>Delete</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src={VueImage} className='rounded-circle' width='50px' height='50px' alt='personThree' />
                                                    </td>
                                                    <td>
                                                        <p className='h6'>Johnny Walker</p>
                                                        <p className='small text-secondary'>
                                                            Recurring | 
                                                            <span>Registered: Jan 20, 2022</span>
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div className='mb-2'>
                                                            <span className='small'><span className='h6 me-4'>75% </span>Aug 1, 2022 - Sep 1, 2022</span>
                                                        </div>
                                                        <div className='progress' style={{height: '5px'}}>
                                                            <div className='progress-bar bg-info' style={{width: '75%'}} />
                                                        </div>
                                                    </td>
                                                    <td className='text-center'>
                                                        <CashStack style={{fontSize: '30px'}}  />
                                                    </td>
                                                    <td>
                                                        <p className='small text-secondary'>Last Login</p>
                                                        <p className='h6'>30 minutes ago</p>
                                                    </td>
                                                    <td>
                                                        <div className='dropdown text-center pt-2'>
                                                            <button type='button' className='btn btn-white' data-bs-toggle='dropdown' aria-expanded='false'><ThreeDotsVertical /></button>
                                                            <div className='dropdown-menu'>
                                                                <button type='button' className='dropdown-item text-success' data-bs-toggle='/'>Info</button>
                                                                <button type='button' className='dropdown-item' data-bs-toggle='/'>Edit</button>
                                                                <button type='button' className='dropdown-item text-danger' data-bs-toggle='/'>Delete</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src={CardTitle} className='rounded-circle' width='50px' height='50px' alt='personFour' />
                                                    </td>
                                                    <td>
                                                        <p className='h6'>Margaret Willow</p>
                                                        <p className='small text-secondary'>
                                                            New | 
                                                            <span>Registered: Jan 20, 2022</span>
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div className='mb-2'>
                                                            <span className='small'><span className='h6 me-4'>99% </span>Aug 1, 2022 - Sep 1, 2022</span>
                                                        </div>
                                                        <div className='progress' style={{height: '5px'}}>
                                                            <div className='progress-bar bg-warning' style={{width: '99%'}} />
                                                        </div>
                                                    </td>
                                                    <td className='text-center'>
                                                        <CreditCard style={{fontSize: '30px'}}  />
                                                    </td>
                                                    <td>
                                                        <p className='small text-secondary'>Last Login</p>
                                                        <p className='h6'>20 hours ago</p>
                                                    </td>
                                                    <td>
                                                        <div className='dropdown text-center pt-2'>
                                                            <button type='button' className='btn btn-white' data-bs-toggle='dropdown' aria-expanded='false'><ThreeDotsVertical /></button>
                                                            <div className='dropdown-menu'>
                                                                <button type='button' className='dropdown-item text-success' data-bs-toggle='/'>Info</button>
                                                                <button type='button' className='dropdown-item' data-bs-toggle='/'>Edit</button>
                                                                <button type='button' className='dropdown-item text-danger' data-bs-toggle='/'>Delete</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src={NightLife} className='rounded-circle' width='50px' height='50px' alt='personFive' />
                                                    </td>
                                                    <td>
                                                        <p className='h6'>Michelle Obama</p>
                                                        <p className='small text-secondary'>
                                                            New | 
                                                            <span>Registered: Jan 20, 2022</span>
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div className='mb-2'>
                                                            <span className='small'><span className='h6 me-4'>10% </span>Aug 1, 2022 - Sep 1, 2022</span>
                                                        </div>
                                                        <div className='progress' style={{height: '5px'}}>
                                                            <div className='progress-bar bg-success' style={{width: '10%'}} />
                                                        </div>
                                                    </td>
                                                    <td className='text-center'>
                                                        <CreditCard style={{fontSize: '30px'}}  />
                                                    </td>
                                                    <td>
                                                        <p className='small text-secondary'>Last Login</p>
                                                        <p className='h6'>Last Week</p>
                                                    </td>
                                                    <td>
                                                        <div className='dropdown text-center pt-2'>
                                                            <button type='button' className='btn btn-white' data-bs-toggle='dropdown' aria-expanded='false'><ThreeDotsVertical /></button>
                                                            <div className='dropdown-menu'>
                                                                <button type='button' className='dropdown-item text-success' data-bs-toggle='/'>Info</button>
                                                                <button type='button' className='dropdown-item' data-bs-toggle='/'>Edit</button>
                                                                <button type='button' className='dropdown-item text-danger' data-bs-toggle='/'>Delete</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src={AngularImage} className='rounded-circle' width='50px' height='50px' alt='personSix' />
                                                    </td>
                                                    <td>
                                                        <p className='h6'>Ricky Pointing</p>
                                                        <p className='small text-secondary'>
                                                            New | 
                                                            <span>Registered: Jan 20, 2022</span>
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div className='mb-2'>
                                                            <span className='small'><span className='h6 me-4'>23% </span>Aug 1, 2022 - Sep 1, 2022</span>
                                                        </div>
                                                        <div className='progress' style={{height: '5px'}}>
                                                            <div className='progress-bar bg-dark' style={{width: '23%'}} />
                                                        </div>
                                                    </td>
                                                    <td className='text-center'>
                                                        <CashStack style={{fontSize: '30px'}}  />
                                                    </td>
                                                    <td>
                                                        <p className='small text-secondary'>Last Login</p>
                                                        <p className='h6'>Yesterday</p>
                                                    </td>
                                                    <td>
                                                        <div className='dropdown text-center pt-2'>
                                                            <button type='button' className='btn btn-white' data-bs-toggle='dropdown' aria-expanded='false'><ThreeDotsVertical /></button>
                                                            <div className='dropdown-menu'>
                                                                <button type='button' className='dropdown-item text-success' data-bs-toggle='/'>Info</button>
                                                                <button type='button' className='dropdown-item' data-bs-toggle='/'>Edit</button>
                                                                <button type='button' className='dropdown-item text-danger' data-bs-toggle='/'>Delete</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src={ReactImage} className='rounded-circle' width='50px' height='50px' alt='personSeven' />
                                                    </td>
                                                    <td>
                                                        <p className='h6'>Anushka Sharma</p>
                                                        <p className='small text-secondary'>
                                                            Recurring | 
                                                            <span>Registered: Jan 20, 2022</span>
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div className='mb-2'>
                                                            <span className='small'><span className='h6 me-4'>48% </span>Aug 1, 2022 - Sep 1, 2022</span>
                                                        </div>
                                                        <div className='progress' style={{height: '5px'}}>
                                                            <div className='progress-bar bg-secondary' style={{width: '48%'}} />
                                                        </div>
                                                    </td>
                                                    <td className='text-center'>
                                                        <CreditCard style={{fontSize: '30px'}}  />
                                                    </td>
                                                    <td>
                                                        <p className='small text-secondary'>Last Login</p>
                                                        <p className='h6'>Last month</p>
                                                    </td>
                                                    <td>
                                                        <div className='dropdown text-center pt-2'>
                                                            <button type='button' className='btn btn-white' data-bs-toggle='dropdown' aria-expanded='false'><ThreeDotsVertical /></button>
                                                            <div className='dropdown-menu'>
                                                                <button type='button' className='dropdown-item text-success' data-bs-toggle='/'>Info</button>
                                                                <button type='button' className='dropdown-item' data-bs-toggle='/'>Edit</button>
                                                                <button type='button' className='dropdown-item text-danger' data-bs-toggle='/'>Delete</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage