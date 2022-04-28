import React from "react";

const About: React.FC = () => {
    return (
        <div className="page flexContentCenter">
            <h1 className="bigTitle titleColor">About:</h1>
            <div  className="midTitle">Site name (.env): {process.env.REACT_APP_WEBSITE_NAME}</div>
            <div  className="midTitle">Data URL: {process.env.REACT_APP_WEATHER_SERVICE_URL}</div>
        </div>
    )
}

export default About;