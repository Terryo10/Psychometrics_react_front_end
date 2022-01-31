import React, { Component } from "react";
import { Link } from "react-router-dom";
import {login} from "../../state/actions/auth_action";
import { connect } from "react-redux";

class Login extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  login = (e) => {
    let loginState = {
      email: this.state.email,
      password: this.state.password,
    };
    e.preventDefault();
    this.props.login(loginState, this.props.history);
  };

  render() {
    return (
      <div className="vh-100">
        <div className="authincation h-100">
          <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
              <div className="col-md-6">
                <div className="authincation-content">
                  <div className="row no-gutters">
                    <div className="col-xl-12">
                      <div className="auth-form">
                        <div className="text-center mb-3">
                          <a href="index.html">
                            <img src="images/logo-full.png" alt="" />
                          </a>
                        </div>
                        <h4 className="text-center mb-4">
                          Sign in your account
                        </h4>
                        <form action="POST" onSubmit={this.login}>
                          <div className="form-group">
                            <label className="mb-1">
                              <strong>Email</strong>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="my@email.com"
                              name="email"
                              value={this.state.email}
                              required
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="form-group">
                            <label className="mb-1">
                              <strong>Password</strong>
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              required
                              value={this.state.password}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="form-row d-flex justify-content-between mt-4 mb-2">
                            <div className="form-group">
                              <div className="form-check custom-checkbox ms-1">
                               
                                <label
                                  className="form-check-label"
                                  for="basic_checkbox_1"
                                >
                                  
                                </label>
                              </div>
                            </div>
                            <div className="form-group">
                              <a href="page-forgot-password.html">
                                Forgot Password?
                              </a>
                            </div>
                          </div>
                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn btn-primary btn-block"
                            >
                              Sign Me In
                            </button>
                          </div>
                        </form>
                        <div className="new-account mt-3">
                          <p>
                            Don't have an account?{" "}
                            <Link className="text-primary" to="/register">
                              Sign up
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginResponse: state.auth.authResponse,
   
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds, history) => dispatch(login(creds, history)),
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
