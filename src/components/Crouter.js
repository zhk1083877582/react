import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Crouter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    aid:1,
                    title:111111
                },
                {
                    aid:2,
                    title:22222
                },
                {
                    aid:3,
                    title:33333
                },
                {
                    aid:4,
                    title:44444
                },
            ]
         };
    }
    render() {
        return (
            <div>
                C组件-router
                <ul>
                    {
                        this.state.list.map((val,key)=>{
                            return (
                                <li key={key}>
                                    <Link to={`/Content/${val.aid}`}>{val.title}</Link>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Crouter;