import React, {Component} from 'react';
import ChildOne from "./ChildOne";
import ChildTwo from './ChildTwo';
import ThemeContext from './ThemeContext';

class Father extends Component {

    constructor(props) {
        console.log('[Father]constructor')
        super(props)
        this.state = {
            abc: 1,

        }
    }


    componentWillMount() {
        console.log('[Father]componentWillMount');

        let newAbc = this.state.abc;
        for (let i = 0; i < [1, 2, 3, 4].length; i++) {
            newAbc++;
        }


        this.setState({
            abc: newAbc
        });

        console.log(this.state.abc)

    }


    changeAbc1() {
        this.setState({
            abc: this.state.abc + 1
        });
    }

    render() {
        console.log('[Father]render');
        console.log(this.context);

        return (
            <div>
                father[{this.state.abc}][{this.props.cde}]
                <button onClick={this.changeAbc1.bind(this)}>changeAbc1</button>
                <button onClick={this.props.changeCde}>changeCde1</button>
                <button onClick={this.props.changeFatherExist}>卸载father</button>

                <ThemeContext.Provider value="dark">
                    <ChildOne/>
                </ThemeContext.Provider>

                <ThemeContext.Consumer>
                    {({theme, toggleTheme}) => (
                        <ChildTwo  theme={theme}/>
                    )}
                </ThemeContext.Consumer>

            </div>
        )
    }


    componentDidMount() {
        console.log('[Father]componentDidMount')
        console.log(this.state.abc);
        /*
        * 可以在componentDidMount中setState
        * */
        // this.setState({
        //     abc:100
        // });

    }


    componentWillReceiveProps(nextProps) {
        console.log('[Father]componentWillReceiveProps');

        /*
        * 可以在componentWillReceiveProps中setState
        * */
        // this.setState({
        //     abc:100
        // });

    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Father]shouldComponentUpdate');

        /*
        * 事实证明，不要在shouldComponentUpdate中setState
        * */
        // this.setState({
        //     abc:100
        // });


        return true

    }


    componentWillUpdate() {
        console.log('[Father]componentWillUpdate');

        /*
        * 事实证明，不要在componentWillUpdate中setState
        * */
        // this.setState({
        //     abc: 100
        // });
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Father]componentDidUpdate');

        /*
        * 事实证明，不要在componentDidUpdate中setState
        * */
        // this.setState({
        //     abc: 100
        // });
    }


    componentWillUnmount() {
        console.log('[Father]componentWillUnmount')
    }


    componentDidCatch() {
        console.log('[Father]componentDidCatch')
    }


    static getDerivedStateFromError() {
        console.log('[Father]getDerivedStateFromError')
    }
}

Father.contextType = ThemeContext;

export default Father;