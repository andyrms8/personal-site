import React from "react";
import { Link } from "react-router-dom";
import resume from './docs/Resume.pdf'


class Resume extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("Resume Page Rendered")
        return (
            <div>
                    <object data={resume} type="application/pdf" width="100%" height="800"></object>
            </div>
        );
    }
   
    
}

export default Resume;