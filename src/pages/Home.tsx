import React from "react";
import Clock from "../components/Clock";
import Counter from "../components/Counter";

class Home extends React.Component {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>HOME </h1>
                <Clock origen="Home"/>
                <Counter/>
            </div>
        )
    }
}

export default Home;