/**
 * js实现路由跳转
 * 
 * 1. 引入Redirect
        import {
        BrowserRouter as Router,
        Route,
        Link,
        Redirect,
        withRouter
        } from "react-router-dom";  
 * 2. 定义一个Flag 
 */ 


import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            LoginFlag:false
         };
    }
    doLogin = (e) => {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        console.log(username +"---------------"+  password)
        if(username=='admin' && password == 123){
            this.setState({
                LoginFlag : true
            })
            console.log(this.state.LoginFlag)
        }else{
            alert(`登录失败`)
        }
    }
    render() {
        if(this.state.LoginFlag){
            console.log(123)
            return <Redirect to={{pathname:'/'}} />
        }
        
        return (
           <div>
               <form onSubmit={this.doLogin}>
                   <input type='text' ref="username" /><br/><br/>
                   <input type='password' ref="password" /><br/><br/>
                   <input type='submit' value="登 录" /><br/>
               </form>
           </div> 
        );
    }
}

export default Login;