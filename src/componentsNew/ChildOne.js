import React,{Component} from 'react';

class ChildOne extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div onClick={this.props.changeAbc}>ChildOne</div>
        )
    }
}

export default ChildOne;