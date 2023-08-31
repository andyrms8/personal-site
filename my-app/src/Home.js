import React from 'react';
import './App.css';
import { Link } from "react-router-dom";


class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("Home Page Rendered")

        return(
            <body>
               
                <div class="header_and_footer">
                    <div id="categories">Home</div>
                    <div id="categories">About Me </div>
                    <div id="categories">Projects</div>
                    <div id="categories"><Link to='/resume'> Resume </Link></div>
                    <div id="categories">Contact</div>
                </div>
                <div class="typing">
                    Hi there! I'm Andy Wang
                </div>
            </body>
          
        );
    }
}


export default Home;