import React, { Component } from 'react'

class AppHeader extends Component {
    state = {}
    render() {
        return (
            <div>
                {/* <div className="mdk-header-layout js-mdk-header-layout">
                    <div id="header" className="mdk-header js-mdk-header m-0" data-fixed>
                        <div className="mdk-header__content">

                            <div className="navbar navbar-expand-sm navbar-main navbar-dark bg-primary pl-md-0 pr-0" id="navbar" data-primary>
                                <div className="container-fluid pr-0 ">


                                    <button className="navbar-toggler navbar-toggler-custom d-lg-none d-flex mr-navbar" type="button" data-toggle="sidebar">
                                        <span className="material-icons">short_text</span>
                                    </button>


                                    <div className="d-flex sidebar-account flex-shrink-0 mr-auto mr-lg-0">
                                        <a href="index.html" className="flex d-flex align-items-center text-underline-0">
                                            <span className="mr-1  text-white">


                                            </span>
                                            <span className="flex d-flex flex-column text-white">
                                                <strong className="sidebar-brand">LEMA</strong>
                                            </span>
                                        </a>
                                    </div>





                                    <ul className="nav navbar-nav d-none d-lg-flex pl-2">
                                        <li className="nav-item dropdown">
                                            <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown" data-caret="false">
                                                <span className="mr-1"></span>
                                                Switch Layout</a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item active" href="index.html">Admin</a>
                                                <a className="dropdown-item" href="fluid-index.html">Full Width</a>
                                                <a className="dropdown-item" href="fixed-index.html">Fixed</a>
                                            </div>
                                        </li>
                                    </ul>



                                    <ul className="ml-auto nav navbar-nav mr-2 d-none d-lg-flex">
                                        <li className="nav-item"><a href="/" className="nav-link">Get Help</a></li>
                                    </ul>


                                    <form className="search-form search-form--light d-none d-sm-flex flex ml-3" action="https://lema.frontted.com/index.html">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <button className="btn" type="submit"><i className="material-icons">search</i></button>
                                    </form>


                                    <ul className="nav navbar-nav d-none d-md-flex">
                                        <li className="nav-item dropdown">
                                            <a href="/notifications_menu" className="nav-link dropdown-toggle" data-toggle="dropdown" data-caret="false">
                                                <span className="nav-icon navbar-notifications-indicator">

                                                </span>
                                            </a>
                                            <div id="notifications_menu" className="dropdown-menu dropdown-menu-right navbar-notifications-menu">
                                                <div className="dropdown-item d-flex align-items-center py-2">
                                                    <span className="flex navbar-notifications-menu__title m-0">Notifications</span>
                                                    <a href="/" className="text-muted"><small>Clear all</small></a>
                                                </div>
                                                <div className="navbar-notifications-menu__content" data-perfect-scrollbar>

                                                    <div className="dropdown-item d-flex py-2">
                                                        <div className="mr-3">
                                                            <div className="avatar avatar-xs">
                                                                <img src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <a href="/">A.Demian</a> left a comment on <a href="/">Stack</a><br />
                                                            <small className="text-muted">1 minute ago</small>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-item d-flex">
                                                        <div className="mr-3">
                                                            <a href="/">
                                                                <div className="avatar avatar-xs">
                                                                    <span className="avatar-title bg-primary rounded-circle"><i className="material-icons icon-16pt">person_add</i></span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="flex">
                                                            New user <a href="/">Peter Parker</a> signed up.<br />
                                                            <small className="text-muted">1 hour ago</small>
                                                        </div>
                                                    </div>


                                                    <div className="dropdown-item d-flex py-2">
                                                        <div className="mr-3">
                                                            <div className="avatar avatar-xs">
                                                                <img src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <a href="/">A.Demian</a> left a comment on <a href="/">Stack</a><br></br>
                                                            <small className="text-muted">1 minute ago</small>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-item d-flex">
                                                        <div className="mr-3">
                                                            <a href="/">
                                                                <div className="avatar avatar-xs">
                                                                    <span className="avatar-title bg-primary rounded-circle"><i className="material-icons icon-16pt">person_add</i></span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="flex">
                                                            New user <a href="/">Peter Parker</a> signed up.<br />
                                                            <small className="text-muted">1 hour ago</small>
                                                        </div>
                                                    </div>


                                                    <div className="dropdown-item d-flex py-2">
                                                        <div className="mr-3">
                                                            <div className="avatar avatar-xs">
                                                                <img src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <a href="/">A.Demian</a> left a comment on <a href="/">Stack</a><br></br>
                                                            <small className="text-muted">1 minute ago</small>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-item d-flex">
                                                        <div className="mr-3">
                                                            <a href="/">
                                                                <div className="avatar avatar-xs">
                                                                    <span className="avatar-title bg-primary rounded-circle"><i className="material-icons icon-16pt">person_add</i></span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="flex">
                                                            New user <a href="/">Peter Parker</a> signed up.<br />
                                                            <small className="text-muted">1 hour ago</small>
                                                        </div>
                                                    </div>





                                                    <a href="/" className="dropdown-item text-center navbar-notifications-menu__footer">View All</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/events-drawer" data-toggle="sidebar" className="nav-link d-flex align-items-center">
                                                <span className=" nav-icon">

                                                </span>
                                            </a>
                                        </li>

                                    </ul>

                                    <div className="dropdown">
                                        <a href="/account_menu" className="dropdown-toggle navbar-toggler navbar-toggler-dashboard border-left d-flex align-items-center ml-navbar" data-toggle="dropdown">
                                            <img src="assets/images/avatar/demi.png" className="rounded-circle" width="32" alt="Frontted" />
                                            <span className="ml-1 d-flex-inline">
                                                <span className="text-light">Adrian D.</span>
                                            </span>
                                        </a>
                                        <div id="company_menu" className="dropdown-menu dropdown-menu-right navbar-company-menu">
                                            <div className="dropdown-item d-flex align-items-center py-2 navbar-company-info py-3">

                                                <span className="mr-3">
                                                    <img src="assets/images/frontted-logo-blue.svg" width="43" height="43" alt="avatar" />
                                                </span>
                                                <span className="flex d-flex flex-column">
                                                    <strong className="h5 m-0">Adrian D.</strong>
                                                    <small className="text-muted text-uppercase">STUDENT</small>
                                                </span>

                                            </div>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item d-flex align-items-center py-2" href="student-edit-account.html">
                                                <span className="material-icons mr-2">account_circle</span> Edit Account
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center py-2" href="/">
                                                <span className="material-icons mr-2">settings</span> Settings
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center py-2" href="login.html">
                                                <span className="material-icons mr-2">exit_to_app</span> Logout
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}

                <div className="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                </div>
            </div>


        );
    }
}

export default AppHeader;