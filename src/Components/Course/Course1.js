import React from 'react'
import '../Css/style.css'
const Course1 = () => {
    return (
        <>
        


            {/* <section id="courses-part" classNameName="pt-120 pb-120 gray-bg">
                <div classNameName="container">
                    <div classNameName="row">
                        <div classNameName="col-lg-12">
                            <div classNameName="courses-top-search">
                                <ul classNameName="nav float-left" id="myTab" role="tablist">
                                    <li classNameName="nav-item">
                                        <a classNameName="active" id="courses-grid-tab" data-toggle="tab" href="#courses-grid" role="tab" aria-controls="courses-grid" aria-selected="true"><i classNameName="fa fa-th-large"></i></a>
                                    </li>
                                    <li classNameName="nav-item">
                                        <a id="courses-list-tab" data-toggle="tab" href="#courses-list" role="tab" aria-controls="courses-list" aria-selected="false"><i classNameName="fa fa-th-list"></i></a>
                                    </li>
                                    <li classNameName="nav-item">Showing 4 0f 24 Results</li>
                                </ul>

                                <div classNameName="courses-search float-right">
                                    <form action="#">
                                        <input type="text" placeholder="Search" />
                                        <button type="button"><i classNameName="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div classNameName="tab-content" id="myTabContent">
                        <div classNameName="tab-pane fade show active" id="courses-grid" role="tabpanel" aria-labelledby="courses-grid-tab">
                            <div classNameName="row">
                                <div classNameName="col-lg-4 col-md-6">
                                    <div classNameName="single-course mt-30">
                                        <div classNameName="thum">
                                            <div classNameName="image">
                                                <img src="images/course/cu-1.jpg" alt="Course" />
                                            </div>
                                            <div classNameName="price">
                                                <span>Free</span>
                                            </div>
                                        </div>
                                        <div classNameName="cont">
                                            <ul>
                                                <li><i classNameName="fa fa-star"></i></li>
                                                <li><i classNameName="fa fa-star"></i></li>
                                                <li><i classNameName="fa fa-star"></i></li>
                                                <li><i classNameName="fa fa-star"></i></li>
                                                <li><i classNameName="fa fa-star"></i></li>
                                            </ul>
                                            <span>(20 Reviews)</span>
                                            <a href="courses-single.html"><h4>Learn basic javascript from start for beginner</h4></a>
                                            <div className="course-teacher">
                                                <div className="thum">
                                                    <a href="#"><img src="images/course/teacher/t-1.jpg" alt="teacher" /></a>
                                                </div>
                                                <div className="name">
                                                    <a href="#"><h6>Mark anthem</h6></a>
                                                </div>
                                                <div className="admin">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                                        <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-course mt-30">
                                        <div className="thum">
                                            <div className="image">
                                                <img src="images/course/cu-2.jpg" alt="Course" />
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
                                                    <a href="#"><img src="images/course/teacher/t-2.jpg" alt="teacher" /></a>
                                                </div>
                                                <div className="name">
                                                    <a href="#"><h6>Mark anthem</h6></a>
                                                </div>
                                                <div className="admin">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                                        <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-course mt-30">
                                        <div className="thum">
                                            <div className="image">
                                                <img src="images/course/cu-3.jpg" alt="Course" />
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
                                                    <a href="#"><img src="images/course/teacher/t-3.jpg" alt="teacher" /></a>
                                                </div>
                                                <div className="name">
                                                    <a href="#"><h6>Mark anthem</h6></a>
                                                </div>
                                                <div className="admin">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                                        <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-course mt-30">
                                        <div className="thum">
                                            <div className="image">
                                                <img src="images/course/cu-4.jpg" alt="Course" />
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
                                                    <a href="#"><img src="images/course/teacher/t-4.jpg" alt="teacher" /></a>
                                                </div>
                                                <div className="name">
                                                    <a href="#"><h6>Mark anthem</h6></a>
                                                </div>
                                                <div className="admin">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                                        <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-course mt-30">
                                            <div className="thum">
                                                <div className="image">
                                                    <img src="images/course/cu-5.jpg" alt="Course" />
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
                                                        <a href="#"><img src="images/course/teacher/t-5.jpg" alt="teacher" /></a>
                                                    </div>
                                                    <div className="name">
                                                        <a href="#"><h6>Mark anthem</h6></a>
                                                    </div>
                                                    <div className="admin">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                                            <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-course mt-30">
                                            <div className="thum">
                                                <div className="image">
                                                    <img src="images/course/cu-1.jpg" alt="Course" />
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
                                                        <a href="#"><img src="images/course/teacher/t-1.jpg" alt="teacher" /></a>
                                                    </div>
                                                    <div className="name">
                                                        <a href="#"><h6>Mark anthem</h6></a>
                                                    </div>
                                                    <div className="admin">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                                            <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="courses-list" role="tabpanel" aria-labelledby="courses-list-tab">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="single-course mt-30">
                                            <div className="row no-gutters">
                                                <div className="col-md-6">
                                                    <div className="thum">
                                                        <div className="image">
                                                            <img src="images/course/cu-1.jpg" alt="Course" />
                                                        </div>
                                                        <div className="price">
                                                            <span>Free</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="cont">
                                                        <ul>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                        </ul>
                                                        <span>(20 Reviews)</span>
                                                        <a href="#"><h4>Learn basic javascript from start for beginner</h4></a>
                                                        <div className="course-teacher">
                                                            <div className="thum">
                                                                <a href="#"><img src="images/course/teacher/t-1.jpg" alt="teacher" /></a>
                                                            </div>
                                                            <div className="name">
                                                                <a href="#"><h6>Mark anthem</h6></a>
                                                            </div>
                                                            <div className="admin">
                                                                <ul>
                                                                    <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                                                    <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-course mt-30">
                                            <div className="row no-gutters">
                                                <div className="col-md-6">
                                                    <div className="thum">
                                                        <div className="image">
                                                            <img src="images/course/cu-2.jpg" alt="Course" />
                                                        </div>
                                                        <div className="price">
                                                            <span>Free</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="cont">
                                                        <ul>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                        </ul>
                                                        <span>(20 Reviews)</span>
                                                        <a href="#"><h4>Learn basic javascript from start for beginner</h4></a>
                                                        <div className="course-teacher">
                                                            <div className="thum">
                                                                <a href="#"><img src="images/course/teacher/t-2.jpg" alt="teacher" /></a>
                                                            </div>
                                                            <div className="name">
                                                                <a href="#"><h6>Mark anthem</h6></a>
                                                            </div>
                                                            <div className="admin">
                                                                <ul>
                                                                    <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                                                    <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-course mt-30">
                                            <div className="row no-gutters">
                                                <div className="col-md-6">
                                                    <div className="thum">
                                                        <div className="image">
                                                            <img src="images/course/cu-3.jpg" alt="Course" />
                                                        </div>
                                                        <div className="price">
                                                            <span>Free</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="cont">
                                                        <ul>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                        </ul>
                                                        <span>(20 Reviews)</span>
                                                        <a href="#"><h4>Learn basic javascript from start for beginner</h4></a>
                                                        <div className="course-teacher">
                                                            <div className="thum">
                                                                <a href="#"><img src="images/course/teacher/t-3.jpg" alt="teacher" /></a>
                                                            </div>
                                                            <div className="name">
                                                                <a href="#"><h6>Mark anthem</h6></a>
                                                            </div>
                                                            <div className="admin">
                                                                <ul>
                                                                    <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                                                    <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-course mt-30">
                                                <div className="row no-gutters">
                                                    <div className="col-md-6">
                                                        <div className="thum">
                                                            <div className="image">
                                                                <img src="images/course/cu-4.jpg" alt="Course" />
                                                            </div>
                                                            <div className="price">
                                                                <span>Free</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="cont">
                                                            <ul>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <span>(20 Reviews)</span>
                                                            <a href="#"><h4>Learn basic javascript from start for beginner</h4></a>
                                                            <div className="course-teacher">
                                                                <div className="thum">
                                                                    <a href="#"><img src="images/course/teacher/t-4.jpg" alt="teacher" /></a>
                                                                </div>
                                                                <div className="name">
                                                                    <a href="#"><h6>Mark anthem</h6></a>
                                                                </div>
                                                                <div className="admin">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                                                        <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <nav className="courses-pagination mt-50">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item">
                                                <a href="#" aria-label="Previous">
                                                    <i className="fa fa-angle-left"></i>
                                                </a>
                                            </li>
                                            <li className="page-item"><a className="active" href="#">1</a></li>
                                            <li className="page-item"><a href="#">2</a></li>
                                            <li className="page-item"><a href="#">3</a></li>
                                            <li className="page-item">
                                                <a href="#" aria-label="Next">
                                                    <i className="fa fa-angle-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}

    {/* <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center py-4 px-xl-5">
            <div className="col-lg-3">
                <a href="" className="text-decoration-none">
                    <h1 className="m-0"><span className="text-primary">E</span>COURSES</h1>
                </a>
            </div>
            <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                    <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                    <div className="text-left">
                        <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                        <small>123 Street, New York, USA</small>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                    <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
                    <div className="text-left">
                        <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                        <small>info@example.com</small>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                    <i className="fa fa-2x fa-phone text-primary mr-3"></i>
                    <div className="text-left">
                        <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                        <small>+012 345 6789</small>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row border-top px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a className="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none" data-toggle="collapse" href="#navbar-vertical" style="height: 67px; padding: 0 30px;">
                    <h5 className="text-primary m-0"><i className="fa fa-book-open mr-2"></i>Subjects</h5>
                    <i className="fa fa-angle-down text-primary"></i>
                </a>
                <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style="width: calc(100% - 30px); z-index: 9;">
                    <div className="navbar-nav w-100">
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link" data-toggle="dropdown">Web Design <i className="fa fa-angle-down float-right mt-1"></i></a>
                            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                <a href="" className="dropdown-item">HTML</a>
                                <a href="" className="dropdown-item">CSS</a>
                                <a href="" className="dropdown-item">jQuery</a>
                            </div>
                        </div>
                        <a href="" className="nav-item nav-link">Apps Design</a>
                        <a href="" className="nav-item nav-link">Marketing</a>
                        <a href="" className="nav-item nav-link">Research</a>
                        <a href="" className="nav-item nav-link">SEO</a>
                    </div>
                </nav>
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <a href="" className="text-decoration-none d-block d-lg-none">
                        <h1 className="m-0"><span className="text-primary">E</span>COURSES</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav py-0">
                            <a href="index.html" className="nav-item nav-link">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="course.html" className="nav-item nav-link active">Courses</a>
                            <a href="teacher.html" className="nav-item nav-link">Teachers</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Blog</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="blog.html" className="dropdown-item">Blog List</a>
                                    <a href="single.html" className="dropdown-item">Blog Detail</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <a className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" href="">Join Now</a>
                    </div>
                </nav>
            </div>
        </div>
    </div>

    <div className="container-fluid page-header" style="margin-bottom: 90px;">
        <div className="container">
            <div className="d-flex flex-column justify-content-center" style="min-height: 300px">
                <h3 className="display-4 text-white text-uppercase">Courses</h3>
                <div className="d-inline-flex text-white">
                    <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">Courses</p>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3" style="letter-spacing: 5px;">Subjects</h5>
                <h1>Explore Top Subjects</h1>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-1.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Web Design</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-2.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Development</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-3.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Game Design</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-4.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Apps Design</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-5.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Marketing</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-6.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Research</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-7.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Content Writing</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-8.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">SEO</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3" style="letter-spacing: 5px;">Courses</h5>
                <h1>Our Popular Courses</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="img/course-1.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="img/course-2.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="img/course-3.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="img/course-4.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="img/course-5.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="img/course-6.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style="margin-top: 90px;">
        <div className="row pt-5">
            <div className="col-lg-7 col-md-12">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <h5 className="text-primary text-uppercase mb-4" style="letter-spacing: 5px;">Get In Touch</h5>
                        <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                        <div className="d-flex justify-content-start mt-4">
                            <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light btn-square" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <h5 className="text-primary text-uppercase mb-4" style="letter-spacing: 5px;">Our Courses</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Web Design</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Apps Design</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Marketing</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Research</a>
                            <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>SEO</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-12 mb-5">
                <h5 className="text-primary text-uppercase mb-4" style="letter-spacing: 5px;">Newsletter</h5>
                <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                <div className="w-100">
                    <div className="input-group">
                        <input type="text" className="form-control border-light" style="padding: 30px;" placeholder="Your Email Address"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary px-4">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    

  
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3" style={{"letter-spacing": "5px"}}>Courses</h5>
                <h1>Our Popular Courses</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="https://demo.htmlcodex.com/1427/online-courses-html-template/img/course-2.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="https://demo.htmlcodex.com/1427/online-courses-html-template/img/course-2.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="https://demo.htmlcodex.com/1427/online-courses-html-template/img/course-2.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="https://demo.htmlcodex.com/1427/online-courses-html-template/img/course-2.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="https://demo.htmlcodex.com/1427/online-courses-html-template/img/course-2.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src="https://demo.htmlcodex.com/1427/online-courses-html-template/img/course-2.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Web design & development courses for beginner</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 className="m-0">$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



        </>
    )
}

export default Course1