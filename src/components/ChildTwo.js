import React,{Component} from 'react';

class ChildTwo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>ChildTwo[{this.props.theme.background}]</div>
        )
    }
}

export default ChildTwo;