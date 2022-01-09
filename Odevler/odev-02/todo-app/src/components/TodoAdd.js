import {useState, useEffect} from "react";

function TodoAdd({ todos, setTodos}) {

    const [todoInput, setTodoInput] = useState({todo: ""});

    useEffect(() => {
        setTodoInput({todo: ""});
    }, [todos]);

    const onChangeInput = (e) => {
        setTodoInput({...todoInput, [e.target.name]: e.target.value})
    }

    const inputTodoAdd = (e) => {
        e.preventDefault();

        if(todoInput.todo === ""){
            return false;
        }

        setTodos([...todos, todoInput]);
    }

    const deleteBtn = (e) => {
        e.target.parentElement.remove();
    }

    
    const selectedInput = (e) => {
        if(e.target.checked){
            e.target.nextElementSibling.classList.add('text-decoration-line-through');
        }
        else{
            e.target.nextElementSibling.classList.remove('text-decoration-line-through');
        }
    }

    return (
        <div>
            <div className="d-flex m-4">
                <input name="todo" value={todoInput.todo} type="text" className="form-control" placeholder="Todo add..." onChange={onChangeInput} />
                <button className="btn btn-primary ms-3" onClick={inputTodoAdd}>Add</button>
            </div>
            <div>
                <ul className="list-group">
                    {todos.map((todoVal, i) => {
                        return <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={selectedInput} />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    {todoVal.todo}
                                </label>
                            </div>
                            <button className="btn bg-danger text-white rounded-pill" onClick={deleteBtn}>X</button>
                       </li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default TodoAdd;