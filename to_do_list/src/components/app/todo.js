import React, {useState, useMemo} from "react";

function ToDoList(){
    const[texto, setTexto] = useState('Digite sua tarefa:')
    const[lista, setLista] = useState(['Lavar roupa', 'Varrer quarto'])

    let tamanho = useMemo(()=>{
        return lista.length;
    },[lista]);

    function addTarefa(){
        setLista([texto,...lista]);
        setTexto("");
    }    

    return(
        <div>
            <h1>To Do List:</h1>
            <ul>
                {lista.map((item) => <li>{item}</li>)}
           </ul>
           <input type="text" value={texto} onChange={(e)=> setTexto(e.target.value)}/>
           <button onClick={addTarefa.bind(this)}>Add</button>
           <p>Você tem {tamanho} tarefas!</p>
        </div>
    );
}

// class ToDoList extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             texto:"",
//             lista:[
//                 'lavar os pratos', 'arrumar a cama'
//             ]
//         }
//     }

//     addTarefa(){
//         let estado = this.state;
//         estado.lista.push(this.state.texto);
//         estado.texto = "";
//         this.setState(estado)
//     }

//     render(){
//         return(
//             <div>
//                 <h1>To Do List:</h1>
//                 <ul>
//                     {this.state.lista.map((item) => <li>{item}</li>)}
//                 </ul>
//                 <input type="text" value={this.state.texto} onChange={(e)=> this.setState({texto:e.target.value})}/>
//                 <button onClick={this.addTarefa.bind(this)}>Add</button>
//             </div>
//         )
//     }
// }

export default ToDoList;