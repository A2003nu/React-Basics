import './CSS/TodoItems.css';
import tick from './Assets/tick.png';
import not_tick from './Assets/not_tick.png';
import cross from './Assets/cross.png'

const TodoItems = ({no,display,text,setTodo}) => {

    const deleteTodo = (no) =>{
        let data=JSON.parse(localStorage.getItem('todos'));
        data=data.filter((todo)=>todo.no!== no);
        setTodo(data);
    }

    const toggle = (no) =>{
        let data=JSON.parse(localStorage.getItem('todos'));
        for(let i=0;i<data.length;i++){
            if(data[i].no==no){
                if(data[i].display===""){
                    data[i].display="line-through";
                }
                else{
                    data[i].display="";
                }
                break;
            }
        }
        setTodo(data);
    }

  return (
    <div className="todoitems">
        <div onClick={()=>toggle(no)} className={`todoitems-container ${display}`}>
            {display===""?
<img src={not_tick} alt=""/>:
<img src={tick} alt=""/> }
<div className="todoitems-text">{text}</div>
        </div>
        <img src={cross}  onClick={()=>deleteTodo(no)} className="todoitems-cross-item" alt=""/>
    </div>
  )
}

export default TodoItems