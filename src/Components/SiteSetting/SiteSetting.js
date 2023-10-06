import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SocialLoginSetting from "./SocialLoginSetting";
import GeneralSetting from "./GeneralSetting";
import SeoSetting from "./SeoSetting";
import MailSetting from "./MailSetting";
import CustomStyleAndJs from "./CustomStyleAndJs";
// import "../Css/SiteSetting.css"

// ...

const SiteSetting = () => {
  const [activeTab, setActiveTab] = useState("generalSetting"); // Default tab is 'language'

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
                    <h4 className="card-title">Site Setting</h4>
                  </div>
                </div>
              </div>
              <div className="card-body pt-3">
                <ul className="nav nav-tabs customtab" role="tablist">
                  <li className="nav-item">
                    <NavLink
                    to=''
                      className={`nav-link ${
                        activeTab === "generalSetting" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("generalSetting")}
                      style={{ borderBottom: activeTab === "generalSetting" ? "3px solid rgb(27, 90, 144)" : "" }}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">General Setting</span>
                    </NavLink>
                  </li>
                  <br/>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        activeTab === "setSetting" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("setSetting")}
                      style={{ borderBottom: activeTab === "setSetting" ? "3px solid rgb(27, 90, 144)" : "" }}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">Seo Setting</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        activeTab === "mailSetting" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("mailSetting")}
                      style={{ borderBottom: activeTab === "mailSetting" ? "3px solid rgb(27, 90, 144)" : "" }}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">Mail Setting</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        activeTab === "customStyleAndJs" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("customStyleAndJs")}
                      style={{ borderBottom: activeTab === "customStyleAndJs" ? "3px solid rgb(27, 90, 144)" : "" }}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">Custom Style & JS</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        activeTab === "socialLoginSetting" ? "active show" : ""
                      }`}
                      onClick={() => setActiveTab("socialLoginSetting")}
                      style={{ borderBottom: activeTab === "socialLoginSetting" ? "3px solid rgb(27, 90, 144)" : "" }}
                    >
                      <span className="hidden-sm-up"></span>
                      <span className="hidden-xs-down">
                        Social Login Setting
                      </span>
                    </NavLink>
                  </li>
                </ul>

                {/* Add content for each tab */}
                {activeTab === "generalSetting" && (
                  <>
                    <GeneralSetting />
                  </>
                )}
                {activeTab === "setSetting" && (
                  <>
                    <SeoSetting />
                  </>
                )}
                {activeTab === "mailSetting" && (
                  <>
                    <MailSetting />
                  </>
                )}
                {activeTab === "customStyleAndJs" && (
                  <>
                    <CustomStyleAndJs />
                  </>
                )}
                {activeTab === "socialLoginSetting" && (
                  <>
                    <SocialLoginSetting />
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

export default SiteSetting;
