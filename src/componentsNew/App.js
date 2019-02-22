import React,{Component} from 'react';
import Father from "./Father";

class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>app
                <Father></Father>
            </div>
        )
    }
}

export default App;