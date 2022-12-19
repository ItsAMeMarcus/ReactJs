import React, {Component} from "react";
import '../contador/app.css'

class IMC extends Component{
    constructor(props){
        super(props);
        this.state = {
            peso:80,
            altura:1.89,
            imc:""
        }
    }

    calcular(){
        let state = this.state;
        let imc = state.peso / state.altura**2;
        state.imc = imc.toPrecision(3);
        this.setState(state);
        console.log(imc)
    }

    render(){
        return(
            <div className="flex">
                <h1>Calcule seu IMC</h1>
                <p >
                    Peso: <input type="text" name="peso" value={this.state.peso} onChange={(e)=>this.setState({peso:e.target.value})} />
                </p>
                <p>
                    Altura: <input type="text" name="peso" value={this.state.altura} onChange={(e)=>this.setState({altura:e.target.value})} />
                </p>
                <button onClick={this.calcular.bind(this)}>Calcular</button>
                <strong>{this.state.imc}</strong>
            </div>
        );
    }
}

export default IMC;