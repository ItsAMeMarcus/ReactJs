import React, {Component} from "react";
import './app.css'

class Contador extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0
        }
        this.aumentar = this.aumentar.bind(this)
        this.diminuir = this.diminuir.bind(this)
        this.zerar = this.zerar.bind(this)
    }

    aumentar(){
        let state = this.state;
        state.contador+=1;
        this.setState(state);
    }

    diminuir(){
        let state = this.state;
        state.contador-=1;
        this.setState(state);
    }

    zerar(){
        let state = this.state;
        state.contador=0;
        this.setState(state);
    }

    render(){
        return(
            <div class="flex">
                <div class="flex-divA">
                    <h1>Contador</h1>
                    <strong>{this.state.contador}</strong>
                </div>
                <div class="flex-divB">
                    <button onClick={this.aumentar}>+</button><button onClick={this.diminuir}>-</button>
                    <button onClick={this.zerar}>Limpar</button>
                </div>
            </div>
            
        )
    }
}

export default Contador;