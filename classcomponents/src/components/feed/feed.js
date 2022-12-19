import React from "react";
import '../contador/app.css'

function Feed(props){
    return(
        <div className="flex" key={props.id}>
            <h1>{props.nome}</h1>
            <ul>
                <li>{props.curtidas} curtidas</li>
                <li>{props.comentarios} comentarios</li>
            </ul>
            <hr/>
        </div>
    );
}

export default Feed;