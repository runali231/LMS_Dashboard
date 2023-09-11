import React,{useState} from 'react'
import '../Css/MentorDetails.css'
import { Facebook, Google, Linkedin, Twitter } from 'react-bootstrap-icons';

const MentorDetails = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <>
            <section id="teachers-single" className="pt-70 pb-120 gray-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-8">
                            <div className="teachers-left mt-50">
                                <div className="hero">
                                    <img src="/Images/team-1.jpg" alt="Teachers" />
                                </div>
                                <div className="name">
                                    <h6>Mark Alen</h6>
                                    <span>Vice Chancellor</span>
                                </div>
                                <div className="social">
                                    <ul>
                                        <li><a href="#"><Facebook/></a></li>
                                        <li><a href="#"><Twitter/></a></li>
                                        <li><a href="#"><Google/></a></li>
                                        <li><a href="#"><Linkedin/></a></li>
                                    </ul>
                                </div>
                                <div className="description">
                                    <p>Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate..</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="teachers-right mt-50">
                                <ul className="nav nav-justified" id="myTab" role="tablist">
                                    <li className="nav-item active">
                                        <a id="itemOne-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#itemOne"
                                                role="tab"
                                                aria-controls="itemOne"
                                                aria-selected={activeTab === 0}
                                                onClick={() => handleTabChange(0)} /* className="active" id="dashboard-tab" data-toggle="tab" href="#dashboard" role="tab" aria-controls="dashboard" aria-selected="true" */>Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="fw-bold nav-link"
                                                id="itemTwo-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#itemTwo"
                                                role="tab"
                                                aria-controls="itemTwo"
                                                aria-selected={activeTab === 1}
                                                onClick={() => handleTabChange(1)} >Courses</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="fw-bold nav-link"
                                                id="itemThree-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#itemThree"
                                                role="tab"
                                                aria-controls="itemThree"
                                                aria-selected={activeTab === 2}
                                                onClick={() => handleTabChange(2)}>Reviews</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div  className={` tab-pane fade show  ${activeTab === 0 ? "active" : ""
                                            }`}
                                            id="itemOne"
                                            role="tabpanel"
                                            aria-labelledby="itemOne-tab">
                                        <div className="dashboard-cont">
                                            <div className="single-dashboard pt-40">
                                                <h5>About</h5>
                                                <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                            </div>
                                            <div className="single-dashboard pt-40">
                                                <h5>Acchivments</h5>
                                                <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                            </div>
                                            <div className="single-dashboard pt-40">
                                                <h5>My Objective</h5>
                                                <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-pane fade ${activeTab === 1 ? "active" : ""
                                            }`}
                                            id="itemTwo"
                                            role="tabpanel"
                                            aria-labelledby="itemTwo-tab">
                                                   <div className="row pt-5">

                  <div className="col-lg-6 col-md-6 ">
                    <div className="rounded overflow-hidden mb-2">
                   
                      <img className="img-fluid" src="Images/course1.jpg" alt="" style={{"height": "auto"}}/>
                      <div className="bg-secondary p-4">
                        <div className="d-flex justify-content-between mb-3">
                          <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                          <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                        </div>
                        <div className="h5"  style={{ "cursor": "pointer" }}>
                        How To Build Confidence In Your Abilities</div>
                        <div className="border-top mt-4 pt-4">
                          <div className="d-flex justify-content-between">
                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                            <h5 className="m-0">
                          
                            ₹ 6575
                              </h5>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 ">
                    <div className="rounded overflow-hidden mb-2">
              
                      <img className="img-fluid" src="Images/course2.jpg" alt=""  style={{"height": "auto"}}/>
                      <div className="bg-secondary p-4">
                        <div className="d-flex justify-content-between mb-3">
                          <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                          <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                        </div>
                        <div className="h5"  style={{ "cursor": "pointer" }}>
                        How To Build Confidence In Your Abilities</div>
                        <div className="border-top mt-4 pt-4">
                          <div className="d-flex justify-content-between">
                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                            <h5 className="m-0">
                            
                            ₹ 6575
                              </h5>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            
          </div>
                                  
                                    </div>
                                    <div className={`tab-pane fade ${activeTab === 2 ? "active" : ""
                                            }`}
                                            id="itemThree"
                                            role="tabpanel"
                                            aria-labelledby="itemThree-tab">
                                        <div className="reviews-cont">
                                            <div className="title">
                                                <h6>Student Reviews</h6>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className="single-reviews">
                                                        <div className="reviews-author">
                                                            <div className="author-thum" style={{"width":"10%"}}>
                                                                <img src="Images/team-1.jpg" alt="Reviews" />
                                                            </div>
                                                            <div className="author-name">
                                                                <h6>Bobby Aktar</h6>
                                                                <span>April 03, 2019</span>
                                                            </div>
                                                        </div>
                                                        <div className="reviews-description pt-20">
                                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                            <div className="rating">
                                                                <ul>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                </ul>
                                                                <span>/ 5 Star</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="single-reviews">
                                                        <div className="reviews-author">
                                                            <div className="author-thum" style={{"width":"10%"}}>
                                                                <img src="Images/team-2.jpg" alt="Reviews" />
                                                            </div>
                                                            <div className="author-name">
                                                                <h6>Humayun Ahmed</h6>
                                                                <span>April 13, 2019</span>
                                                            </div>
                                                        </div>
                                                        <div className="reviews-description pt-20">
                                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                            <div className="rating">
                                                                <ul>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                </ul>
                                                                <span>/ 5 Star</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="single-reviews">
                                                        <div className="reviews-author">
                                                            <div className="author-thum" style={{"width":"10%"}}>
                                                                <img src="Images/team-3.jpg" alt="Reviews" />
                                                            </div>
                                                            <div className="author-name">
                                                                <h6>Tania Aktar</h6>
                                                                <span>April 20, 2019</span>
                                                            </div>
                                                        </div>
                                                        <div className="reviews-description pt-20">
                                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                            <div className="rating">
                                                                <ul>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                </ul>
                                                                <span>/ 5 Star</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="title pt-15">
                                                <h6>Leave A Comment</h6>
                                            </div>
                                            <div className="reviews-form">
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-single">
                                                                <input type="text" placeholder="Fast name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-single">
                                                                <input type="text" placeholder="Last Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-single">
                                                                <div className="rate-wrapper">
                                                                    <div className="rate-label">Your Rating:</div>
                                                                    <div className="rate">
                                                                        <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                                                        <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                                                        <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                                                        <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                                                        <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-single">
                                                                <textarea placeholder="Comment"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-single">
                                                                <button type="button" className="main-btn">Post Comment</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MentorDetails