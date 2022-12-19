import React from "react";

function Ola(props){
        return <h1>olá {props.nome}! que tem {props.idade} anos c: </h1>
}

function Cartao(props){
        return(
                <div>
                        <Ola nome={props.nome} idade={props.idade}/>
                        <ul>
                                <li>Instagram: {props.instagram}</li>
                                <li>Twitter: {props.twitter}</li>
                        </ul>
                </div>
        );
}

export default Cartao;