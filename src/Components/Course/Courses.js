
import React, { useState, useEffect } from "react";
import { getCourses } from "./courseApi";
import { useNavigate } from 'react-router-dom';
import '../Css/Courses.css'
import LoadingSpinner from "../LoadingSpinner";

const Courses = () => {


  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleApiCall();
  }, [courses]);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/addCourse');
  };

  const handleNavigate1 = (course) => {
    // navigate('/courseDetails');
    navigate('/courseDetails1');
    localStorage.setItem("course_id", course);
  };

  const handleApiCall = () => {
    setIsLoading(true);
    getCourses() // Call API function
      .then((response) => {
        setCourses(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const base64ToDataURL = (base64String) => {
    return `data:image/jpeg;base64,${base64String}`;
  };
  // ... JSX component rendering ...
  return (
    <>
      {/* {isLoading ? <LoadingSpinner /> :
        <section className="py-5">
          <div className="container">
            <h1 className="text-center fw-bold">All Courses</h1>
            <div className="courses">
              <div className="row">
                <div className="col-lg-12 mt-3">
                  <div className="form-group">
                    <button className="btn btn-primary btn-lg d-block d-lg-inline-block mx-auto mx-lg-0 float-lg-end me-lg-5"
                      type="submit" onClick={handleNavigate}>
                      Add Course
                    </button>
                  </div>
                </div>
              </div>
              <div className="row px-lg-5 py-4">
                {courses.map((course, index) => (
                  <div className="col-lg-4 mt-4" key={course.Id}>
                    <div className="card h-100 d-flex flex-column course-card">
                      {course.Card == null ? (
                        <img

                          src="NULL"
                          className="card-img-top"
                          width="400"
                          height="250"
                          alt=""
                          onClick={() => { handleNavigate1(course.Id) }}
                        />
                      ) : (
                        <img
                          src={base64ToDataURL(course.Card)}
                          className="card-img-top"
                          width="400"
                          height="250"
                          alt=""
                          onClick={() => { handleNavigate1(course.Id) }}
                        />
                      )}
                      <div className="card-body">

                        {
                          course.Price === "" ? <h2
                            className="card-text fw-bold"
                            style={{ color: "#4e0fa9" }}
                          >

                            Free

                          </h2>
                            :
                            <h2
                              className="card-text fw-bold"
                              style={{ color: "#4e0fa9" }}
                            >
                              ₹ {course.Price}

                            </h2>
                        }

                        <h4 className="card-title fw-bold">{course.CourseName}</h4>

                        <div className="row mt-4">
                          <div className="col-lg-6 col-6 text-start">
                            <h5>{course.CourseType}</h5>
                          </div>
                          <div className="col-lg-6 col-6 text-end">
                            <h5>{course.Discount}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

      } */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{ "letterSpacing": "5px" }}>Courses</h5>
            <h1>Our Popular Courses</h1>
          </div>
          <div className="row">
                <div className="col-lg-12 mt-3">
                  <div className="form-group">
                    <button className="btn btn-primary btn-lg d-block d-lg-inline-block mx-auto mx-lg-0 float-lg-end me-lg-5"
                      type="submit" onClick={handleNavigate}>
                      Add Course
                    </button>
                  </div>
                </div>
              </div>
          <div className="row mt-4">
            {
              courses.map((course, index) => {
                return (
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                      {course.Card === " " ? <img className="img-fluid" src="" alt="" /> : <img className="img-fluid" src={base64ToDataURL(course.Card)} alt="" />}

                      <div className="bg-secondary p-4">
                        <div className="d-flex justify-content-between mb-3">
                          <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                          <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                        </div>
                        <div className="h5" onClick={() => { handleNavigate1(course.Id) }} style={{ "cursor": "pointer" }}>
                          {course.CourseName}</div>
                        <div className="border-top mt-4 pt-4">
                          <div className="d-flex justify-content-between">
                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                            <h5 className="m-0">
                              {course.Price === "" ? "Free" : `₹ ${course.Price}`}</h5>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
