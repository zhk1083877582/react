import React,{Component} from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div>
                {this.props.match.params.aid}
            </div>
        );
    }
}

export default Content;
