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

    //键盘事件
    KeyDown=(e)=>{
        console.log(e.keyCode)
        if(e.keyCode === 13){
            alert(e.target.value)
        }
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
                <br/><br/>
                <p>键盘事件</p>
                <input onKeyDown={this.KeyDown}></input>
            </div>
        );
    }
}

export default ReactModel;