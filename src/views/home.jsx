import React, { Component } from 'react'
import AppHeader from '../components/headers/header';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <AppHeader/>
                <h1> Home Page </h1>
            </div>
        );
    }
}
 
export default Home;