import React, { useContext } from "react";
import { TodoContext } from "./Contexts/TodoContext";

const TodoInput = () => {
    const { inputValue, setInputValue, handleAddTodo } = useContext(TodoContext)
    return (
        <div className="w-full flex gap-2 flex-col sm:flex-row">
            <input type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className="w-full sm:w-auto sm:flex-1 rounded-sm p-2"
            />
            <button
                className="p-2 px-4 rounded-sm bg-[#1a3777] hover:bg-[#212e47] cursor-pointer"
                onClick={handleAddTodo}
                disabled={inputValue.length < 3}>
                Add to Todo
            </button>
        </div>
    )
}

export default TodoInput;