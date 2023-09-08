import React, { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../../util.token";
import { useNavigate } from "react-router-dom";
import { UploadImage, editCourseForm, editSession } from "./CourseDetailsApi";
import '../Css/CourseDetails.css'
import { Delete, Edit } from "@material-ui/icons";

const CourseDetails = () => {
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

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
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

  return (
    <>

      <div className="container-fluid p-lg-5 pt-4">
        <h1 className="text-center fw-bold">
          {/* Management Skills: The Science Of Leadership */}
          {courseName}
        </h1>

        <div className="row">
          <div className="col-lg-8">
            <div className="mt-5">
              <ul className="nav nav-tabs" id="myTabs" role="tablist">
                <li className={`nav-item ${activeTab === 0 ? "active" : ""}`} role="presentation">
                  <h4>
                    <span
                      className="fw-bold nav-link"
                      id="itemOne-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#itemOne"
                      role="tab"
                      aria-controls="itemOne"
                      aria-selected={activeTab === 0}
                      onClick={() => handleTabChange(0)}
                    >
                      Overview
                    </span>
                  </h4>
                </li>
                <li className={`nav-item ${activeTab === 1 ? "active" : ""}`} role="presentation">
                  <h4>
                    <span
                      className="fw-bold nav-link"
                      id="itemTwo-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#itemTwo"
                      role="tab"
                      aria-controls="itemTwo"
                      aria-selected={activeTab === 1}
                      onClick={() => handleTabChange(1)}
                    >
                      Session
                    </span>
                  </h4>
                </li>
                <li className={`nav-item ${activeTab === 2 ? "active" : ""}`} role="presentation">
                  <h4>
                    <span
                      className="fw-bold nav-link"
                      id="itemThree-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#itemThree"
                      role="tab"
                      aria-controls="itemThree"
                      aria-selected={activeTab === 2}
                      onClick={() => handleTabChange(2)}
                    >
                      Instructor
                    </span>
                  </h4>
                </li>
              </ul>
              <div className="container-fluid">
                <div className="tab-content" id="myTabsContent">
                  <div
                    className={`py-3 px-lg-3 tab-pane fade show ${activeTab === 0 ? "active" : ""
                      }`}
                    id="itemOne"
                    role="tabpanel"
                    aria-labelledby="itemOne-tab"
                  >
                    <h4 className="fw-bold justify-content-center">
                      Course Description
                    </h4>
                    <p className="py-3">{courseDiscription}</p>
                    <br />
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        // width="700"
                        // height="315"
                        // src="https://www.youtube.com/embed/VIDEO_ID"
                        // src="https://www.youtube.com/embed/eI4an8aSsgw"
                        src={introVideolink}
                        frameBorder="0"
                        allowFullScreen
                        ng-show="showvideo"
                      ></iframe>
                    </div>
                    <br />
                    <br />
                    <p className="py-3">{courseDiscription2}</p>
                    <button
                      type="button"
                      className="btn editButton text-white px-3 btn-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                    >
                      Edit Course
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      className="btn editButton text-white px-3 btn-secondary"
                      onClick={deleteCourse}
                    >
                      Delete Course
                    </button>
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === 1 ? "active" : ""
                      }`}
                    id="itemTwo"
                    role="tabpanel"
                    aria-labelledby="itemTwo-tab"
                  >
                    {/* <div className="section-title">
                          <h2>Instructor</h2>
                          <p>Lorem ipsum slt fdm dfsdsd fdf sewew trter dsds</p>
                        </div> */}

                    {
                      sessionList.length === 0 ?
                        <h3 className="text-center mt-5">Session is not available</h3> :


                        sessionList.map((data, index) => {
                          return (
                            <>
                              <section className="team" key={data.sessionId}>
                                <div className="container-fluid" key={data.sessionId}>
                                  <div className="row">
                                    <div className="col-lg-12 mt-4">
                                      <div className="row">
                                        <div className="col-lg-6">

                                        </div>
                                        <div className="col-lg-6 text-end">
                                          <button type="button" className="btn text-white px-3 btn-secondary btn-sm"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal2"
                                            data-bs-toggle1="tooltip"
                                            title="Edit Session"
                                            onClick={() => { getSessionById(data.sessionId) }}><Edit /></button>
                                            &nbsp;
                                             <button
                                            type="button"
                                            data-bs-toggle1="tooltip"
                                            title="Delete Session"
                                            className="btn editButton text-white px-3 btn-secondary btn-sm "
                                            onClick={() => { deleteSession(data.sessionId) }}
                                          >
                                            <Delete/>
                                          </button>
                                        </div>
                                      </div>
                                      <div className="member d-lg-flex d-md-flex align-items-start">
                                        <div className="member-info mt-3 mt-lg-0 mt-md-0">
                                          <h4>{data.sessionName}</h4>
                                          {/* <span>/Advanced Educator</span> */}
                                          <p>{data.sessionDescription}</p>
                                          {/* <br /> */}
                                          <h5 className="mt-3" type="button" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal3" onClick={() => getSessionById(data.sessionId)}>
                                            View: {data.sessionName} Video
                                          </h5>
{/* 
                                          <button
                                            type="button"
                                            className="btn editButton text-white px-3 btn-secondary mt-3"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal2"
                                            onClick={() => { getSessionById(data.sessionId) }}
                                          >
                                            Edit Session

                                          </button> */}
                                          {/* <button> <Edit/></button> */}

                                          &nbsp;
                                          <button
                                            type="button"
                                            className="btn editButton text-white px-3 btn-secondary mt-3 btn-sm" 
                                            onClick={() => { navigate(`/test/${data.sessionId}`); console.log("346", data.sessionId) }}
                                          >
                                            Add Test
                                          </button>
                                          &nbsp;
                                          <button
                                            type="button"
                                            className="btn editButton text-white px-3 btn-secondary mt-3 btn-sm"
                                            onClick={() => { navigate(`/testDetails/${data.sessionId}`); console.log("354", data.sessionId) }}
                                          >
                                            View Test
                                          </button>
                                          &nbsp;
                                          {/* <button
                                            type="button"
                                            className="btn editButton text-white px-3 btn-secondary mt-3"
                                            onClick={() => { deleteSession(data.sessionId) }}
                                          >
                                            Delete Session
                                          </button> */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </>
                          );
                        })


                    }

                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === 2 ? "active" : ""
                      }`}
                    id="itemThree"
                    role="tabpanel"
                    aria-labelledby="itemThree-tab"
                  >
                    <section className="team">
                      <div className="container-fluid">
                        {/* <div className="section-title">
                          <h2>Instructor</h2>
                          <p>Lorem ipsum slt fdm dfsdsd fdf sewew trter dsds</p>
                        </div> */}

                        <div className="row">
                          <div className="col-lg-12 mt-4">
                            <div className="member d-lg-flex d-md-flex align-items-start">
                              <div className="teampic">
                                <img
                                  src="/login.jpg"
                                  className="img-fluid"
                                  alt="team1"
                                />
                              </div>
                              <div className="member-info mt-3 mt-lg-0 mt-md-0">
                                <h4>Arthur Will</h4>
                                <span>/Advanced Educator</span>
                                <p>
                                  Arthur is a brilliant educator, whose life was
                                  spent for computer science and love of nature.
                                  Being a female, she encountered a lot of
                                  obstacles and was forbidden to work in this
                                  field by her family. With a true spirit and
                                  talented gift, she was able to succeed and set
                                  an example for others.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pt-5">
            <div className="card">
              <div className="row">
                <div className="col-lg-6 col-6 py-3 px-5 fw-bold">Price</div>
                <div className="col-lg-6 col-6 py-3 px-5 text-end fw-bold ">
                  {/* <h3>$24.00</h3> */}
                  <h3>₹ {price}</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-6 py-2 px-5 fw-bold">
                  Instructor
                </div>
                <div className="col-lg-6 col-6 py-2 px-5  text-end">
                  {instructor}
                </div>
              </div>
              <hr className="mx-4" />
              <div className="row">
                <div className="col-lg-6 col-6 py-1 px-5 fw-bold">Duration</div>
                <div className="col-lg-6 py-1 col-6 px-5 = text-end">
                  {totalDuration}
                </div>
              </div>
              <hr className="mx-4" />
              <div className="row">
                <div className="col-lg-6 col-6 py-1 px-5 fw-bold">
                  Start Date
                </div>
                <div className="col-lg-6 col-6 py-1 px-5  text-end">
                  {courseStartDate}
                </div>
              </div>
              <hr className="mx-4" />
              <div className="row">
                <div className="col-lg-6 col-6 py-1 px-5 fw-bold">End Date</div>
                <div className="col-lg-6 col-6 py-1 px-5  text-end">
                  {courseEndDate}
                </div>
              </div>
              <hr className="mx-4" />
              <div className="row">
                <div className="col-lg-6 col-6 py-1 px-5 fw-bold">Language</div>
                <div className="col-lg-6 col-6 py-1 px-5  text-end">
                  {courseLang}
                </div>
              </div>
              <hr className="mx-4" />
              <div className="row">
                <div className="col-lg-6 col-6 py-1 px-5 fw-bold">Deadline</div>
                <div className="col-lg-6 col-6 py-1 px-5  text-end">
                  Aug 01 2019
                </div>
              </div>
              <br />

              <div className="row mt-3">
                <div className="col-lg-12 text-center px-4">
                  {/* <button
                    type="button"
                    className="btn btn-secondary btn-lg btn-block w-100 me-5"
                  >
                    Enroll Now
                  </button> */}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12 text-center px-4 mb-3">
                  <button
                    type="button"
                    className="btn btn-secondary btn-md btn-block w-100 me-5 "
                    onClick={() => navigate("/session")}
                  >
                    Add Session
                  </button>
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
                    // width="700"
                    // height="315"
                    // src="https://www.youtube.com/embed/VIDEO_ID"
                    // src="https://www.youtube.com/embed/eI4an8aSsgw"
                    // src={`${sessionLinkById}/watch/tgbNymZ7vqY`}
                    src={sessionLink}
                    // src={sessionLinkById}
                    // src={courseVLink}
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
      </div>
      <section id="courses-single" class="pt-90 pb-120 gray-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="courses-single-left mt-30">
                        <div class="title">
                            <h3>Learn basic javascript from start for beginner</h3>
                        </div> 
                        <div class="course-terms">
                            <ul>
                                <li>
                                    <div class="teacher-name">
                                        <div class="thum">
                                        <img src="/assets/Images/reactImage.jpg" alt="Reviews"/>
                                        </div>
                                        <div class="name">
                                            <span>Teacher</span>
                                            <h6>Mark anthem</h6>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="course-category">
                                        <span>Category</span>
                                        <h6>Programming </h6>
                                    </div>
                                </li>
                                <li>
                                    <div class="review">
                                        <span>Review</span>
                                        <ul>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li class="rating">(20 Reviews)</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div> 
                        
                        <div class="courses-single-image pt-50">
                        <img src="/assets/Images/reactImage.jpg" alt="Reviews"/>
                        </div>
                        
                        <div class="courses-tab mt-30">
                            <ul class="nav nav-justified" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                                </li>
                                <li class="nav-item">
                                    <a id="curriculum-tab" data-toggle="tab" href="#curriculum" data-bs-target="curriculam" role="tab" aria-controls="curriculum" aria-selected="false">Curriculum</a>
                                </li>
                                <li class="nav-item">
                                    <a id="instructor-tab" data-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false">Instructor</a>
                                </li>
                                <li class="nav-item">
                                    <a id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                                </li>
                            </ul>
                            
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                    <div class="overview-description">
                                        <div class="single-description pt-40">
                                            <h6>Course Summery</h6>
                                            <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                        </div>
                                        <div class="single-description pt-40">
                                            <h6>Requrements</h6>
                                            <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
                                    <div class="curriculum-cont">
                                        <div class="title">
                                            <h6>Learn basic javascript Lecture Started</h6>
                                        </div>
                                        <div class="accordion" id="accordionExample">
                                            <div class="card">
                                                <div class="card-header" id="headingOne">
                                                    <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <ul>
                                                            <li><i class="fa fa-file-o"></i></li>
                                                            <li><span class="lecture">Lecture 1.1</span></li>
                                                            <li><span class="head">What is javascript</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>

                                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="card">
                                                <div class="card-header" id="headingTow">
                                                    <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseTow" aria-expanded="true" aria-controls="collapseTow">
                                                        <ul>
                                                            <li><i class="fa fa-file-o"></i></li>
                                                            <li><span class="lecture">Lecture 1.2</span></li>
                                                            <li><span class="head">What is javascript</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>

                                                <div id="collapseTow" class="collapse" aria-labelledby="headingTow" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card">
                                                <div class="card-header" id="headingThree">
                                                    <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        <ul>
                                                            <li><i class="fa fa-file-o"></i></li>
                                                            <li><span class="lecture">Lecture 1.3</span></li>
                                                            <li><span class="head">What is javascript</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>
                                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card">
                                                <div class="card-header" id="headingFore">
                                                    <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseFore" aria-expanded="false" aria-controls="collapseFore">
                                                        <ul>
                                                            <li><i class="fa fa-file-o"></i></li>
                                                            <li><span class="lecture">Lecture 1.4</span></li>
                                                            <li><span class="head">What is javascript</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>
                                                <div id="collapseFore" class="collapse" aria-labelledby="headingFore" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card">
                                                <div class="card-header" id="headingFive">
                                                    <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        <ul>
                                                            <li><i class="fa fa-file-o"></i></li>
                                                            <li><span class="lecture">Lecture 1.5</span></li>
                                                            <li><span class="head">What is javascript</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>
                                                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="card">
                                                <div class="card-header" id="headingSix">
                                                    <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                        <ul>
                                                            <li><i class="fa fa-file-o"></i></li>
                                                            <li><span class="lecture">Lecture 1.6</span></li>
                                                            <li><span class="head">What is javascript</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>
                                                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="card">
                                                <div class="card-header" id="headingSeven">
                                                    <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                        <ul>
                                                            <li><i class="fa fa-file-o"></i></li>
                                                            <li><span class="lecture">Lecture 1.7</span></li>
                                                            <li><span class="head">What is javascript</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>
                                                <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                    <div class="instructor-cont">
                                        <div class="instructor-author">
                                            <div class="author-thum">
                                                <img src="images/instructor/i-1.jpg" alt="Instructor"/>
                                            </div>
                                            <div class="author-name">
                                                <a href="#"><h5>John Doe</h5></a>
                                                <span>Senior WordPress Developer</span>
                                                <ul class="social">
                                                    <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="instructor-description pt-25">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fuga ratione molestiae unde provident quibusdam sunt, doloremque. Error omnis mollitia, ex dolor sequi. Et, quibusdam excepturi. Animi assumenda, consequuntur dolorum odio sit inventore aliquid, optio fugiat alias. Veritatis minima, dicta quam repudiandae repellat non sit, distinctio, impedit, expedita tempora numquam?</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                    <div class="reviews-cont">
                                        <div class="title">
                                            <h6>Student Reviews</h6>
                                        </div>
                                        <ul>
                                           <li>
                                               <div class="single-reviews">
                                                    <div class="reviews-author">
                                                        <div class="author-thum">
                                                            <img src="/assets/Images/reactImage.jpg" alt="Reviews"/>
                                                        </div>
                                                        <div class="author-name">
                                                            <h6>Bobby Aktar</h6>
                                                            <span>April 03, 2019</span>
                                                        </div>
                                                    </div>
                                                    <div class="reviews-description pt-20">
                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                        <div class="rating">
                                                            <ul>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                            </ul>
                                                            <span>/ 5 Star</span>
                                                        </div>
                                                    </div>
                                                </div> 
                                           </li>
                                           <li>
                                               <div class="single-reviews">
                                                    <div class="reviews-author">
                                                        <div class="author-thum">
                                                        <img src="/assets/Images/reactImage.jpg" alt="Reviews"/>
                                                        </div>
                                                        <div class="author-name">
                                                            <h6>Humayun Ahmed</h6>
                                                            <span>April 13, 2019</span>
                                                        </div>
                                                    </div>
                                                    <div class="reviews-description pt-20">
                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                        <div class="rating">
                                                            <ul>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                            </ul>
                                                            <span>/ 5 Star</span>
                                                        </div>
                                                    </div>
                                                </div>
                                           </li>
                                           <li>
                                               <div class="single-reviews">
                                                    <div class="reviews-author">
                                                        <div class="author-thum">
                                                        <img src="/assets/Images/reactImage.jpg" alt="Reviews"/>
                                                        </div>
                                                        <div class="author-name">
                                                            <h6>Tania Aktar</h6>
                                                            <span>April 20, 2019</span>
                                                        </div>
                                                    </div>
                                                    <div class="reviews-description pt-20">
                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                        <div class="rating">
                                                            <ul>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                            </ul>
                                                            <span>/ 5 Star</span>
                                                        </div>
                                                    </div>
                                                </div> 
                                           </li>
                                        </ul>
                                        <div class="title pt-15">
                                            <h6>Leave A Comment</h6>
                                        </div>
                                        <div class="reviews-form">
                                            <form action="#">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-single">
                                                            <input type="text" placeholder="Fast name"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-single">
                                                            <input type="text" placeholder="Last Name"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-single">
                                                            <div class="rate-wrapper">
                                                                <div class="rate-label">Your Rating:</div>
                                                                <div class="rate">
                                                                    <div class="rate-item"><i class="fa fa-star" aria-hidden="true"></i></div>
                                                                    <div class="rate-item"><i class="fa fa-star" aria-hidden="true"></i></div>
                                                                    <div class="rate-item"><i class="fa fa-star" aria-hidden="true"></i></div>
                                                                    <div class="rate-item"><i class="fa fa-star" aria-hidden="true"></i></div>
                                                                    <div class="rate-item"><i class="fa fa-star" aria-hidden="true"></i></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-single">
                                                            <textarea placeholder="Comment"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-single">
                                                            <button type="button" class="main-btn">Post Comment</button>
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
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-12 col-md-6">
                            <div class="course-features mt-30">
                               <h4>Course Features </h4>
                                <ul>
                                    <li><i class="fa fa-clock-o"></i>Duaration : <span>10 Hours</span></li>
                                    <li><i class="fa fa-clone"></i>Leactures : <span>09</span></li>
                                    <li><i class="fa fa-beer"></i>Quizzes :  <span>05</span></li>
                                    <li><i class="fa fa-user-o"></i>Students :  <span>100</span></li>
                                </ul>
                                <div class="price-button pt-10">
                                    <span>Price : <b>$25</b></span>
                                    <a href="#" class="main-btn">Enroll Now</a>
                                </div>
                            </div> 
                        </div>
                        <div class="col-lg-12 col-md-6">
                            <div class="You-makelike mt-30">
                                <h4>You make like </h4> 
                                <div class="single-makelike mt-20">
                                    <div class="image">
                                    <img src="/assets/Images/reactImage.jpg" alt="Reviews"/>
                                    </div>
                                    <div class="cont">
                                        <a href="#"><h4>Introduction to machine languages</h4></a>
                                        <ul>
                                            <li><a href="#"><i class="fa fa-user"></i>31</a></li>
                                            <li>$50</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="single-makelike mt-20">
                                    <div class="image">
                                    <img src="/assets/Images/reactImage.jpg" alt="Reviews"/>
                                    </div>
                                    <div class="cont">
                                        <a href="#"><h4>How to build a basic game with java </h4></a>
                                        <ul>
                                            <li><a href="#"><i class="fa fa-user"></i>31</a></li>
                                            <li>$50</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="single-makelike mt-20">
                                    <div class="image">
                                    <img src="/assets/Images/reactImage.jpg" alt="Reviews"/>
                                    </div>
                                    <div class="cont">
                                        <a href="#"><h4>Basic accounting from primary</h4></a>
                                        <ul>
                                            <li><a href="#"><i class="fa fa-user"></i>31</a></li>
                                            <li>$50</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8">
                    <div class="related-courses pt-95">
                        <div class="title">
                            <h3>Related Courses</h3>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="single-course mt-30">
                                    <div class="thum">
                                        <div class="image">
                                        <img src="/assets/Images/reactImage.jpg" alt="Reviews"/>
                                        </div>
                                        <div class="price">
                                            <span>Free</span>
                                        </div>
                                    </div>
                                    <div class="cont">
                                        <ul>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                        <span>(20 Reviews)</span>
                                        <a href="courses-single.html"><h4>Learn basic javascript from start for beginner</h4></a>
                                        <div class="course-teacher">
                                            <div class="thum">
                                                <a href="#"> <img src="/assets/Images/reactImage.jpg" alt="Reviews"/></a>
                                            </div>
                                            <div class="name">
                                                <a href="#"><h6>Mark anthem</h6></a>
                                            </div>
                                            <div class="admin">
                                                <ul>
                                                    <li><a href="#"><i class="fa fa-user"></i><span>31</span></a></li>
                                                    <li><a href="#"><i class="fa fa-heart"></i><span>10</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-course mt-30">
                                    <div class="thum">
                                        <div class="image">
                                        <img src="/assets/Images/reactImage.jpg" alt="Reviews"/>
                                        </div>
                                        <div class="price">
                                            <span>Free</span>
                                        </div>
                                    </div>
                                    <div class="cont">
                                        <ul>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                        <span>(20 Reviews)</span>
                                        <a href="courses-single.html"><h4>Learn basic javascript from start for beginner</h4></a>
                                        <div class="course-teacher">
                                            <div class="thum">
                                                <a href="#"> <img src="/assets/Images/reactImage.jpg" alt="Reviews"/></a>
                                            </div>
                                            <div class="name">
                                                <a href="#"><h6>Mark anthem</h6></a>
                                            </div>
                                            <div class="admin">
                                                <ul>
                                                    <li><a href="#"><i class="fa fa-user"></i><span>31</span></a></li>
                                                    <li><a href="#"><i class="fa fa-heart"></i><span>10</span></a></li>
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
    </section>
    </>
  );
};

export default CourseDetails;
