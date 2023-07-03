import { type TodoRequestType, type TodoType } from '../types.ts'
import { useState } from 'react'

interface Props extends TodoType {
    onRemoveTodo: (id: string) => Promise<void>
    onCompleteTodo: (id: string, todo: TodoRequestType) => Promise<void>
}

export default function Todo ({ id, title, complete, onRemoveTodo, onCompleteTodo }: Props) {
    const [completedState, setCompletedState] = useState<boolean>(complete)

    return (
        <div className="view">
            <input type="checkbox" className="toggle" checked={completedState}
                onChange={() => {
                    setCompletedState(!completedState)
                    onCompleteTodo(id, {
                        title, complete: !completedState
                    }).catch(console.error)
                }}/>
            <label>{title}</label>
            <button className="destroy" onClick={() => { onRemoveTodo(id).catch(console.error) }}></button>
        </div>
    )
}
