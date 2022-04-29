import React from "react";
import Clock from "../components/Clock";
class Home extends React.Component {

    render() {
        return (
            <div className="page flexContentCenter">
                <h1 className="bigTitle titleColor textCenter">{process.env.REACT_APP_WEBSITE_NAME}</h1>
                <Clock/>
            </div>
        )
    }
}

export default Home;