import React, {Component} from "react";
import "./app.css"
import Cronometro from "../../assets/cronometro.png"

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            segundos:0.0,
            minutos:0,
            horas:0,
            botao:'Iniciar'
        }
        this.funcaoTimer = null;
    }

    setSegundos(estado){
        this.funcaoTimer = setInterval(() => {
                if(estado.segundos > 59.9){
                    estado.segundos = 0.0;
                    this.setMinutos(estado);
                } 
                estado.segundos += 0.1;                
                this.setState(estado);
        }, 100)
    }

    setMinutos(estado){
        if(estado.minutos >= 60){
            estado.minutos = 0
            estado.horas +=1; 
        }
        else{
            estado.minutos += 1;
        }
        
    }

    vai(){
        let estado = this.state;
        if(this.funcaoTimer==null){
            estado.botao = 'Pausar';
            this.setSegundos(estado);
        }
        else{
            estado.botao = "Continuar";
            clearInterval(this.funcaoTimer);
            this.funcaoTimer =null;
            this.setState(estado);
        }
    }
//implementar time stamps
    limpar(){
        let estado = this.state;
        clearInterval(this.funcaoTimer);
        this.funcaoTimer = null
        estado.botao = "Iniciar";
        estado.segundos = 0;
        estado.minutos = 0;
        estado.horas = 0;
        this.setState(estado);
    }

    render(){
       return( 
        <div className="conteiner">
                <img src={Cronometro} className="img" alt="cronometro"/>
                <p className="timer">{this.state.horas}:{this.state.minutos}:{this.state.segundos.toFixed(1)}</p>
                <div className="areaTexto">
                    <button className="botao" onClick={this.vai.bind(this)}>{this.state.botao}</button>
                    <button className="botao" onClick={this.limpar.bind(this)}>Limpar</button>
                </div>
            </div>
        );
    }
}

export default App;
