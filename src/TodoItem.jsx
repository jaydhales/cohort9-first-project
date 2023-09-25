import React, { useContext } from "react";
import { TodoContext } from "./Contexts/TodoContext";

const TodoItem = ({ todo }) => {
   const { handleEdit, handleCheck, editId, setEditId, handleDelete } = useContext(TodoContext);
   const { id, title, completed } = todo;
   return <li className={`todo bg-white/20 ${completed && "bg-green-400 bg-opacity-70"} py-3 px-2 rounded-md shadow  shadow-gray-500 flex items-center gap-2 relative overflow-hidden`}>
  
      {(!!editId && editId !== id) && <i className="w-full h-full bg-gray-500 bg-opacity-30 absolute top-0 left-0" />}
      {editId !== id && <input type="checkbox" checked={completed} onChange={() => handleCheck(id)} className="w-6 h-6" />}
      {editId === id ? <input type="text" value={title} onChange={handleEdit} className="flex-1 h-full px-2 rounded" /> : <span className={`flex-1 ${completed && "checked"}`}>
         {title}
      </span>}
      <div className="flex gap-2">
         {editId === id ? <button onClick={() => setEditId(null)} className="hover:bg-[#00ff0041] p-1 rounded w-8 h-8 hover:shadow-md hover:shadow-green-600">
            ✅
         </button> : <button className="hover:bg-[#00ff0041] p-1 rounded w-8 h-8 hover:shadow-md hover:shadow-green-600" onClick={() => setEditId(id)}>
            ✏️
         </button>}
         <button className="hover:bg-[#ff000038] p-1 rounded w-8 h-8 hover:shadow-md hover:shadow-red-500" onClick={() => handleDelete(id)}>
            🗑️
         </button>
      </div>
   </li>;
}

export default TodoItem;