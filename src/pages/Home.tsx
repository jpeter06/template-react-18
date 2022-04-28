import React from "react";
import Clock from "../components/Clock";
import Counter from "../components/Counter";

class Home extends React.Component {

    render() {
        return (
            <div className="page flexContentCenter">
                <h1 className="bigTitle titleColor">HOME </h1>
                <Clock origen="Home"/>
                <Counter/>
            </div>
        )
    }
}

export default Home;