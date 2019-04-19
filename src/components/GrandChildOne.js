import React, {Component, Fragment} from 'react';

class GrandChildOne extends Component {
    constructor(props) {
        super(props)
    }

    clickGrandChildOne(){
        debugger
    }

    render() {
        return (
            <div onClick={this.clickGrandChildOne.bind(this)}>
                GrandChildOne[{this.props.dark}]
            </div>
        )
    }
}


export default GrandChildOne;