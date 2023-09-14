import React, { useState, useEffect } from 'react'
import '../Css/CourseDetails1.css'
import axios from "axios";
import { getToken } from "../../util.token";
import { useNavigate } from "react-router-dom";
import { UploadImage, editCourseForm, editSession } from "./CourseDetailsApi";
import { Facebook, Google, Linkedin, Twitter } from 'react-bootstrap-icons';
const CourseDetails1 = () => {
    const [sessionList, setSessionList] = useState([]);
    const [id, setId] = useState("");
    const [courseName, setCourseName] = useState("");
    const [courseDiscription, setCourseDiscription] = useState("");
    const [courseCategory, setCourseCategory] = useState("");
    const [courseType, setCourseType] = useState("");
    const [courseStartDate, setCourseStartDate] = useState("");
    const [courseEndDate, setCourseEndDate] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [totalDuration, setTotalDuration] = useState("");
    const [courseLang, setCourseLang] = useState("");
    const [instructor, setInstructor] = useState("");
    const [skills, setSkills] = useState("");
    const [courseDiscription2, setCourseDiscription2] = useState("");
    const [courseIncludes, setCourseIncludes] = useState("");
    const [introVideolink, setIntroVideolink] = useState("");
    const [introMongoid, setIntroMongoid] = useState("");
    const [learningPoints, setLearningPoints] = useState("");

    const [sessionName, setSessionName] = useState("");
    const [sessionDescription, setSessionDescription] = useState("");
    const [sessionLink, setSessionLink] = useState("");
    const [duration, setDuration] = useState("");
    const [sessionId, setSessionId] = useState("");
    const [openItems, setOpenItems] = useState({});



    const toggleAccordion = (sessionId) => {
        // Toggle the state of the clicked item
        setOpenItems((prevState) => ({
            ...prevState,
            [sessionId]: !prevState[sessionId],
        }));
    };
    useEffect(() => {
        getCourseDetails();
    }, []);

    useEffect(() => {
        // Initialize Bootstrap tooltips
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle1="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    }, []);

    const navigate = useNavigate();
    const Id = localStorage.getItem("course_id");

    const getCourseDetails = () => {
        const token = getToken();
        const userId = "820ef9fe-43c1-4a57-a279-d3238a7da437";
        const course_Id = Id;
        var url = new URL(
            `http://localhost:801/api/CourseDetails/GetCourseDetail?UserId=${userId}&Id=${course_Id}`
        );

        axios({
            method: "get",
            url: url,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log("perticular course details", response);
                console.log(response.data.data);
                setSessionList(response.data.sessionList);
                console.log("61", response.data.data[0].Id);
                setId(response.data.data[0].Id);
                setCourseName(response.data.data[0].CourseName);
                setCourseDiscription(response.data.data[0].CourseDescription);
                setCourseDiscription2(response.data.data[0].CourseDescription2);
                setCourseCategory(response.data.data[0].CourseCategory);
                setCourseStartDate(response.data.data[0].CourseStartDate);
                setCourseEndDate(response.data.data[0].CourseEndDate);
                setCourseType(response.data.data[0].CourseType);
                setPrice(response.data.data[0].Price);
                setDiscount(response.data.data[0].Discount);
                setTotalDuration(response.data.data[0].TotalDuration);
                setInstructor(response.data.data[0].Instructor);
                setCourseLang(response.data.data[0].CourseLang);
                setIntroVideolink(response.data.data[0].IntroVideolink);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getSessionById = (sId) => {
        console.log("95", sId)
        const token = getToken();
        const userId = "820ef9fe-43c1-4a57-a279-d3238a7da437";
        const id = localStorage.getItem("course_id");
        const sessionId = sId;
        const url = new URL(
            `http://localhost:801/api/SessionDetails/GetSessionById?UserId=${userId}&CourseId=${id}&Id=${sessionId}`
        );

        return axios({
            method: "get",
            url: url,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            console.log("session Response", response)
            console.log(response.data.data[0].SessionLink)
            setSessionLink(response.data.data[0].SessionLink)
            setDuration(response.data.data[0].Duration)
            setSessionName(response.data.data[0].SessionName)
            setSessionDescription(response.data.data[0].SessionDescription)
            setSessionId(response.data.data[0].Id)
        }).catch((error) => {
            console.log(error);
        });
    };



    const handleEditCourseForm = () => {
        const userId = "820ef9fe-43c1-4a57-a279-d3238a7da437";
        const data = {
            userId: userId,
            id: id,
            courseName: courseName,
            courseCategory: courseCategory,
            courseDiscription: courseDiscription,
            courseType: courseType,
            courseStartDate: courseStartDate,
            courseEndDate: courseEndDate,
            totalDuration: totalDuration,
            discount: discount,
            price: price,
            courseLang: courseLang,
            instructor: instructor,
            skills: skills,
            courseDiscription2: courseDiscription2,
            courseIncludes: courseIncludes,
            introMongoid: introMongoid,
            introVideolink: introVideolink,
            learningPoints: learningPoints,
        };

        editCourseForm(data)
            .then((response) => {
                console.log(response.data.data);
                alert("Course edited successfully!");
                navigate("/courseDetails");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleImageUpload = (image) => {
        UploadImage(image)
            .then((response) => {
                console.log(response.data.data[0].Id);
                setIntroMongoid(response.data.data[0].Id);
                alert("Image Upload Successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const EditSessionForm = () => {
        const token = getToken();
        const userId = "820ef9fe-43c1-4a57-a279-d3238a7da437";
        console.log("197", sessionId)
        const sessionData = {
            sessionNo: "2",
            id: sessionId,
            userId: userId,
            courseId: Id,
            sessionName: sessionName,
            sessionDescription: sessionDescription,
            sessionLink: sessionLink,
            duration: duration,
        };

        editSession(sessionData, token)
            .then((response) => {
                console.log(response.data.data);
                alert("Session edited Successfully!");
                navigate("/courseDetails");
            })
            .catch((error) => {
                console.log(error);
            });
    };



    const deleteCourse = () => {
        console.log("cId", id)
        const token = getToken()
        var url = new URL(
            `http://localhost:801/api/CourseDetails`
        );
        const data = {
            id: id,
            userId: "820ef9fe-43c1-4a57-a279-d3238a7da437"
        }

        axios({
            method: "delete",
            url: url,
            data: data,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log("Delete Course", response);
                alert("Course deleted successfully!")
                navigate('/courses')
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const deleteSession = (sId) => {
        console.log("sId", sId)
        const token = getToken()
        var url = new URL(
            `http://localhost:801/api/SessionDetails`
        );
        const data = {
            id: sId,
            userId: "820ef9fe-43c1-4a57-a279-d3238a7da437"
        }

        axios({
            method: "delete",
            url: url,
            data: data,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log("Delete Session", response);
                alert("session deleted successfully!")
                getCourseDetails();
            })
            .catch((error) => {
                console.log(error);
            });
    };
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
                                    <h3>{courseName}</h3>
                                </div>
                                <div className="course-terms">
                                    <ul>
                                        <li>
                                            <div className="teacher-name">

                                                {/* <div className="name"> */}
                                                <span>Teacher</span>
                                                <h6>{instructor}</h6>
                                                {/* </div> */}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-category">
                                                <span>Category</span>
                                                <h6>{courseCategory} </h6>
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

                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            className="embed-responsive-item"
                                            src={introVideolink}

                                            // src={`https://www.youtube.com/embed/${introVideolink}`}
                                            frameBorder="0"
                                            allowFullScreen
                                            ng-show="showvideo"
                                        ></iframe>
                                    </div>
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
                                                    <h6>Course Description</h6>
                                                    <p>{courseDiscription}</p>
                                                    <p className='mt-5'>{courseDiscription2}</p>
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

                                                {
                                                    sessionList.length === 0 ?
                                                        <h3 className="text-center mt-5">Session is not available</h3> :
                                                        <>
                                                            <div className="title">
                                                                <h6>Learn basic javascript Lecture Started</h6>
                                                            </div>
                                                            {
                                                                sessionList.map((data, index) => {
                                                                    return (
                                                                        <>

                                                                            <div className="accordion" key={data.sessionId}>
                                                                                <div className="card">
                                                                                    <div className="card-header">
                                                                                        <a
                                                                                            onClick={() => toggleAccordion(data.sessionId)}
                                                                                            aria-expanded={openItems[data.sessionId]}
                                                                                        >
                                                                                            <ul>
                                                                                                <li><i className="fa fa-file-o"></i></li>
                                                                                                <li><span className="lecture">Lecture {index + 1}</span></li>
                                                                                                <li><span className="head">{data.sessionName}</span></li>
                                                                                                <li><span className="time d-none d-md-block"><i className="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                                                            </ul>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div
                                                                                        className={`accordion-collapse collapse ${openItems[data.sessionId] ? 'show' : ''
                                                                                            }`}
                                                                                    >
                                                                                        <div className="card-body">
                                                                                            <p>{data.sessionDescription}</p>

                                                                                            <div className='row'>
                                                                                                <div className='col'>
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="btn editButton text-white px-3 mt-3 btn-sm"
                                                                                                        style={{ "backgroundColor": "#4caf50" }}
                                                                                                        onClick={() => { navigate(`/test/${data.sessionId}`); console.log("346", data.sessionId) }}
                                                                                                    >
                                                                                                        Add Test
                                                                                                    </button>
                                                                                                    &nbsp;
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="btn editButton text-white px-3  mt-3 btn-sm"
                                                                                                        style={{ "backgroundColor": "rgb(27, 90, 144)" }}
                                                                                                        onClick={() => { navigate(`/testDetails/${data.sessionId}`); console.log("354", data.sessionId) }}
                                                                                                    >
                                                                                                        View Test
                                                                                                    </button>
                                                                                                    &nbsp;
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="btn editButton text-white px-3 mt-3 btn-sm"
                                                                                                        style={{ "backgroundColor": " #2196F3" }}
                                                                                                        data-bs-toggle="modal"
                                                                                                        data-bs-target="#exampleModal2"
                                                                                                        onClick={() => { getSessionById(data.sessionId) }}
                                                                                                    >
                                                                                                        Edit Session

                                                                                                    </button>
                                                                                                    &nbsp;
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="btn editButton text-white px-3  mt-3 btn-sm"
                                                                                                        style={{ "backgroundColor": "red" }}
                                                                                                        onClick={() => { deleteSession(data.sessionId) }}
                                                                                                    >
                                                                                                        Delete Session
                                                                                                    </button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </>

                                                                    )
                                                                })}

                                                        </>
                                                }



                                            </div>
                                        </div>
                                        <div className={`tab-pane fade ${activeTab === 2 ? "active" : ""
                                            }`}
                                            id="itemThree"
                                            role="tabpanel"
                                            aria-labelledby="itemThree-tab">
                                            <div className="instructor-cont">
                                                <div className="instructor-author">
                                                    <div className="author-thum" style={{ "width": "25%" }}>
                                                        <img src="/Images/team-1.jpg" alt="Instructor" style={{ "maxWidth": "100%", "display": "flex" }} />
                                                    </div>
                                                    <div className="author-name">
                                                        <a ><h5>John Doe</h5></a>
                                                        <span>Senior WordPress Developer</span>
                                                        <ul className="social">
                                                            <li><a ><Facebook /></a></li>
                                                            <li><a ><Twitter /></a></li>
                                                            <li><a ><Google /></a></li>
                                                            <li><a ><Linkedin /></a></li>
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
                                                                <div className="author-thum" style={{ "width": "10%" }}>
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
                                                                <div className="author-thum" style={{ "width": "10%" }}>
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
                                                                <div className="author-thum" style={{ "width": "10%" }}>
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
                            <div className='row mt-3'>
                                <div className='col'>
                                    <button
                                        type="button"
                                        className="btn editButton text-white px-3 btn-secondary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal1"
                                        style={{ "backgroundColor": " #2196F3" }}
                                    >
                                        Edit Course
                                    </button>
                                    &nbsp;&nbsp;
                                    <button
                                        type="button"
                                        className="btn editButton text-white px-3 btn-secondary"
                                        style={{ "backgroundColor": "red" }}
                                        onClick={deleteCourse}
                                    >
                                        Delete Course
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="course-features mt-30">
                                        <h4>Course Features </h4>
                                        <ul>
                                            <li><i className="fa fa-clock-o"></i>Duration : <span>{totalDuration}</span></li>
                                            <li><i className="fa fa-clone"></i>Lectures : <span>09</span></li>
                                            <li><i className="fa fa-beer"></i>Quizzes :  <span>05</span></li>
                                            <li><i className="fa fa-user-o"></i>Students :  <span>100</span></li>
                                            <li><i className="fa fa-user-o"></i>Language :  <span>{courseLang}</span></li>
                                            <li><i className="fa fa-user-o"></i>Start date :  <span> {courseStartDate}</span></li>
                                            <li><i className="fa fa-user-o"></i>End date :  <span> {courseEndDate}</span></li>
                                        </ul>
                                        <div className="price-button pt-10">
                                            <span>Price : <b>₹ {price}</b></span>
                                            <br/>
                                            <a className="main-btn btn-block mt-3" onClick={() => navigate("/session")}
                                            >
                                                Add Session</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="course-features mt-30">
                                        <div className=" pt-10">

                                            <a className="main-btn btn-block" onClick={() => navigate("/messagingInterface")}
                                            >
                                                Communication</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-1'>

                        </div>
                    </div>
                    <div
                        className="modal fade"
                        id="exampleModal1"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        Edit Course Details
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
                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        <div className="col-lg-5">
                                                            <label>Course Name</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <input
                                                                // defaultValue="Initial text"
                                                                type="text"
                                                                className="form-control"
                                                                id="sDate"
                                                                placeholder="Enter Course Name"
                                                                name="date"
                                                                value={courseName}
                                                                onChange={(e) => setCourseName(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 mt-2 mt-md-0">
                                                    <div className="row">
                                                        <div className="col-lg-5">
                                                            <label>Course Category</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <input
                                                                // defaultValue="Initial text"
                                                                type="text"
                                                                className="form-control"
                                                                id="sDate"
                                                                placeholder="Enter Course Category"
                                                                name="courseCategory"
                                                                value={courseCategory}
                                                                onChange={(e) =>
                                                                    setCourseCategory(e.target.value)
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br className="d-none d-md-block" />
                                            <div className="row ">
                                                <div className="col-lg-6 mt-2 mt-md-0">
                                                    <div className="row">
                                                        <div className="col-lg-5">
                                                            <label>Course Description</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <textarea
                                                                type="text"
                                                                className="form-control"
                                                                id="sDate"
                                                                placeholder="Enter Course Description"
                                                                name="courseDiscription"
                                                                value={courseDiscription}
                                                                onChange={(e) =>
                                                                    setCourseDiscription(e.target.value)
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 ">
                                                    <div className="row">
                                                        <div className="col-lg-5 mt-2 mt-md-0">
                                                            <label>Course Type</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <input
                                                                // defaultValue="Initial text"
                                                                type="text"
                                                                className="form-control"
                                                                id="sDate"
                                                                placeholder="Enter Course Type"
                                                                name="courseType"
                                                                value={courseType}
                                                                onChange={(e) => setCourseType(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br className="d-none d-md-block" />
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        <div className="col-lg-5 mt-2 mt-md-0">
                                                            <label>Course Start Date</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <input
                                                                // defaultValue="Initial text"
                                                                type="date"
                                                                className="form-control"
                                                                id="sDate"
                                                                placeholder="Enter Course Start Date"
                                                                name="courseStartDate"
                                                                value={courseStartDate}
                                                                onChange={(e) =>
                                                                    setCourseStartDate(e.target.value)
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        <div className="col-lg-5 mt-2 mt-md-0">
                                                            <label>Course End Date</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <input
                                                                // defaultValue="Initial text"
                                                                type="date"
                                                                className="form-control"
                                                                id="courseEndDate"
                                                                placeholder="Enter Course End Date"
                                                                name="courseEndDate"
                                                                value={courseEndDate}
                                                                onChange={(e) => setCourseEndDate(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br className="d-none d-md-block" />
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        <div className="col-lg-5 mt-2 mt-md-0">
                                                            <label>Course Price</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <input
                                                                // defaultValue="Initial text"
                                                                type="text"
                                                                className="form-control"
                                                                id="sDate"
                                                                placeholder="Enter Course Price"
                                                                name="price"
                                                                value={price}
                                                                onChange={(e) => setPrice(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        <div className="col-lg-5 mt-2 mt-md-0">
                                                            <label>Course Discount</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <input
                                                                // defaultValue="Initial text"
                                                                type="text"
                                                                className="form-control"
                                                                id="discount"
                                                                placeholder="Enter Course Discount"
                                                                name="discount"
                                                                value={discount}
                                                                onChange={(e) => setDiscount(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br className="d-none d-md-block" />
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        <div className="col-lg-5 mt-2 mt-md-0">
                                                            <label>Total Duration</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <input
                                                                // defaultValue="Initial text"
                                                                type="text"
                                                                className="form-control"
                                                                id="totalDuration"
                                                                placeholder="Enter Course Duration"
                                                                name="totalDuration"
                                                                value={totalDuration}
                                                                onChange={(e) => setTotalDuration(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        <div className="col-lg-5 mt-2 mt-md-0">
                                                            <label>Course Language</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <input
                                                                // defaultValue="Initial text"
                                                                type="text"
                                                                className="form-control"
                                                                id="courseLang"
                                                                placeholder="Enter Course Language"
                                                                name="courseLang"
                                                                value={courseLang}
                                                                onChange={(e) => setCourseLang(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br className="d-none d-md-block" />
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        <div className="col-lg-5 mt-2 mt-md-0">
                                                            <label>Instructor</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <input
                                                                // defaultValue="Initial text"
                                                                type="text"
                                                                className="form-control"
                                                                id="instructor"
                                                                placeholder="Enter Course Instructor"
                                                                name="instructor"
                                                                value={instructor}
                                                                onChange={(e) => setInstructor(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        <div className="col-lg-5 mt-2 mt-md-0">
                                                            <label>Skills</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <input
                                                                // defaultValue="Initial text"
                                                                type="text"
                                                                className="form-control"
                                                                id="skills"
                                                                placeholder="Enter Course Skills"
                                                                name="skills"
                                                                value={skills}
                                                                onChange={(e) => setSkills(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br className="d-none d-md-block" />
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        <div className="col-lg-5 mt-2 mt-md-0">
                                                            <label>Course Discription 2</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <textarea
                                                                type="text"
                                                                className="form-control"
                                                                id="courseDiscription2"
                                                                placeholder="Enter Course Description"
                                                                name="courseDiscription2"
                                                                value={courseDiscription2}
                                                                onChange={(e) =>
                                                                    setCourseDiscription2(e.target.value)
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        <div className="col-lg-5 mt-2 mt-md-0">
                                                            <label>Course Includes</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <input
                                                                // defaultValue="Initial text"
                                                                type="text"
                                                                className="form-control"
                                                                id="courseIncludes"
                                                                placeholder="Enter Course Includes"
                                                                name="courseIncludes"
                                                                value={courseIncludes}
                                                                onChange={(e) =>
                                                                    setCourseIncludes(e.target.value)
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br className="d-none d-md-block" />
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        <div className="col-lg-5 mt-2 mt-md-0">
                                                            <label>Course Image</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <input
                                                                // defaultValue="Initial text"
                                                                type="file"
                                                                className="form-control"
                                                                id="image"
                                                                placeholder="Enter Course Image"
                                                                name="image"
                                                                onChange={(e) =>
                                                                    handleImageUpload(e.target.files[0])
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="row">
                                                        <div className="col-lg-5 mt-2 mt-md-0">
                                                            <label>Course Intro Video Link</label>
                                                        </div>
                                                        <div className="col-lg-6 mt-2 mt-md-0">
                                                            <input
                                                                // defaultValue="Initial text"
                                                                type="text"
                                                                className="form-control"
                                                                id="introVideolink"
                                                                placeholder="Enter Course Intro Video Link"
                                                                name="introVideolink"
                                                                value={introVideolink}
                                                                onChange={(e) =>
                                                                    setIntroVideolink(e.target.value)
                                                                }
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
                                        onClick={handleEditCourseForm}
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
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        Edit Session Details
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="col-lg-5 mt-2 mt-md-0">
                                                        <label>Session Name</label>
                                                    </div>
                                                    <div className="col-lg-6 mt-2 mt-md-0">
                                                        <input
                                                            // defaultValue="Initial text"
                                                            type="text"
                                                            className="form-control"
                                                            id="sessionName"
                                                            placeholder="Enter Session Name"
                                                            name="sessionName"
                                                            value={sessionName}
                                                            onChange={(e) => setSessionName(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="col-lg-5 mt-2 mt-md-0">
                                                        <label>Session Description</label>
                                                    </div>
                                                    <div className="col-lg-6 mt-2 mt-md-0">
                                                        <textarea
                                                            type="text"
                                                            className="form-control"
                                                            id="sessionDescription"
                                                            placeholder="Enter Session Description"
                                                            name="sessionDescription"
                                                            value={sessionDescription}
                                                            onChange={(e) =>
                                                                setSessionDescription(e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br className="d-none d-md-block" />
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="col-lg-5 mt-2 mt-md-0">
                                                        <label>Session Link</label>
                                                    </div>
                                                    <div className="col-lg-6 mt-2 mt-md-0">
                                                        <input
                                                            // defaultValue="Initial text"
                                                            type="text"
                                                            className="form-control"
                                                            id="sessionLink"
                                                            placeholder="Enter Session Link"
                                                            name="sessionLink"
                                                            value={sessionLink}
                                                            onChange={(e) => setSessionLink(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="col-lg-5 mt-2 mt-md-0">
                                                        <label>Session Duration</label>
                                                    </div>
                                                    <div className="col-lg-6 mt-2 mt-md-0">
                                                        <input
                                                            // defaultValue="Initial text"
                                                            type="text"
                                                            className="form-control"
                                                            id="sDuration"
                                                            placeholder="Enter Session Duration"
                                                            name="sDuration"
                                                            value={duration}
                                                            onChange={(e) => setDuration(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-success text-white"
                                        onClick={EditSessionForm}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div
                        className="modal fade"
                        id="exampleModal3"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        Session Link
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div className="container-fluid py-3">
                                        <iframe
                                            className="embed-responsive-item"
                                            src={sessionLink}
                                            frameBorder="0"
                                            allowFullScreen
                                            ng-show="showvideo"
                                        ></iframe>
                                        <br />
                                        <h5>Duration: {duration}</h5>
                                    </div>
                                </div>

                            </div>
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