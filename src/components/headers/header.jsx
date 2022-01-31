import React, { Component } from "react";
import SideBar from "../SideBar/sidebar";

class AppHeader extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="nav-header">
          <a href="/" className="brand-logo">
            <svg
              className="logo-abbr"
              width="48"
              height="36"
              viewBox="0 0 48 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="svg-logo-path"
                d="M18.281 14.25C18.281 13.2145 19.1204 12.375 20.156 12.375H35.3438C36.3794 12.375 37.2188 13.2145 37.2188 14.25C37.2188 15.2856 36.3794 16.125 35.3438 16.125H20.156C19.1204 16.125 18.281 15.2856 18.281 14.25ZM44.25 14.25C44.25 15.2839 45.0911 16.125 46.125 16.125C47.1606 16.125 48 16.9645 48 18V26.2461C48 27.2817 47.1606 28.1211 46.125 28.1211H32.2766L25.3258 35.072C24.5935 35.8043 23.4063 35.8041 22.6742 35.072L15.7234 28.1211H1.875C0.839437 28.1211 0 27.2817 0 26.2461V18C0 16.9645 0.839437 16.125 1.875 16.125C2.90887 16.125 3.75 15.2839 3.75 14.25C3.75 13.2162 2.90887 12.375 1.875 12.375C0.839437 12.375 0 11.5356 0 10.5V2.25397C0 1.2184 0.839437 0.378967 1.875 0.378967H46.125C47.1606 0.378967 48 1.2184 48 2.25397V10.5C48 11.5356 47.1606 12.375 46.125 12.375C45.0911 12.375 44.25 13.2162 44.25 14.25ZM11.2498 4.12897H3.75V8.94631C5.93259 9.72022 7.5 11.8055 7.5 14.25C7.5 16.6946 5.93259 18.7798 3.75 19.5537V24.3711H11.2498V4.12897ZM44.25 4.12897H14.9998V24.3711H16.5C16.9972 24.3711 17.4743 24.5686 17.8258 24.9202L24 31.0945L30.1742 24.9203C30.5257 24.5687 31.0028 24.3712 31.5 24.3712H44.25V19.5538C42.0674 18.7799 40.5 16.6947 40.5 14.2501C40.5 11.8056 42.0674 9.72031 44.25 8.9464V4.12897Z"
                fill="#2130B8"
              />
            </svg>
            <svg
              className="brand-title"
              width="87"
              height="28"
              viewBox="0 0 87 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="svg-logo-title"
                d="M0.0880001 7.11H6.412V27H11.172V7.11H17.496V3.268H0.0880001V7.11ZM20.969 27H25.729V8.164H20.969V27ZM23.383 5.92C25.049 5.92 26.307 4.696 26.307 3.132C26.307 1.568 25.049 0.343999 23.383 0.343999C21.683 0.343999 20.459 1.568 20.459 3.132C20.459 4.696 21.683 5.92 23.383 5.92ZM40.8359 27H46.2079L39.9519 17.548L46.1399 8.164H41.0399L37.5719 13.978L33.7299 8.164H28.3579L34.5799 17.548L28.4259 27H33.5259L36.9599 21.152L40.8359 27ZM48.7933 27H53.5533V8.164H48.7933V27ZM51.2073 5.92C52.8733 5.92 54.1313 4.696 54.1313 3.132C54.1313 1.568 52.8733 0.343999 51.2073 0.343999C49.5073 0.343999 48.2833 1.568 48.2833 3.132C48.2833 4.696 49.5073 5.92 51.2073 5.92ZM57.0322 17.514C57.0322 23.396 60.8402 27.306 65.6002 27.306C68.5922 27.306 70.7342 25.878 71.8562 24.246V27H76.6502V8.164H71.8562V10.85C70.7342 9.286 68.6602 7.858 65.6342 7.858C60.8402 7.858 57.0322 11.632 57.0322 17.514ZM71.8562 17.582C71.8562 21.152 69.4762 23.124 66.8582 23.124C64.3082 23.124 61.8942 21.084 61.8942 17.514C61.8942 13.944 64.3082 12.04 66.8582 12.04C69.4762 12.04 71.8562 14.012 71.8562 17.582ZM86.2971 24.45C86.2971 22.886 85.0731 21.662 83.4071 21.662C81.6731 21.662 80.4491 22.886 80.4491 24.45C80.4491 26.014 81.6731 27.238 83.4071 27.238C85.0731 27.238 86.2971 26.014 86.2971 24.45Z"
                fill="#2130B8"
              />
            </svg>
          </a>

          <div className="nav-control">
            <div className="hamburger">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="header-content">
            <nav className="navbar navbar-expand">
              <div className="collapse navbar-collapse justify-content-between">
                <div className="header-left">
                  <div className="dashboard_bar">Dashboard</div>
                </div>

                <ul className="navbar-nav header-right">
                  <li className="nav-item dropdown notification_dropdown">
                    <div className="input-group search-area">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search here..."
                      />
                      <span className="input-group-text">
                        <a href="/">
                          <i className="flaticon-381-search-2"></i>
                        </a>
                      </span>
                    </div>
                  </li>
                  <li className="nav-item dropdown notification_dropdown">
                    <a className="nav-link bell bell-link primary" href="/">
                      <div className="pulse-css"></div>
                    </a>
                  </li>
                  <li className="nav-item dropdown notification_dropdown">
                    <a
                      className="nav-link primary"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <div className="pulse-css"></div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <div
                        id="DZ_W_Notification1"
                        className="widget-media dz-scroll p-3"
                      >
                        <ul className="timeline">
                          <li>
                            <div className="timeline-panel">
                              <div className="media me-2">
                                <image
                                  alt="image"
                                  width="50"
                                  src="xhtml/images/avatar/1.jpg"
                                />
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1">
                                  Dr sultads Send you Photo
                                </h6>
                                <small className="d-block">
                                  29 July 2020 - 02:26 PM
                                </small>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel">
                              <div className="media me-2 media-info">KG</div>
                              <div className="media-body">
                                <h6 className="mb-1">
                                  Resport created successfully
                                </h6>
                                <small className="d-block">
                                  29 July 2020 - 02:26 PM
                                </small>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel">
                              <div className="media me-2 media-success">
                                <i className="fa fa-home"></i>
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1">
                                  Reminder : Treatment Time!
                                </h6>
                                <small className="d-block">
                                  29 July 2020 - 02:26 PM
                                </small>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel">
                              <div className="media me-2">
                                <image
                                  alt="image"
                                  width="50"
                                  src="xhtml/images/avatar/1.jpg"
                                />
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1">
                                  Dr sultads Send you Photo
                                </h6>
                                <small className="d-block">
                                  29 July 2020 - 02:26 PM
                                </small>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel">
                              <div className="media me-2 media-danger">KG</div>
                              <div className="media-body">
                                <h6 className="mb-1">
                                  Resport created successfully
                                </h6>
                                <small className="d-block">
                                  29 July 2020 - 02:26 PM
                                </small>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel">
                              <div className="media me-2 media-primary">
                                <i className="fa fa-home"></i>
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1">
                                  Reminder : Treatment Time!
                                </h6>
                                <small className="d-block">
                                  29 July 2020 - 02:26 PM
                                </small>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <a className="all-notification" href="/">
                        See all notifications <i className="ti-arrow-right"></i>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown header-profile">
                    <a
                      className="nav-link"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <image
                        src="xhtml/images/profile/pic1.jpg"
                        width="20"
                        alt="image"
                      />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a
                        href="app-profile.html"
                        className="dropdown-item ai-icon"
                      >
                        <span className="ms-2">Profile </span>
                      </a>
                      <a
                        href="email-inbox.html"
                        className="dropdown-item ai-icon"
                      >
                        <span className="ms-2">Inbox </span>
                      </a>
                      <a
                        href="page-login.html"
                        className="dropdown-item ai-icon"
                      >
                        <span className="ms-2">Logout </span>
                      </a>
                    </div>
                  </li>
                  <li className="dropdown schedule-event primary">
                    <a
                      href="/"
                      className="btn btn-primary btn-rounded event-btn"
                    >
                      <span className="d-none d-xl-inline-block">Schedule</span>{" "}
                      <span className="d-none d-lg-inline-block">Event(5)</span>
                      <i className="fa fa-caret-right scale3 ms-2 d-none d-sm-inline-block"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <SideBar/>
      </div>
    );
  }
}

export default AppHeader;
