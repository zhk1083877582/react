import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../assets/css/index.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            domain:'http://a.itying.com'
         };
    }
    request=()=>{
        let api= this.state.domain+'/api/productlist';
        axios.get(api)
        .then((response) => {
            // handle success
            console.log(response);
            this.setState({
                list:response.data.result
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    componentDidMount(){
        this.request();
        
    }
    render() {
        return (
            <div>
               
				{
                    this.state.list.map((val,key)=>{
                        return(
                            <div className="item" key={key}>
                                <h3 className="item_cate">{val.title}</h3>
                            
                                <ul className="item_list">
                                    {
                                        val.list.map((item,key)=>{
                                            return(
                                                <li key={key}>
                                                    <Link to={`/Food/${item._id}`}>
                                                        <div className="inner">
                                                            <img className="item_img" src={`${this.state.domain}/${item.img_url}`}/>
                                                            
                                                            <p className="title">{item.title}</p>
                                                            
                                                            <p className="price">￥{item.price}</p>					
                                                        </div>	
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                    
                                    
                                </ul>
                            
                            </div>
                        )
                    })
                }
                
            </div>
        );
    }
}

export default List;