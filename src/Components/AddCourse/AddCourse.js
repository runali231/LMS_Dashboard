
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UploadImage, addCourseForm } from "./AddCourseApi";


const AddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseDiscription, setCourseDiscription] = useState("");
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
  const [learningPoints, setLearningPoints] = useState("");
  const [introMongoid, setIntroMongoid] = useState("");


  const navigate = useNavigate();
  const handleAddCourseForm = () => {
    const data = {
      courseName,
      courseCategory,
      courseDiscription,
      courseType,
      courseStartDate,
      courseEndDate,
      totalDuration,
      discount,
      price,
      courseLang,
      instructor,
      skills,
      courseDiscription2,
      courseIncludes,
      introMongoid,
      introVideolink
    };

    addCourseForm(data)
      .then((response) => {
        console.log(response.data.data);
        alert("Course added successfully!")
        navigate('/courses');
        // router.push("/courses");
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
  return (
    <>
      <section className="container mt-5">
        <h3 className="mx-4">Add Course Details</h3>

        <div className="card shadow p-2 m-3 mt-5">
          <div className="container py-3">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-5">
                    <label>Course Name</label>
                  </div>
                  <div className="col-lg-6 mt-2 mt-md-0">
                    <input
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
                      type="text"
                      className="form-control"
                      id="sDate"
                      placeholder="Enter Course Category"
                      name="courseCategory"
                      value={courseCategory}
                      onChange={(e) => setCourseCategory(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <br className="d-none d-md-block"/>
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
                      onChange={(e) => setCourseDiscription(e.target.value)}
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
            <br className="d-none d-md-block"/>
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-5 mt-2 mt-md-0">
                    <label>Course Start Date</label>
                  </div>
                  <div className="col-lg-6 mt-2 mt-md-0">
                    <input
                      type="date"
                      className="form-control"
                      id="sDate"
                      placeholder="Enter Course Start Date"
                      name="courseStartDate"
                      value={courseStartDate}
                      onChange={(e) => setCourseStartDate(e.target.value)}
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
            <br className="d-none d-md-block"/>
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-5 mt-2 mt-md-0">
                    <label>Course Price</label>
                  </div>
                  <div className="col-lg-6 mt-2 mt-md-0">
                    <input
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
            <br className="d-none d-md-block"/>
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-5 mt-2 mt-md-0">
                    <label>Total Duration</label>
                  </div>
                  <div className="col-lg-6 mt-2 mt-md-0">
                    <input
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
            <br className="d-none d-md-block"/>
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-5 mt-2 mt-md-0">
                    <label>Instructor</label>
                  </div>
                  <div className="col-lg-6 mt-2 mt-md-0">
                    <input
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
            <br className="d-none d-md-block"/>
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
                      onChange={(e) => setCourseDiscription2(e.target.value)}
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
                      type="text"
                      className="form-control"
                      id="courseIncludes"
                      placeholder="Enter Course Includes"
                      name="courseIncludes"
                      value={courseIncludes}
                      onChange={(e) => setCourseIncludes(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <br className="d-none d-md-block"/>
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-5 mt-2 mt-md-0">
                    <label>Course Image</label>
                  </div>
                  <div className="col-lg-6 mt-2 mt-md-0">
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      placeholder="Enter Course Image"
                      name="image"
                      onChange={(e) => handleImageUpload(e.target.files[0])}
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
                      type="text"
                      className="form-control"
                      id="introVideolink"
                      placeholder="Enter Course Intro Video Link"
                      name="introVideolink"
                      value={introVideolink}
                      onChange={(e) => setIntroVideolink(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 mt-2 mt-md-0">
                <button
                  type="submit"
                  className="btn btn-primary btn-md"
                  onClick={handleAddCourseForm}
                >
                  Add Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default AddCourse;
