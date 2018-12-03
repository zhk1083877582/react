# react-router-dom 配置
## 1.react-router 官方文档 ##       https://reacttraining.com/react-router/web/guides/quick-start

## 2.安装react-router-dom 
    cnpm install react-router-dom --save

## 3.找到项目的根组件  引入react-router-dom  
    import { BrowserRouter as Router, Route, Link } from "react-router-dom";

## 4.配置路由
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