import React, {Component} from 'react';

class GrandChildOne extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>GrandChildOne[{this.props.dark}]

            </div>
        )
    }
}


export default GrandChildOne;