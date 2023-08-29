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
} from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import TheContent from "../TheContent";

const Home = (props) => {
  const [sidebar, setSidebar] = useState({ data: true });
  const [content, setContent] = useState(true);

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
                <span text-align="center">LMS Dashboard</span>
              </h3>
            </div>
            <ul className="list-unstyled components">
              <li className="active">
                <div className="dashboard">
                  <NavLink to="/" className="dashboard">
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
              <li className="nav-title ms-3">
                <strong>Masters</strong>
              </li>
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
                  <span className="ms-3">Courses</span>
                </NavLink>
                <ul className="collapse list-unstyled menu" id="homeSubmenu1">
                  <li>
                    <NavLink to="/addCourse" onClick={() => setSidebar(!sidebar)}>
                      Add Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/session" onClick={() => setSidebar(!sidebar)}>
                      Session
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/instructor" onClick={() => setSidebar(!sidebar)}>
                      Instructor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/test" onClick={() => setSidebar(!sidebar)}>
                      Test
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
              <nav className="navbar navbar-expand-lg sticky-top bg-primary ">
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
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        {/* <span className="material-icons">person</span> */}

                        <PersonFill style={{ fontSize: '24px', color: 'white' }} />

                      </NavLink>
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