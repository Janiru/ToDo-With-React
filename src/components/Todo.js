import React from "react";

const Todo = ({text, todo, todos, setTodos}) =>
{

    const [showMore, setShowMore] = React.useState(false)

    //events
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
      
    };
    if(todo.text == ""){
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completeHandler = () =>{
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                };
            }
            return item;
        })
    );
};

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                <p>{ showMore 
                ? <>
                    {text}
                    <a style={{ color: "blue", cursor: "pointer" }} onClick={() => setShowMore(false)}>
                        &nbsp;View less
                    </a>
                </>

                : <>
                    {`${text.slice(0, 15)}...`}
                    <a style={{ color: "blue", cursor: "pointer" }} onClick={() => setShowMore(true)}>
                        &nbsp;View more
                    </a>
                </>
                }</p>
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;