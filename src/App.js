import TodoInput from './TodoInput';
import TodoLists from './TodoLists';
import "./App.css";
import { useContext } from 'react';
import { TodoContext } from './Contexts/TodoContext';
import Tabs from './Tabs';


const App = () => {
    const {
        todos,
        currentTab,
        completedTodos,
        runningTodos,
        tabs
    } = useContext(TodoContext);

    const handleTodoRender = () => currentTab === tabs[1] ?
        { todos: completedTodos, emptyMessage: "No Completed Todos" }
        : currentTab === tabs[2] ?
            { todos: runningTodos, emptyMessage: "No pending Todos" }
            : { todos, emptyMessage: "No Todos Available" };

    return (
        <div className="bg-[#2d62d3] text-white min-h-screen grid place-content-center p-2 py-8">
            <div className="bg-white/10 rounded-lg p-4 sm:p-8 min-h-[90vh] md:w-[600px]">
                <h2 className='mb-4 text-center font-mono font-black text-3xl'>TODO APP</h2>
                <TodoInput />
                <Tabs />
                <TodoLists {...handleTodoRender()} />
            </div>
        </div>
    )

}
export default App;
