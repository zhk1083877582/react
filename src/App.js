import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import A from './components/Arouter';
import B from './components/Brouter';
import C from './components/Crouter';
import Content from './components/Content-Crouter';
import ProduceContent from './components/ProduceContent.js';

import './assets/css/basic.css';

import Lifecycle from './components/Lifecycle.js';


//demo
import List from './components/demo/List';
import Food from './components/demo/ProductContent';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      title:'我是app组件的title',
      flag:true
    }

  }
  setFlag=()=>{

    this.setState({      

      flag:!this.state.flag
    })
  }
  setTitle=()=>{

    this.setState({      

      title:'我是app组件改变后的title'
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/" component={List} />
            <Route path="/Food/:id" component={Food} />
          {/* 
          //react 路由
            <header className="title">
              <Link to='/'>A</Link>
              <Link to='/B'>B</Link>
              <Link to='/C'>C</Link>
            </header>
          
            <Route exact path="/" component={A} />
            <Route path="/B" component={B} />
            <Route path="/C" component={C} />
            <Route path="/content/:aid" component={Content} />
            <Route path="/producecontent" component={ProduceContent}/>


          // 生命周期
          {
            this.state.flag?<Lifecycle title={this.state.title} />:""
          }
          <br />
          <br />
          
          <hr />

          <br />
          <br />


          <button onClick={this.setFlag}>挂载和销毁声明周期函数组件</button>


          <br />
          <br />

          <button onClick={this.setTitle}>改变父组件title的值</button> */}
        </div>
      </Router>
    );
  }
}

export default App;
