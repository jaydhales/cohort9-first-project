import { createContext, useEffect, useMemo, useState } from 'react';

export const TodoContext = createContext(null);


export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const completedTodos = useMemo(() => todos.filter(todo => todo.completed), [todos]);
    const runningTodos = useMemo(() => todos.filter(todo => !todo.completed), [todos]);
    const [currentTab, setCurrentTab] = useState("all");
    const tabs = ["all", "completed", "running"];

    useEffect(() => {
        let canceled = false;
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => {
                if (!canceled) {
                    setTodos(data.slice(0, 10));
                }
            })
            .catch((err) => {
                console.error(err);
            });

        return () => (canceled = true);
    }, []);

    const handleCheck = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    const handleDelete = (id) => {
        const newArray = todos.filter((todo) => todo.id !== id);
        setTodos(newArray);
        setEditId(null)
    };

    const handleEdit = (e) => {
        const newTodos = todos.map((todo) =>
            todo.id === editId ? { ...todo, title: e.target.value, completed: false } : todo
        );
        setTodos(newTodos);
    };

    const handleAddTodo = () => {
        const newTodos = {
            id: todos.length + 1,
            title: inputValue,
            completed: false
        }
        setTodos([...todos, newTodos])
        setInputValue("")
    }


    return (
        <TodoContext.Provider value={{
            todos,
            setTodos,
            completedTodos,
            runningTodos,
            inputValue,
            setInputValue,
            editId,
            setEditId,
            handleAddTodo,
            handleDelete,
            handleCheck,
            handleEdit,
            currentTab,
            setCurrentTab,
            tabs
        }}>
            {children}
        </TodoContext.Provider>
    )
}