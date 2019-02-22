import React, {Component} from 'react';
import GrandChildOne from './GrandChildOne';
import  ThemeContext from './ThemeContext';

class ChildOne extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                ChildOne[]

                <ThemeContext.Consumer>
                    {(dark) => (
                        <GrandChildOne  dark={dark}/>
                    )}
                </ThemeContext.Consumer>
            </div>
        )
    }
}


export default ChildOne;