import { type TodoRequestType, type TodoType } from '../types.ts'
import Todo from './Todo.tsx'

interface Props {
    todos: TodoType[] | undefined
    onRemoveTodo: (id: string) => Promise<void>
    onCompleteTodo: (id: string, todo: TodoRequestType) => Promise<void>
}

export default function Todos ({ todos, onRemoveTodo, onCompleteTodo }: Props) {
    return (
        <ul className="todo-list">
            {todos?.map((todo) => (
                <li key={todo.id} className={`${todo.complete ? 'completed' : ''}`}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Todo onRemoveTodo={onRemoveTodo} key={todo.id} id={todo.id} title={todo.title}
                        complete={todo.complete} onCompleteTodo={onCompleteTodo}/>
                </li>
            ))}
        </ul>
    )
}
