
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
    navigate('/courseDetails');
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
     {isLoading ? <LoadingSpinner /> : 
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
                        // src="/login.jpg"
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
                      <h2
                        className="card-text fw-bold"
                        style={{ color: "#4e0fa9" }}
                      >
                        {" "}
                        ₹ {course.Price}
                      </h2>
                      <h4 className="card-title fw-bold">{course.CourseName}</h4>
                      {/* <p className="card-text">{course.CourseDiscription}</p> */}
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
}
    </>
  );
};

export default Courses;
