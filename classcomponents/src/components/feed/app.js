import React, {Component} from "react";
import '../contador/app.css'
import Feed from "./feed";

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            feed:[
                {id:1, nome:'Marcus', curtidas:34, comentarios:23},
                {id:2, nome:'Maria', curtidas:45, comentarios:12},
                {id:3, nome:'Joao', curtidas:102, comentarios:70},
            ]
        }
    }

    render(){
        return(
            <div className="flex">
                {this.state.feed.map((item)=> {
                    return(
                        <Feed 
                            id={item.id}
                            nome={item.nome}
                            curtidas={item.curtidas}
                            comentarios={item.comentarios}
                         />
                    );
                })}
            </div>
        );
    }
}

export default App;