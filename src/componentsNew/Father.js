import React,{Component} from 'react';
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";


class Father extends Component{

    constructor(props) {
        console.log('[Father]constructor')
        super(props)
        this.state = {
            abc:1
        }
    }

    static getDerivedStateFromProps(props, state){
        //getDerivedStateFromProps与componentWillMount/componentWillReceiveProps/componentWillUpdate互斥
        console.log('[Father]getDerivedStateFromProps');
    }

    componentWillMount() {
        console.log('[Father]componentWillMount');
        [1,2,3,4].map(()=>{
            console.log(this)
            
            this.setState({
                abc:this.state.abc++
            });
        })

        console.log(this.state.abc)
        
    }





    componentDidMount() {
        console.log('[Father]componentDidMount')
        console.log(this.state.abc)
        
    }



    render(){

        console.log('[Father]render');
        return(
            <div>father[{this.state.abc}]


                <ChildOne></ChildOne>
                <ChildTwo></ChildTwo></div>
        )}






    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Father]shouldComponentUpdate')
        return true

    }







    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Father]componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('[Father]componentWillUnmount')
    }

    componentDidCatch() {
        console.log('[Father]componentDidCatch')
    }

    getSnapshotBeforeUpdate(){
        //getSnapshotBeforeUpdate与componentWillMount/componentWillReceiveProps/componentWillUpdate互斥
        console.log('[Father]getSnapshotBeforeUpdate')
    }

    static getDerivedStateFromError(){
        console.log('[Father]getDerivedStateFromError')
    }
}

export default Father;