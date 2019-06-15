import React from 'react'

import Storage from '../../model/storage'
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            TodoList:[
                // {
                //     value:123,
                //     checkbox:true
                // },
                // {
                //     value:456,
                //     checkbox:false
                // },
                // {
                //     value:789,
                //     checkbox:true
                // },
            ]
         };
    }
    addListData=(e)=>{
        let title = this.refs.title.value
        console.log(title)
        if(e.keyCode === 13){
            let temepList = this.state.TodoList
            temepList.push({
                value: title,
                checkbox: false
            })
            this.setState({
                TodoList:temepList
            })
            this.refs.title.value = ''
            Storage.set(TodoList,temepList)
        }
        
        
    }
    changeCheckbox=(index)=>{
        let temepList = this.state.TodoList
        temepList[index].checkbox = !temepList[index].checkbox
        this.setState({
            TodoList:temepList
        })
        Storage.set(TodoList,temepList)
    }
    deleteTodolistData=(index)=>{
        let temepList = this.state.TodoList
        temepList.splice(index,1)
        console.log(temepList)
        this.setState({
            TodoList:temepList
        })
        Storage.set(TodoList,temepList)
    }

    //生命周期
    componentDidMount(){
        if(Storage.get(TodoList)){
            this.setState({
                TodoList:Storage.get(TodoList)
            })
        }
    }
    render() {
        return (
            <div>
                <h2>TodoList <input ref='title' onKeyDown={this.addListData} /></h2>
                <h2>代办事项</h2>
                <ul>
                    {
                        this.state.TodoList.map((item,index)=>{
                            if(item.checkbox === false){
                                return (
                                    <li key={index}>
                                        <input type='checkbox' checked={item.checkbox} onChange={this.changeCheckbox.bind(this,index)}/>{item.value}
                                        =====<button onClick={this.deleteTodolistData.bind(this,index)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <h2>已完成事项</h2>
                <ul>
                    {
                        this.state.TodoList.map((item,index)=>{
                            if(item.checkbox === true){
                                return (
                                    <li key={index}>
                                        <input type='checkbox' checked={item.checkbox} onChange={this.changeCheckbox.bind(this,index)}/>{item.value}
                                        =====<button onClick={this.deleteTodolistData.bind(this,index)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;