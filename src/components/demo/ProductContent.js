import React, { Component } from 'react';

import '../../assets/css/pcontent.css';
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            _id:'',
         };
    }
    componentDidMount(){
        //获取传过来的id
        console.log(this.props.match.params.id);
        this.setState({
            _id:this.props.match.params.id,
        })
    }
    render() {
        return (
            <div>
                <h2>商品详情页</h2>
            </div>
        );
    }
}

export default Content;