import React, { useState, useEffect } from "react";
import {
  Speedometer2,
  Puzzle,
  Grid3x3GapFill,
  ListUl,
  ThreeDotsVertical,
  GearFill,
  PersonFill,
  BellFill,
  Book,
  BookFill,
  Calendar,
  Chat,
} from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import TheContent from "../TheContent";
import '../Components/Css/Profile.css';
import { Announcement, Category, DevicesOther, GolfCourse, MeetingRoom, PausePresentation, Payment, PaymentRounded, Settings } from "@material-ui/icons";

const Home = (props) => {
  const [sidebar, setSidebar] = useState({ data: true });
  const [content, setContent] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const name = !sidebar;
  useEffect(() => {
    const styles = {
      content: {
        width: "80px",

      },
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const sidebarCollapse = () => {
    setSidebar(name);
  };

  const MoreButton = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="wrapper">
        <div className="body-overlay"></div>
        {sidebar && (
          <nav className="sidebar" id="sidebar">
            <div className="sidebar-header">
              <h3>
               
                <span text-align="center" className="text-light">{/*  <img src="https://static.vecteezy.com/system/resources/previews/009/123/201/non_2x/lms-logo-lms-letter-lms-letter-logo-design-initials-lms-logo-linked-with-circle-and-uppercase-monogram-logo-lms-typography-for-technology-business-and-real-estate-brand-vector.jpg" alt="" style={{"width":"20%", "height":"3%"}}/> */} LMS Dashboard</span>
              </h3>
            </div>
            <ul className="list-unstyled components">
              <li className="active">
                <div className="dashboard">
                  <NavLink to="/dashboard" className="dashboard">
                    <Speedometer2 style={{ fontSize: "22px" }} />
                    <span className="ms-3">dashboard</span>
                    <span className="badge bg-primary ms-5">New</span>
                  </NavLink>
                </div>
              </li>
              <div className="small-screen navbar-display d-lg-none d-md-none d-xl-none d-none">
                {/* Rest of your small screen navigation */}
              </div>
              <br />
              {/* <li className="nav-title ms-3 text-light">
                <strong>Masters</strong>
              </li>
              <li className="dropdown">
                <NavLink
                  to="/courses"
                  role="button"
                >
                  <Puzzle style={{ fontSize: "22px" }} />
                  <span className="ms-3">Courses</span>
                </NavLink>
               
              </li>
              <li className="dropdown">
                <NavLink
                  to="/assignmentList"
                  role="button"
                >
                  <Puzzle style={{ fontSize: "22px" }} />
                  <span className="ms-3">Assignment List</span>
                </NavLink>
                </li>
                <li className="dropdown">
                <NavLink
                  to="/gradeAnalytics"
                  role="button"
                >
                  <Puzzle style={{ fontSize: "22px" }} />
                  <span className="ms-3">Grade Analytics</span>
                </NavLink>
                </li>
                <li className="dropdown">
                <NavLink
                  to="/gradeRecording"
                  role="button"
                >
                  <Puzzle style={{ fontSize: "22px" }} />
                  <span className="ms-3">Grade Recording</span>
                </NavLink>
                </li>
                <li className="dropdown">
                <NavLink
                  to="/feedbackInterface"
                  role="button"
                >
                  <Puzzle style={{ fontSize: "22px" }} />
                  <span className="ms-3">Feedback Interface</span>
                </NavLink>
                </li> */}
                <li className="dropdown">
                <NavLink
                  to="/homeSubmenu1"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                  data-bs-target="#homeSubmenu1"
                  role="button"
                  aria-controls="homeSubmenu1"
                >
                  <Puzzle style={{ fontSize: "22px" }} />

                  <span className="ms-3">Maters</span>
                </NavLink>
                <ul className="collapse list-unstyled menu" id="homeSubmenu1">
                  <li>
                    <NavLink
                      to="/assignmentMaster"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      Assignment Masters
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/userMaster"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      User Master
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/employeeMaster" onClick={() => setSidebar(!sidebar)}>
                      Employee Master
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/enrollmentMaster"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      Enrollment Master
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contentMaster"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      Content Master
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/languageMaster" onClick={() => setSidebar(!sidebar)}>
                      Language Master
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/parameterMaster"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      Parameter Master
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/parameterValueMaster"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      Parameter Value Master
                    </NavLink>
                  </li>
             

                </ul>
              </li>
              <li className="dropdown">
                <NavLink
                  to="/pageSubmenu2"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                  data-bs-target="#pageSubmenu2"
                  // role="button"
                  // aria-controls="homeSubmenu1"
                >
                  <BookFill style={{ fontSize: "22px" }} />

                  <span className="ms-3">Course</span>
                </NavLink>
                <ul className="collapse list-unstyled menu" id="pageSubmenu2">
                  <li>
                    <NavLink to="/courses" onClick={() => setSidebar(!sidebar)}>
                      Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cCourses"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      Course 1
                    </NavLink>
                  </li>
                 
                </ul>
              </li>
              <li className="dropdown">
                <NavLink
                  to="/pageSubmenu5"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  className="dropdown-toggle"
                  data-bs-target="#pageSubmenu5"
                >
                  <Category style={{ fontSize: "22px" }} />

                  <span className="ms-3">Category</span>
                </NavLink>
                <ul className="collapse list-unstyled menu" id="pageSubmenu5">
                  <li>
                    <NavLink to="/category" onClick={() => setSidebar(!sidebar)}>
                      Category
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/subCategory"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      Sub Category
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/childCategory"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      Child Category
                    </NavLink>
                  </li>
              
                </ul>
              </li>
              
              <li>
                <NavLink to="/meetingCalendar" data-bs-target="#pageSubmenu2">
                  <Calendar style={{ fontSize: "22px" }} />

                  <span className="ms-3" onClick={() => setSidebar(!sidebar)}>Scheduling Calendar</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/notificationMessage" data-bs-target="#pageSubmenu2">
                  <Announcement style={{ fontSize: "22px" }} />

                  <span className="ms-3" onClick={() => setSidebar(!sidebar)}>Announcement</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/mentorChat" data-bs-target="#pageSubmenu2">
                  <Chat style={{ fontSize: "22px" }} />

                  <span className="ms-3" onClick={() => setSidebar(!sidebar)}>Chat</span>
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink
                  to="/mentor"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  className="dropdown-toggle"
                  data-bs-target="#mentor"
                >
                  <PersonFill style={{ fontSize: "22px" }} />

                  <span className="ms-3">Mentor</span>
                </NavLink>
                <ul className="collapse list-unstyled menu" id="mentor">
                  <li>
                    <NavLink
                      to="/mentor"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      Mentor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/mentorDetails"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      Mentor Details
                    </NavLink>
                  </li>
                  
                </ul>
              </li>
              <li className="dropdown">
                <NavLink
                  to="/viewLectures"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  className="dropdown-toggle"
                  data-bs-target="#viewLectures"
                >
                  <PausePresentation style={{ fontSize: "22px" }} />

                  <span className="ms-3">View Lectures</span>
                </NavLink>
                <ul className="collapse list-unstyled menu" id="viewLectures">
                  <li>
                    <NavLink
                      to="/pdfViewer"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      Pdf Lectures
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/videoLectures"
                      onClick={() => setSidebar(!sidebar)}
                    >
                     Video Lectures
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pptLectures"
                      onClick={() => setSidebar(!sidebar)}
                    >
                     PPT Lectures
                    </NavLink>
                  </li>
                  
                </ul>
              </li>
              <li className="dropdown">
                <NavLink
                  to="/zoomLiveMeeting"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  className="dropdown-toggle"
                  data-bs-target="#zoomLiveMeeting"
                >
                  <MeetingRoom style={{ fontSize: "22px" }} />

                  <span className="ms-3">zoom Live Meetings</span>
                </NavLink>
                <ul className="collapse list-unstyled menu" id="zoomLiveMeeting">
                  <li>
                    <NavLink to="/zoomSetting" onClick={() => setSidebar(!sidebar)}>
                    Zoom Setting
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/createNewMeeting"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      Zoom Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/allMeetings"
                      onClick={() => setSidebar(!sidebar)}
                    >
                     All Meetings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/viewMeeting"
                      onClick={() => setSidebar(!sidebar)}
                    >
                     View Meetings
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <NavLink
                  to="/instructorPayout"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  className="dropdown-toggle"
                  data-bs-target="#instructorPayout"
                >
                  <PaymentRounded style={{ fontSize: "22px" }} />

                  <span className="ms-3">Instructor Payout</span>
                </NavLink>
                <ul className="collapse list-unstyled menu" id="instructorPayout">
                  <li>
                    <NavLink
                      to="/instructorPayout"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      Payout Setting
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/paymentInformation"
                      onClick={() => setSidebar(!sidebar)}
                    >
                     Payment Information
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pendingPayout"
                      onClick={() => setSidebar(!sidebar)}
                    >
                     Pending Payout
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/completedPayout"
                      onClick={() => setSidebar(!sidebar)}
                    >
                     Completed Payout 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/payToInstructor"
                      onClick={() => setSidebar(!sidebar)}
                    >
                   Pay To Instructor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/invoice"
                      onClick={() => setSidebar(!sidebar)}
                    >
                     Completed Payout 
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <NavLink
                  to="/pageSubmenu6"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  className="dropdown-toggle"
                  data-bs-target="#pageSubmenu6"
                >
                  <Settings style={{ fontSize: "22px" }} />

                  <span className="ms-3">Site Setting</span>
                </NavLink>
                <ul className="collapse list-unstyled menu" id="pageSubmenu6">
                  <li>
                    <NavLink to="/siteSetting" onClick={() => setSidebar(!sidebar)}>
                      Setting
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/siteSetting"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      Api Setting
                    </NavLink>
                  </li>
              
              
                </ul>
              </li>
             
              <li className="dropdown">
                <NavLink
                  to="/others"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  className="dropdown-toggle"
                  data-bs-target="#others"
                >
                  <DevicesOther style={{ fontSize: "22px" }} />

                  <span className="ms-3">Others</span>
                </NavLink>
                <ul className="collapse list-unstyled menu" id="others">
                  <li>
                    <NavLink
                      to="/assignmentList"
                      onClick={() => setSidebar(!sidebar)}
                    >
                      Grading and Assessment
                    </NavLink>
                  </li>
                  
                  <li>
                    <NavLink
                      to="/gradeAnalytics"
                      onClick={() => setSidebar(!sidebar)}
                    >
                     Grade Analytics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/gradeRecording"
                      onClick={() => setSidebar(!sidebar)}
                    >
                     Grade Recording
                     
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/rManagement3"
                      onClick={() => setSidebar(!sidebar)}
                    >
                    Study Material
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/countDownTimer"
                      onClick={() => setSidebar(!sidebar)}
                    >
                    Count Down Timer
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        )}

        <div id="content" style={{ width: sidebar ? content : "100%" }}>
          {content && (
            <div className="top-navbar ">
              <nav className="navbar navbar-expand-lg sticky-top " style={{ backgroundColor: '#1B5A90' }}>
                <button
                  type="button"
                  id="sidebar-collapse"
                  className="d-xl-block d-lg-block d-md-none d-none mx-2"
                >
                  {/* <span className="material-icons" onClick={sidebarCollapse}>
                    toc
                  </span> */}
                  <ListUl style={{ fontSize: '24px', marginBottom: '5px', transform: 'rotate(180deg)', color: 'white' }} onClick={sidebarCollapse} />
                </button>
                <NavLink className="navbar-brand text-white" to="/">
                  Dashboard
                </NavLink>
                <button
                  id="exnavbar"
                  className="collapse d-inline-block d-lg-none d-sm-block d-block ms-auto more-button"
                  type="button"
                  data-bs-toggle="collapse" /* onClick={()=>setSidebarShow(true)} */
                  // data-bs-target="#navbarSupportedContent"
                  // aria-controls="navbarSupportedContent"
                  data-bs-target="#sidebar"
                  aria-controls="sidebar"
                  aria-expanded="true" /* aria-label="Toggle navigation" */
                >
                  {/* <span className="material-icons" onClick={MoreButton}>
                    more_vert
                  </span> */}
                  <ThreeDotsVertical style={{ fontSize: '22px', color: 'white' }} onClick={MoreButton} />
                </button>

                <div
                  className="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none"
                  id="navbarSupportedContent"
                >
                  <ul className="nav navbar-nav ms-auto">
                    <li className="nav-item dropdown active">
                      <NavLink
                        className="nav-link"
                        to="/"
                        data-toggle="dropdown"
                      >
                        {/* <span className="material-icons">notifications</span> */}
                        <BellFill style={{ fontSize: '20px', color: 'white' }} />
                        <span className="notification text-white">4</span>
                      </NavLink>
                      <ul
                        className="dropdown-menu"
                        style={{ marginRight: "auto" }}
                      >
                        <li>
                          <NavLink to="/">You have 4 New Message</NavLink>
                        </li>
                        <li>
                          <NavLink to="/">You have 4 New Message</NavLink>
                        </li>
                        <li>
                          <NavLink to="/">You have 4 New Message</NavLink>
                        </li>
                        <li>
                          <NavLink to="/" className="nMsg">
                            You have 4 New Message
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        {/* <span className="material-icons">apps</span> */}
                        <Grid3x3GapFill style={{ fontSize: '22px', color: 'white' }} />

                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <div className="nav-link" onClick={toggleMenu} >
                        {/* <span className="material-icons">person</span> */}

                        <PersonFill style={{ fontSize: '24px', color: 'white' }} />

                        <div className={`sub-menu-wrap ${isSubMenuOpen ? 'open-menu' : ''}`} id="subMenu" style={{ "backgroundColor": "rgb(27, 90, 144)" }}>
                          <div className='sub-menu'>
                            <div className='user-info'>
                              <img src='Images/user.png' alt='User' />
                              <h4>Runali Kadam</h4>
                            </div>
                          </div>
                          <hr className="sub-menu-hr"/>
                          <NavLink to="/profile" className='sub-menu-link'>
                            <img src='Images/profile.png' alt='Profile' />
                            <p>Edit Profile</p>
                            <span></span>
                          </NavLink>
                          <NavLink to="/" className='sub-menu-link'>
                            <img src='Images/setting.png' alt='Settings' />
                            <p>Setting & Privacy</p>
                            <span></span>
                          </NavLink>
                          <NavLink to="/" className='sub-menu-link'>
                            <img src='Images/help.png' alt='Help' />
                            <p>Help & Support</p>
                            <span></span>
                          </NavLink>
                          <NavLink to="/" className='sub-menu-link'>
                            <img src='Images/logout.png' alt='Logout' />
                            <p>Logout</p>
                            <span></span>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        {/*<span className="material-icons">settings</span>*/}
                        <GearFill style={{ fontSize: '24px', color: 'white' }} />

                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          )}
          <TheContent />
        </div>
      </div>
    </>
  );
};

export default Home;
