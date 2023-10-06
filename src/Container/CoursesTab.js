import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CourseInclude from "./CourseInclude";
import WhatLearns from "./WhatLearns";
import CourseChapter from "./CourseChapter";
import CourseClass from "./CourseClass";
import RelatedCourse from "./RelatedCourse";
import Question from "./Question";
import QuizTopic from "./QuizTopic";
// import CustomStyleAndJs from "./Container/CustomStyleAndJs";
// import "../Css/SiteSetting.css"

// ...

const CoursesTab = () => {
  const [activeTab, setActiveTab] = useState("language"); // Default tab is 'language'

  return (
    <>
      <div className="container-fluid">
        <div
          className="card m-3"
          style={{ boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">How To Build Confidence In Your Abilities</h4>
                  </div>
                </div>
              </div>
              <div className="card-body pt-3">
                <ul className="nav nav-tabs customtab" role="tablist">
                  <li className="nav-item">
                    <NavLink
                      to=""
                      className={`nav-link ${
                        activeTab === "courses" ? "active-underline" : ""
                      }`}
                      onClick={() => setActiveTab("courses")}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">Courses</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        activeTab === "courseInclude" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("courseInclude")}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">Course Include</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        activeTab === "whatLearns" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("whatLearns")}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">What Learns</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        activeTab === "courseChapter" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("courseChapter")}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">Course Chapter</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        activeTab === "courseClass" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("courseClass")}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">Course Class</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        activeTab === "relatedCourse" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("relatedCourse")}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">Related Course</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        activeTab === "question" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("question")}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">Question</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        activeTab === "answer" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("answer")}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">Answer</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        activeTab === "review&Rating" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("review&Rating")}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">Review & Rating</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        activeTab === "announcement" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("announcement")}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">Announcement</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        activeTab === "reviewReport" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("reviewReport")}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">Review Report</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        activeTab === "quizTopic" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("quizTopic")}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">Quiz Topic</span>
                    </NavLink>
                  </li>
                </ul>

                {/* Add content for each tab */}
                {activeTab === "course" && <>{/* <GeneralSetting /> */}</>}
                {activeTab === "courseInclude" && (
                  <>
                    <CourseInclude />
                  </>
                )}
                {activeTab === "whatLearns" && (
                  <>
                    <WhatLearns />
                  </>
                )}
                {activeTab === "courseChapter" && (
                  <>
                    <CourseChapter />
                  </>
                )}
                {activeTab === "courseClass" && (
                  <>
                    <CourseClass />
                  </>
                )}
                {activeTab === "relatedCourse" && (
                  <>
                    <RelatedCourse />
                  </>
                )}
                {activeTab === "question" && (
                  <>
                    <Question />
                  </>
                )}
                 {activeTab === "quizTopic" && (
                  <>
                    <QuizTopic />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesTab;
