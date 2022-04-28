import React from "react";

const About: React.FC = () => {
    return (
        <div className="page flexContentCenter">
            <h1 className="bigTitle titleColor">About:</h1>
            <div  className="midTitle">Site name: {process.env.REACT_APP_WEBSITE_NAME}</div>
        </div>
    )
}

export default About;