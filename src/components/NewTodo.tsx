import { type TodoRequestType } from '../types.ts'
import { type ChangeEvent, type FormEvent, useState } from 'react'

interface Props {
    onNewTodo: (todo: TodoRequestType) => Promise<void>
}

export function NewTodo ({ onNewTodo }: Props) {
    const [todo, setTodo] = useState<TodoRequestType>({
        title: '', complete: false
    })

    const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo({
            title: e.target.value, complete: false
        })
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewTodo(todo).catch(console.error)
        setTodo({
            title: '', complete: false
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" className="new-todo" placeholder="Que haras hoy?" value={todo.title}
                    onChange={onChangeTodo}/>
            </form>
        </div>
    )
}
