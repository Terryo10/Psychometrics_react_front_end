import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../state/actions/auth_action";

class SideBar extends Component {
  state = {};

  render() {
    const authed = localStorage.getItem("token");
    return (
      <div>
        <div className="deznav">
          <div className="deznav-scroll">
            <ul className="metismenu" id="menu">
              {authed === null ? (
                <>
                  <li>
                    <Link className="has-arrow ai-icon" to="/register">Register</Link>
                  </li>
                  <li>
                    <Link className="has-arrow ai-icon" to="/login">Login</Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    className="has-arrow ai-icon"
                    onClick={() => {
                      logout(this.props);
                    }}
                    to="/login"
                  >
                   <i class="flaticon-381-exit-1"></i>
							<span class="nav-text">Logout</span>
                  </Link>
                </li>
              )}
            </ul>
            <div className="copyright">
              <p>
                DESIGNAVE PSYCHOMETRICA
                <br />© 2022 All Rights Reserved
              </p>
              <p className="op5">
                Made with <span className="heart"></span> by Designave
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
