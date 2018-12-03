import React, { Component } from 'react';


import Lifecycle from './components/Lifecycle.js';


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
      <div className="App">

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

        <button onClick={this.setTitle}>改变父组件title的值</button>
      </div>
    );
  }
}

export default App;
