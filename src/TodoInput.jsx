import React, { useContext } from "react";
import { TodoContext } from "./Contexts/TodoContext";
const TodoInput = () => {
    const { inputValue, setInputValue, handleAddTodo } = useContext(TodoContext)
    return (<div className="todo-input">
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button className="input-submit" onClick={handleAddTodo} disabled={inputValue < 3}>
            Add to Todo
        </button>
    </div>)
}

export default TodoInput;