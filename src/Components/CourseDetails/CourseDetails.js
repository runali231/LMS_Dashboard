import React, { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../../util.token";
import { useNavigate } from "react-router-dom";
import { UploadImage, editCourseForm, editSession } from "./CourseDetailsApi";
import '../Css/CourseDetails.css'
// import { useRouter } from "next/router";

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
  const [sessionId, setSessionId] = useState();




  useEffect(() => {
    getCourseDetails();
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

  return (
    <>

      <div className="container p-lg-5 pt-4">
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
              <div className="container">
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
                        src="https://www.youtube.com/embed/eI4an8aSsgw"
                        // src={courseVLink}
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
                    {sessionList.map((data, index) => {
                      return (
                        <>
                          <section className="team" key={data.sessionId}>
                            <div className="container" key={data.sessionId}>
                              <div className="row">
                                <div className="col-lg-12 mt-4">
                                  <div className="member d-lg-flex d-md-flex align-items-start">
                                    <div className="member-info mt-3 mt-lg-0 mt-md-0">
                                      <h4>{data.sessionName}</h4>
                                      {/* <span>/Advanced Educator</span> */}
                                      <p>{data.sessionDescription}</p>
                                      {/* <br /> */}
                                      <h5 className="mt-3" type="button" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal3" onClick={() => getSessionById(data.sessionId)}>
                                        Section 1: Simple and atainable goals
                                      </h5>

                                      <button
                                        type="button"
                                        className="btn editButton text-white px-3 btn-secondary mt-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal2"
                                        onClick={() => { getSessionById(data.sessionId) }}
                                      >
                                        Edit Session
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </>
                      );
                    })}
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === 2 ? "active" : ""
                      }`}
                    id="itemThree"
                    role="tabpanel"
                    aria-labelledby="itemThree-tab"
                  >
                    <section className="team">
                      <div className="container">
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
                    className="btn btn-secondary btn-lg btn-block w-100 me-5"
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
                <section className="container ">
                  <div className="container py-3">
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
                <div className="container py-3">
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
                <div className="container py-3">
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
    </>
  );
};

export default CourseDetails;
