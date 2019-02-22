import React,{Component} from 'react';
import Father from "./Father";

class App extends Component{
    constructor(props){
        super(props);
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
            <div>app
                {this.state.fatherExist&&<Father cde={this.state.cde} changeCde={this.changeCde.bind(this)} changeFatherExist={this.changeFatherExist.bind(this)}></Father>}
            </div>
        )
    }
}

export default App;