import {useState} from 'react';

export default function Todo()
{
    const [todo, setTodo]= useState('')
    const[todolist, setTodoList]=useState([])
    function handleTodo()
    {
        setTodoList((prev)=>[...todolist,todo]);
        setTodo('')
    }

    function handleChange(e)
    {
        setTodo(e.target.value)
    }

    function handleDelete(index1)
    {
        const deletes = todolist.filter((_,index)=> index1!==index);
        setTodoList(deletes)
    }

    return(
        <div>
            <input type='text' placeholder ='Enter todo' onChange={handleChange} value={todo} onKeyDown={(e) => e.key === "Enter" && handleTodo()}/>
            <button onClick={handleTodo}> Submit</button>
            {todolist.map((todos, index) =>(<p key={index}> {todos} <button onClick={()=>handleDelete(index)}>Delete</button></p>) )}
        </div>
    );
}