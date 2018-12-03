import React, { Component } from 'react';


import axios from 'axios';

class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            list:[]
         };
    }

    getData=()=>{


        //通过axios获取服务器数据

        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';   //接口后台允许了跨域

        axios.get(api)
        .then((response)=> {
            console.log(response.data.result);

            //用到this要注意this指向

            this.setState({

                list:response.data.result

            })
        })
        .catch(function (error) {
            console.log(error);
        });


    }
    //组件的生命周期函数

    componentDidMount(){

        this.getData();
    }

    render() {
        return (


            <div>


                <h2>axios获取服务器数据</h2>


                <button onClick={this.getData}>获取服务器api接口数据</button>

                <hr />

                <ul>
                    
                    {

                        this.state.list.map((value,key)=>{

                            return <li key={key}>{value.title}</li>
                        })
                    }   

                    
                </ul>


            </div>
        );
    }
}

export default Axios;