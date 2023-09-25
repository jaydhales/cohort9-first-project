import React, { useContext } from "react";
import { TodoContext } from "./Contexts/TodoContext";

const TodoItem = ({ todo }) => {
   const { handleEdit, handleCheck, editId, setEditId, handleDelete } = useContext(TodoContext);
   const { id, title, completed } = todo;
   return <li className={`todo  py-3 px-2 rounded-md shadow  shadow-gray-500 flex items-center gap-2 relative overflow-hidden ${!!completed ? "bg-green-600 bg-opacity-50" :"bg-white/20"}`}>

      {(!!editId && editId !== id) && <i className="w-full h-full bg-gray-500 bg-opacity-30 absolute top-0 left-0" />}
      {editId !== id && <input type="checkbox" checked={completed} onChange={() => handleCheck(id)} className="w-6 h-6" />}
      {editId === id ? <input type="text" value={title} onChange={handleEdit} className="flex-1 h-full px-2 rounded" /> : <span className={`flex-1 ${completed && "checked"}`}>
         {title}
      </span>}
      <div className="flex gap-2">
         {editId === id ? <button onClick={() => setEditId(null)} className="hover:bg-[#00ff0041] p-1 rounded w-8 h-8 hover:shadow-md hover:shadow-green-600 disabled:opacity-50" disabled={title.length < 3}>
            ✅
         </button> : <button className="hover:bg-[#00ff0041] p-1 rounded w-8 h-8 hover:shadow-md hover:shadow-green-600" onClick={() => setEditId(id)}>
            ✏️
         </button>}
         <button className="hover:bg-[#ff000038] flex-1 p-1 rounded w-8 h-8 hover:shadow-md hover:shadow-red-500  disabled:opacity-50" onClick={() => handleDelete(id)} disabled={title.length < 3}>
            🗑️
         </button>
      </div>
   </li>;
}

export default TodoItem;