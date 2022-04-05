import React from "react";

const About: React.FC = () => {
    return (
        <div>
            <h1>About:</h1>
            <h2>Site name (.env): {process.env.REACT_APP_WEBSITE_NAME}</h2>
        </div>
    )
}

export default About;