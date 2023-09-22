import TodoInput from './TodoInput';
import TodoLists from './TodoLists';
import "./App.css";


const  App = () =>   (
        <div className="App">
            <TodoInput />
            <div className="todo-wrapper">
                <TodoLists />
            </div>
        </div>
)

export default App;
