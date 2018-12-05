# React+React-router4.x+Ant-Design+Flux 

#一、安装依赖包
    npm install --save
#二、启动项目 
    npm start
#三、打包
    npm build    




# react-router-dom 配置
## 1.react-router 官方文档     https://reacttraining.com/react-router/web/guides/quick-start

## 2.安装react-router-dom 
    cnpm install react-router-dom --save

## 3.找到项目的根组件  引入react-router-dom  
    import { BrowserRouter as Router, Route, Link } from "react-router-dom";

## 4.引入组件  配置路由
    render() {
    return (
      <Router>
        <div className="App">
        <header className="title">
          <Link to='/'>A</Link>
          <Link to='/B'>B</Link>
          <Link to='/C'>C</Link>
        </header>
          <Route exact path="/" component={A} />
          <Route path="/B" component={B} />
          <Route path="/C" component={C} />
        </div>
      </Router>
    );
  }
  exact 表示严格匹配
#  React 动态路由传值
## 1.动态路由配置
    <Route path="/content/:aid" component={Content} />
## 2.对应的动态路由加载的组件里面 获取传值
   this.props.match.params.aid


#  React 路由Get传值   

## 1.Get路由配置
    <Route path="/producecontent" component={ProduceContent}/>
## 2.对应的路由加载的组件里面 获取传值    
    this.props.location.search
    url.parse(this.props.location.search,true)解析url