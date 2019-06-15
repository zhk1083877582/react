import React from 'react'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userName:'姓名'
        }
    }
    changValue=(e)=>{
        console.log(e.target.value)
        this.setState({
            userName:e.target.value
        })
    }
    getInputvalue=()=>{
        console.log(this.state.userName)
    }
    render(){
        return (
            <div>
                 {/* 获取表单的值

                1、监听表单的改变事件                        onChange
                2、在改变的事件里面获取表单输入的值           事件对象
                3、把表单输入的值赋值给username              this.setState({})
                4、点击按钮的时候获取 state里面的username     this.state.username
                 */}

                <p>双向数据绑定</p>
                <br />
                <label htmlFor='userName'>姓名</label>
                <input id='userName' onChange={this.changValue} value={this.state.userName}/> 
                <br /><br />
                <button onClick={this.getInputvalue}>获取input输入框的值</button>
            </div>
        )
    }
}

export default Home;