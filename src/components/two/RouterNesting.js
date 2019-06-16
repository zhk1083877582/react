import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './RouterNesting/Home'
import User from './RouterNesting/User'
class router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Link to='/RouterNesting/'>首页</Link>
                <Link to='/RouterNesting/User'>个人中心</Link>

                <Route exact path='/RouterNesting/' component={Home}></Route>
                <Route path='/RouterNesting/User' component={User}></Route>
            </div>
        );
    }
}

export default router;