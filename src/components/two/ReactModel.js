import React from 'react';
class ReactModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName1:'姓名'
         };
    }
    changeValue2=()=>{
        let val = this.refs.userName.value
        console.log(val)
        this.setState({
            userName1:val
        })
        console.log(this.state.userName1)
    }
    getInputValue=()=>{
        console.log(this.state.userName1)
    }
    render() {
        return (
            <div>
                <p>我是list组件</p>
                <br/><br/>
                <label htmlFor='listuserName'>姓名</label>
                <input id='listuserName' ref='userName' onChange={this.changeValue2} value={this.state.userName1}></input>
                <br/><br/>
                <button onClick={this.getInputValue}>获取输入框的值</button>   
            </div>
        );
    }
}

export default ReactModel;