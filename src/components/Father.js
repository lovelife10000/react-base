import React, {Component, Fragment,useState,useEffect} from 'react';
import ChildOne from "./ChildOne";
import ChildTwo from './ChildTwo';
import ThemeContext from './ThemeContext';

const ButtonElement = React.forwardRef((props, ref) => {
    const [count, setCount2] = useState(0);
    debugger
    useEffect(() => {
       debugger
        document.title = `You clicked ${count} times`;
    });
    return (
        <button ref={ref} className="CustomButton">
            {props.children}
            <p>You clicked {count} times</p>
            <button onClick={() => setCount2(count + 1)}>
                Click me
            </button>
        </button>
    )

});

class Father extends Component {

    constructor(props) {
        console.log('[Father]constructor')
        super(props)

        this.myRef = React.createRef()
        this.myFnRef = React.createRef()
        debugger
        this.txtSearch = null;
        this.setInputSearchRef = e => {
            this.txtSearch = e;
        }


        this.state = {
            abc: 1,
        }

    }

    toggleTheme() {
        debugger
        this.setState(state => {//setstate还有这样一种写法，state参数等于this.state
            debugger
            return {
                theme:
                    666
            }
        });
    }


    componentWillMount() {
        console.log('[Father]componentWillMount');
debugger
        let newAbc = this.state.abc;
        for (let i = 0; i < [1, 2, 3, 4].length; i++) {
            newAbc++;
        }


        this.setState({
            abc: newAbc
        }, function () {
            debugger
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
        debugger
        return (
            <div ref={this.myRef}>
                father[{this.state.abc}][{this.props.cde}]
                <button ref={this.setInputSearchRef} onClick={this.changeAbc1.bind(this)}>changeAbc1</button>
                <button onClick={this.props.changeCde}>changeCde1</button>
                <button onClick={this.props.changeFatherExist}>卸载father</button>

                <ThemeContext.Provider value={{dark: 'dark', toggleTheme: this.toggleTheme.bind(this)}}>
                    <ChildOne/>
                </ThemeContext.Provider>

                <ThemeContext.Consumer>
                    {({theme, toggleTheme}) => (
                        <Fragment>
                            {/*<div onClick={toggleTheme}>这里测试定义的context传过来的函数起什么作用</div>*/}
                            <ChildTwo theme={theme}/>
                        </Fragment>

                    )}
                </ThemeContext.Consumer>

                <ButtonElement ref={this.myFnRef}>ButtonElement</ButtonElement>
            </div>
        )
    }


    componentDidMount() {
        console.log('[Father]componentDidMount')
        console.log(this.state.abc);
        console.log(this.myRef);
        console.log(this.txtSearch);
        console.log(this.myFnRef);

        debugger
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