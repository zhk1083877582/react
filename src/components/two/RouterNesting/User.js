import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Info from './user/Info'
import Main from './user/Main'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
              <div>
                  <Link to='/RouterNesting/User/'>个人信息</Link>
                  <Link to='/RouterNesting/User/Main'>1111</Link>
                  <Route exact path={`${this.props.match.url}/`} component={Info}></Route>
                  <Route path={`${this.props.match.url}/Main`} component={Main}></Route>
              </div>
            </div>
        );
    }
}

export default Home;