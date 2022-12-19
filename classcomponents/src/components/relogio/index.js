import React,{Component} from "react";
import '../contador/app.css';

class Relogio extends Component{
    constructor(props){
        super(props);
        this.state={
            hora:"00:00:00"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({hora: new Date().toLocaleTimeString()})
        },1000);
    }

    render(){
        return(
            <div className="flex">
                <strong>Hora:</strong>
                <h1>{this.state.hora}</h1>
            </div>
        )
    }
}

export default Relogio