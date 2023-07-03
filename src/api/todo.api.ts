import axios from 'axios'
import { type TodoRequestType, type TodoType } from '../types.ts'

const todoApi = axios.create({
    baseURL: import.meta.env.VITE_API_URI, responseType: 'json'
})

export const getTodos = async () => {
    const { data } = await todoApi.get<TodoType[]>('/todos')

    return data
}

export const getTodo = async (id: string) => {
    const { data, status } = await todoApi.get<TodoType>(`/todos/${id}`)

    if (status === 200) {
        return data
    } else {
        throw new Error('Error getting todo')
    }
}

export const createTodo = async (todo: TodoRequestType) => {
    const { data, status } = await todoApi.post<TodoType>('/todos', todo)

    if (status === 201) {
        return data
    } else {
        throw new Error('Error creating todo')
    }
}

export const updateTodo = async (id: string, todo: TodoRequestType) => {
    const { data, status } = await todoApi.put<TodoType>(`/todos/${id}`, todo)
    if (status === 200) {
        return data
    } else {
        throw new Error('Error updating todo')
    }
}

export const deleteTodo = async (id: string) => {
    const { data, status } = await todoApi.delete(`/todos/${id}`)

    if (status === 200) {
        return data
    } else {
        throw new Error('Error deleting todo')
    }
}
