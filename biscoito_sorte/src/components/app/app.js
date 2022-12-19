import React, {Component} from 'react';
import Biscoito from '../assets/biscoito.png';
import './app.css'

class App extends Component{
    constructor(props){
        super(props);
        this.frases = [
            'A vida trará coisas boas se tiveres paciência.',
            'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
            'Não compense na ira o que lhe falta na razão.',
            'Defeitos e virtudes são apenas dois lados da mesma moeda.',
            'A maior de todas as torres começa no solo.',
            'Não há que ser forte.'
        ];
        this.state={
            fraseSorteada:''
        }
    }

    abrirBiscoito(){
        let numero = Math.floor(Math.random()*this.frases.length)
        this.setState({fraseSorteada:this.frases[numero]});
    }

    render(){
        return(
            <div className='conteiner'>
                <h1>Biscoito da sorte</h1>
                <h2>Clique no biscoito e veja a sua sorte!</h2>
                
                <button onClick={this.abrirBiscoito.bind(this)}><img alt='biscoito' src={Biscoito} className='img'/></button>
                <strong className='textoFrase'>{this.state.fraseSorteada}</strong>
            </div>
        );
    }
}

export default App;