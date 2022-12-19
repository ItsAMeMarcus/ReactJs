import React, {Component} from "react";
import Contador from "../contador";
import '../contador/app.css'

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            status:false
        }
    }

    logar(status){
        this.setState({status:status});
    }

    render(){
        return(
            <div>
                {
                    this.state.status ?
                    <div>
                        <h1>Seja bem vindo, Marcus!{this.state.nome}</h1>
                        <button onClick={()=> this.logar(false)}>Sair</button>
                    </div>
                    :
                    <div>
                        <h1>Olá visitante, faça seu Login:</h1>
                        <button onClick={()=>this.logar(true)}>Logar</button>
                    </div>
                }

            </div>
        )
    }
}

export default Login