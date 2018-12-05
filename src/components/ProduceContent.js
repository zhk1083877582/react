import React,{Component} from 'react';

//引入url模块解析url地址  在node.js中不需要安装
import url from 'url';

class ProduceContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            query:{}
         };
    }
    componentDidMount(){
       //获取get传值
       console.log(url.parse(this.props.location.search,true));
       let query = url.parse(this.props.location.search,true).query;
       this.setState({
        query:query
       })
    }
    render() {
        return (
            <div>
                <h1>新闻详情组件router-get传值</h1>
                {this.state.query.aid}
            </div>
        );
    }
}

export default ProduceContent;
