import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import Home from './RouterNesting/Home'
// import User from './RouterNesting/User'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
              我是Home组件
            </div>
        );
    }
}

export default Home;