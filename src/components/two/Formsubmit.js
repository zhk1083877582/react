import React from 'react'

class Formsubmit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
                meg:'表单提交',
                name:'123',
                sex:'1',
                cityinfo:'北京',
                city:[
                    {   
                        id:1,
                        value:'北京'
                    },
                    {
                        id:2,
                        value:'上海'
                    },
                    {
                        id:3,
                        value:'广东'
                    }
                ],
                hobby:[
                    {
                        checked:true,
                        value:'吃饭'
                    },
                    {
                        checked:true,
                        value:'睡觉'
                    },
                    {
                        checked:true,
                        value:'运动'
                    }
                ]
        };
    }
    changeValue=(e)=>{
        let val = e.target.value
        this.setState({
            name:val
        })
    }
    handelSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.name,this.state.sex,this.state.cityinfo)
    }

    ChangeSexValue=(e)=>{
        this.setState({
            sex:e.target.value
        })
    }
    handelSelect=(e)=>{
        console.log(e.target)
        this.setState({
            cityinfo:e.target.value
        })
    }
    handelCheckbox=(e)=>{
        
    }
    render() {
        return (
            <div>
                <h2>{this.state.meg}</h2>
                <p>{this.state.name}</p>
                <form onSubmit={this.handelSubmit}>
                    姓名：<input value={this.state.name} onChange={this.changeValue}/> 
                    <br/><br/>
                    性别：<input id='man' type='radio' value='1' checked={this.state.sex=='1'} onChange={this.ChangeSexValue}/><label htmlFor='man'>男</label>
                          <input id='woman' type='radio' value='2' checked={this.state.sex=='2'} onChange={this.ChangeSexValue}/><label htmlFor='woman'>女</label>
                    <br/><br/>
                    居住城市：<select value={this.state.cityinfo} onChange={this.handelSelect}>
                                {
                                    this.state.city.map((item,index)=>{
                                        return <option key={item.id}>{item.value}</option>
                                    })
                                }
                             </select>
                    <br/><br/>
                    爱好：{
                        this.state.hobby.map((item,key)=>{
                            return(
                                <span key={key}>
                                    {item.value}<input type='checkbox' checked={item.checked} onChange={this.handelCheckbox} />
                                </span>
                            )
                        })
                    }
                    <br/><br/>
                    <input type='submit' defaultValue='提交'/>
                </form>
                  
            </div>
        );
    }
}

export default Formsubmit;