import React, {Component, Fragment} from 'react';
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
                    {({dark,toggleTheme}) => (
                        <Fragment>
                            <div onClick={toggleTheme}>这里测试定义的context传过来的函数起什么作用2222</div>
                            <GrandChildOne  dark={dark}/>
                        </Fragment>

                    )}
                </ThemeContext.Consumer>
            </div>
        )
    }
}


export default ChildOne;