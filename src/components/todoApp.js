import { useState } from 'react'
import Todo from './todo'
import './todoApp.css'

export default function TodoApp() {
    const [title, setTitle] = useState('')
    const [todos, setTodos] = useState([])


    function handleChange(e) {
        const value = e.target.value
        setTitle(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        };

        const temp = [...todos]
        if (title.length) {
            temp.push(newTodo)
            setTodos(temp)
            setTitle('')
        } else {
            return alert('Debe ingresar una tarea')
        }
    }

    function handleUpdate(id, value) {
        const temp = [...todos]
        const item = temp.find((item) => item.id === id)
        item.title = value
        setTodos(temp)

    }

    function handleDelete(id) {
        const temp = todos.filter(i => i.id !== id)

        setTodos(temp)
    }

    return (
        <div className='todoContainer'>
            <form className='todoCreateForm' onSubmit={handleSubmit}>
                <input onChange={handleChange} className='todoInput' value={title} />
                <input onClick={handleSubmit} type='submit' value='Create todo' className='buttonCreate' />
            </form>

            <div className='todosContainer'>
                {
                    todos.map(i => (
                        <Todo key={i.id} i={i} onUpDate={handleUpdate} onDelete={handleDelete} />
                    ))
                }
            </div>
        </div>
    )
}