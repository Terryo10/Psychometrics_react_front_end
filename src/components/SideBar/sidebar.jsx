import React, { Component } from 'react';
import {Link} from "react-router-dom";

class SideBar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className="deznav">
                    <div className="deznav-scroll">
                        <ul className="metismenu" id="menu">
                                    <li><Link to="/register">Register</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                        </ul>
                        <div className="copyright">
                            <p>DESIGNAVE PSYCHOMETRICA<br/>© 2022 All Rights Reserved</p>
                            <p className="op5">Made with <span className="heart"></span> by Designave</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SideBar;