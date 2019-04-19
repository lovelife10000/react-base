import React,{Component} from 'react';
import Father from "./Father";

class App extends Component{
    constructor(props){


        super(props);
        console.log(this);
        debugger
        this.state={
            cde:1,
            fatherExist:true
        }

    }

    changeCde(){
        this.setState({
            cde:this.state.cde+1
        });
    }

    changeFatherExist(){
        this.setState({
            fatherExist:false
        });
    }

    render(){
        return(
            <div >
                {this.props.children}
                {/*{  React.Children.map((item,index)=>{*/}
                    {/*debugger*/}
                {/*})}*/}
                {this.state.fatherExist&&<Father cde={this.state.cde} changeCde={this.changeCde.bind(this)} changeFatherExist={this.changeFatherExist.bind(this)}></Father>}
            </div>
        )
    }

    componentDidMount(){
        var len=React.Children.count(this.props.children);
        console.log(len);

        React.Children.map(this.props.children,(item,index)=>{
            debugger
        });
        debugger
    }
}

export default App;