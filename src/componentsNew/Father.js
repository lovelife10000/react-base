import React, {Component} from 'react';
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";


class Father extends Component {

    constructor(props) {
        console.log('[Father]constructor')
        super(props)
        this.state = {
            abc: 1
        }
    }

    changeAbc() {
        this.setState(function (state) {
            return {
                abc: state.abc + 1
            }
        });
    }

    static getDerivedStateFromProps(props, state) {
        debugger
        //getDerivedStateFromProps与componentWillMount/componentWillReceiveProps/componentWillUpdate互斥
        console.log('[Father]getDerivedStateFromProps');
    }


    render() {

        console.log('[Father]render');
        debugger
        return (
            <div>
                father[{this.state.abc}]
                <ChildOne changeAbc={this.changeAbc.bind(this)}></ChildOne>
                <ChildTwo></ChildTwo>
            </div>
        )
    }


    componentDidMount() {
        debugger
        console.log('[Father]componentDidMount')
        console.log(this.state.abc)

    }


    shouldComponentUpdate(nextProps, nextState) {
        debugger
        console.log('[Father]shouldComponentUpdate')
        return true

    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        console.log('[Father]componentDidUpdate')
    }

    componentWillUnmount() {
        debugger
        console.log('[Father]componentWillUnmount')
    }

    componentDidCatch() {
        debugger
        console.log('[Father]componentDidCatch')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        debugger
        //getSnapshotBeforeUpdate与componentWillMount/componentWillReceiveProps/componentWillUpdate互斥
        console.log('[Father]getSnapshotBeforeUpdate')
    }

    static getDerivedStateFromError() {
        debugger
        console.log('[Father]getDerivedStateFromError')
    }
}

export default Father;