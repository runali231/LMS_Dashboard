import React, { useState } from 'react'
import '../Css/CourseDetails1.css'
import { Facebook, Google, Linkedin, Twitter } from 'react-bootstrap-icons';
const CourseDetails1 = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <>
            <section id="courses-single" className="pt-90 pb-120 gray-bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className='col-lg-1'>

                        </div>

                        <div className="col-lg-7">
                            <div className="courses-single-left mt-30">
                                <div className="title">
                                    <h3>Learn basic javascript from start for beginner</h3>
                                </div>
                                <div className="course-terms">
                                    <ul>
                                        <li>
                                            <div className="teacher-name">

                                                {/* <div className="name"> */}
                                                <span>Teacher</span>
                                                <h6>Mark anthem</h6>
                                                {/* </div> */}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-category">
                                                <span>Category</span>
                                                <h6>Programming </h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="review">
                                                <span>Review</span>
                                                <ul>
                                                    <li><a ><i className="fa fa-star"></i></a></li>
                                                    <li><a ><i className="fa fa-star"></i></a></li>
                                                    <li><a ><i className="fa fa-star"></i></a></li>
                                                    <li><a ><i className="fa fa-star"></i></a></li>
                                                    <li><a ><i className="fa fa-star"></i></a></li>
                                                    <li className="rating">(20 Reviews)</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="courses-single-image pt-50">
                                    <img src="/Images/team-2.jpg" alt="Reviews" />
                                </div>

                                <div className="courses-tab mt-30">
                                    <ul className="nav nav-justified" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a id="itemOne-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#itemOne"
                                                role="tab"
                                                aria-controls="itemOne"
                                                aria-selected={activeTab === 0}
                                                onClick={() => handleTabChange(0)}  >Overview</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="fw-bold nav-link"
                                                id="itemTwo-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#itemTwo"
                                                role="tab"
                                                aria-controls="itemTwo"
                                                aria-selected={activeTab === 1}
                                                onClick={() => handleTabChange(1)}>Curriculum</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="fw-bold nav-link"
                                                id="itemThree-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#itemThree"
                                                role="tab"
                                                aria-controls="itemThree"
                                                aria-selected={activeTab === 2}
                                                onClick={() => handleTabChange(2)}>Instructor</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="fw-bold nav-link"
                                                id="itemFour-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#itemFour"
                                                role="tab"
                                                aria-controls="itemFour"
                                                aria-selected={activeTab === 3}
                                                onClick={() => handleTabChange(3)}>Reviews</a>
                                        </li>
                                    </ul>

                                    <div className="tab-content" id="myTabContent">
                                        <div className={` tab-pane fade show ${activeTab === 0 ? "active" : ""
                                            }`}
                                            id="itemOne"
                                            role="tabpanel"
                                            aria-labelledby="itemOne-tab" /* className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab" */>
                                            <div className="overview-description">
                                                <div className="single-description pt-40">
                                                    <h6>Course Summery</h6>
                                                    <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                                </div>
                                                <div className="single-description pt-40">
                                                    <h6>Requrements</h6>
                                                    <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`tab-pane fade ${activeTab === 1 ? "active" : ""
                                            }`}
                                            id="itemTwo"
                                            role="tabpanel"
                                            aria-labelledby="itemTwo-tab"/* className="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab" */>
                                            <div className="curriculum-cont">
                                                <div className="title">
                                                    <h6>Learn basic javascript Lecture Started</h6>
                                                </div>

                                                <div className="accordion" id="accordionExample">
                                                    <div className="card">
                                                        <div className="card-header" id="headingOne">
                                                            <a data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"/* data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" */>
                                                                <ul>
                                                                    <li><i className="fa fa-file-o"></i></li>
                                                                    <li><span className="lecture">Lecture 1.1</span></li>
                                                                    <li><span className="head">What is javascript</span></li>
                                                                    <li><span className="time d-none d-md-block"><i className="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                                </ul>
                                                            </a>
                                                        </div>

                                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"/* id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample" */>
                                                            <div className="card-body">
                                                                <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="card">
                                                        <div className="card-header" id="headingTow">
                                                            <a className=" collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                <ul>
                                                                    <li><i className="fa fa-file-o"></i></li>
                                                                    <li><span className="lecture">Lecture 1.2</span></li>
                                                                    <li><span className="head">What is javascript</span></li>
                                                                    <li><span className="time d-none d-md-block"><i className="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                                </ul>
                                                            </a>
                                                        </div>

                                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="card">
                                                        <div className="card-header" id="headingThree">
                                                            <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                <ul>
                                                                    <li><i className="fa fa-file-o"></i></li>
                                                                    <li><span className="lecture">Lecture 1.3</span></li>
                                                                    <li><span className="head">What is javascript</span></li>
                                                                    <li><span className="time d-none d-md-block"><i className="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                                </ul>
                                                            </a>
                                                        </div>
                                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="card">
                                                        <div className="card-header" id="headingFore">
                                                            <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                <ul>
                                                                    <li><i className="fa fa-file-o"></i></li>
                                                                    <li><span className="lecture">Lecture 1.4</span></li>
                                                                    <li><span className="head">What is javascript</span></li>
                                                                    <li><span className="time d-none d-md-block"><i className="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                                </ul>
                                                            </a>
                                                        </div>
                                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="card">
                                                        <div className="card-header" id="headingFive">
                                                            <a className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                <ul>
                                                                    <li><i className="fa fa-file-o"></i></li>
                                                                    <li><span className="lecture">Lecture 1.5</span></li>
                                                                    <li><span className="head">What is javascript</span></li>
                                                                    <li><span className="time d-none d-md-block"><i className="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                                </ul>
                                                            </a>
                                                        </div>
                                                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
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
                                            <div className="instructor-cont">
                                                <div className="instructor-author">
                                                    <div className="author-thum" style={{"width": "25%"}}>
                                                        <img src="/Images/team-1.jpg" alt="Instructor" style={{ "maxWidth": "100%", "display": "flex" }} />
                                                    </div>
                                                    <div className="author-name">
                                                        <a ><h5>John Doe</h5></a>
                                                        <span>Senior WordPress Developer</span>
                                                        <ul className="social">
                                                            <li><a ><Facebook/></a></li>
                                                            <li><a ><Twitter/></a></li>
                                                            <li><a ><Google/></a></li>
                                                            <li><a ><Linkedin/></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="instructor-description pt-25">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fuga ratione molestiae unde provident quibusdam sunt, doloremque. Error omnis mollitia, ex dolor sequi. Et, quibusdam excepturi. Animi assumenda, consequuntur dolorum odio sit inventore aliquid, optio fugiat alias. Veritatis minima, dicta quam repudiandae repellat non sit, distinctio, impedit, expedita tempora numquam?</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={` tab-pane fade  ${activeTab === 3 ? "active" : ""
                                            }`}
                                            id="itemFour"
                                            role="tabpanel"
                                            aria-labelledby="itemFour-tab" >
                                            <div className="reviews-cont">
                                                <div className="title">
                                                    <h6>Student Reviews</h6>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <div className="single-reviews">
                                                            <div className="reviews-author">
                                                                <div className="author-thum" style={{"width":"10%"}}>
                                                                    <img src="/Images/team-1.jpg" alt="Reviews" />
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
                                                                    <img src="/Images/team-2.jpg" alt="Reviews" />
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
                                                            <div className="reviews-author" >
                                                                <div className="author-thum" style={{"width":"10%"}}>
                                                                    <img src="/Images/team-3.jpg" alt="Reviews" />
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
                        <div className="col-lg-3">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="course-features mt-30">
                                        <h4>Course Features </h4>
                                        <ul>
                                            <li><i className="fa fa-clock-o"></i>Duaration : <span>10 Hours</span></li>
                                            <li><i className="fa fa-clone"></i>Leactures : <span>09</span></li>
                                            <li><i className="fa fa-beer"></i>Quizzes :  <span>05</span></li>
                                            <li><i className="fa fa-user-o"></i>Students :  <span>100</span></li>
                                            <li><i className="fa fa-user-o"></i>Language :  <span>English</span></li>
                                            <li><i className="fa fa-user-o"></i>Start date :  <span>11 september, 2023</span></li>
                                            <li><i className="fa fa-user-o"></i>End date :  <span>31st November, 2023</span></li>
                                        </ul>
                                        <div className="price-button pt-10">
                                            <span>Price : <b>$25</b></span>
                                            <a className="main-btn">Enroll Now</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-1'>

                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-8">
                            <div className="related-courses pt-95">
                                <div className="title">
                                    <h3>Related Courses</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-course mt-30">
                                            <div className="thum">
                                                <div className="image">
                                                    <img src="/Images/team-4.jpg" alt="Reviews" />
                                                </div>
                                                <div className="price">
                                                    <span>Free</span>
                                                </div>
                                            </div>
                                            <div className="cont">
                                                <ul>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                                <span>(20 Reviews)</span>
                                                <a href="courses-single.html"><h4>Learn basic javascript from start for beginner</h4></a>
                                                <div className="course-teacher">
                                                    <div className="thum">
                                                        <a > <img src="/assets/Images/reactImage.jpg" alt="Reviews" /></a>
                                                    </div>
                                                    <div className="name">
                                                        <a ><h6>Mark anthem</h6></a>
                                                    </div>
                                                    <div className="admin">
                                                        <ul>
                                                            <li><a ><i className="fa fa-user"></i><span>31</span></a></li>
                                                            <li><a ><i className="fa fa-heart"></i><span>10</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-course mt-30">
                                            <div className="thum">
                                                <div className="image">
                                                    <img src="/Images/team-2.jpg" alt="Reviews" />
                                                </div>
                                                <div className="price">
                                                    <span>Free</span>
                                                </div>
                                            </div>
                                            <div className="cont">
                                                <ul>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                                <span>(20 Reviews)</span>
                                                <a href="courses-single.html"><h4>Learn basic javascript from start for beginner</h4></a>
                                                <div className="course-teacher">
                                                    <div className="thum">
                                                        <a > <img src="/assets/Images/reactImage.jpg" alt="Reviews" /></a>
                                                    </div>
                                                    <div className="name">
                                                        <a ><h6>Mark anthem</h6></a>
                                                    </div>
                                                    <div className="admin">
                                                        <ul>
                                                            <li><a ><i className="fa fa-user"></i><span>31</span></a></li>
                                                            <li><a ><i className="fa fa-heart"></i><span>10</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default CourseDetails1