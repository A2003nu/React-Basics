import { useState } from "react"
import '../style.css'

const Todo = () => {
const [todo,setTodo]=useState([])
const [input,setInput]=useState("")

const handleSubmit=()=>{
    setTodo((todo)=>{
    return todo.concat({
            text:input,
            id:Math.floor(Math.random()*10)
        });
    });
    setInput("");
};

const handleDelete=(id)=>{
    setTodo(todo=>todo.filter((t)=>t.id !== id))
}
  return (
   <div className="container">
    <input type="text" placeholder="Enter todo" value={input} onChange={(e)=>setInput(e.target.value)} />

    <button onClick={handleSubmit}>Submit</button>

<ul className="todos-list">
    {todo.map(({text,id})=>(
        <li className="todo" key="id">
            <span>{text}</span>
            <button className="close" onClick={()=>handleDelete(id)}>Close</button>
        </li>
    ))}
</ul>

   </div>
  )
}

export default Todo