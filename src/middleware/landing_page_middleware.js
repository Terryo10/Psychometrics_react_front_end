import React from "react";
import { Navigate} from 'react-router-dom';
  
export const LandingPrivateRoute = ({ children }) => {
    const authed = localStorage.getItem('token') // isauth() returns true or false based on localStorage
    
    return authed ? children : <Navigate to="/landing" />;
  }