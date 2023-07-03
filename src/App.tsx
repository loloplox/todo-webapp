import { type JSX, useEffect, useState } from 'react'
import Todos from './components/Todos.tsx'
import { NewTodo } from './components/NewTodo.tsx'
import { type TodoRequestType, type TodoType } from './types.ts'
import { createTodo, deleteTodo, getTodos, updateTodo } from './api/todo.api.ts'

function App (): JSX.Element {
    const [todos, setTodos] = useState<TodoType[]>()

    const handlerRemove = async (id: string) => {
        const newTodos = await deleteTodo(id)
        setTodos(newTodos)
    }

    const handlerComplete = async (id: string, todo: TodoRequestType) => {
        const newTodo = await updateTodo(id, todo)
        setTodos((prevState) => prevState?.map((todo) => todo.id === id ? newTodo : todo))
    }

    const handlerNew = async (todo: TodoRequestType) => {
        const newTodo = await createTodo(todo)

        setTodos(prevState => prevState?.concat(newTodo))
    }

    useEffect(() => {
        const loadTodos = async () => {
            const todos = await getTodos()
            setTodos(todos)
        }

        loadTodos().catch(console.error)
    }, [])

    return (
        <div className="todoapp">
            <h1>Todos</h1>
            <NewTodo onNewTodo={handlerNew}/>
            <Todos onRemoveTodo={handlerRemove} onCompleteTodo={handlerComplete} todos={todos}/>
        </div>
    )
}

export default App
