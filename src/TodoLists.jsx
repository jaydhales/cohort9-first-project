import TodoItem from './TodoItem';
import React from "react";

const TodoLists = ({ todos, emptyMessage }) => {

   return <ul className='grid gap-4'>
      {!!todos.length ?
         todos.map(
            todo => <TodoItem todo={todo} key={todo.id} />
         ) :
         <p className='font-semibold text-2xl text-center my-4'>{emptyMessage}</p>
      }
   </ul>
}

export default TodoLists;
