import React, { Component } from 'react'
import AppHeader from '../components/headers/header';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <AppHeader pagename="DashBoard"/>
                <h1> Profile </h1>
            </div>
        );
    }
}
 
export default Home;