import React from "react";
import Clock from "../components/Clock";

class Home extends React.Component {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>HOME </h1>
                <Clock origen="Home"/>
            </div>
        )
    }
}

export default Home;