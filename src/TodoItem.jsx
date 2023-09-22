import React, { useContext } from "react";
import { TodoContext } from "./Contexts/TodoContext";

const TodoItem = ({ todo }) => {
   const { handleEdit, handleCheck, editId, setEditId, handleDelete } = useContext(TodoContext);
   const { id, title, completed } = todo;
   return <li className="todo">
      <input type="checkbox" checked={completed} onChange={() => handleCheck(id)} />
      {editId === id ? <input type="text" value={title} onChange={handleEdit} /> : <span className={`todo-title ${completed && "checked"}`}>
         {title}
      </span>}
      {editId === id ? <button onClick={() => setEditId(null)}>
         ✅
      </button> : <button className="del-button" onClick={() => setEditId(id)} disabled={completed}>
         ✏️
      </button>}
      <button className="del-button" onClick={() => handleDelete(id)}>
         🗑️
      </button>
   </li>;
}

export default TodoItem;