import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ todo, onToggle }) => {
    return (
        <li key={todo.id}>
            <label className={todo.completed ? "completed-todo tickbox" : "tickbox"}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                {todo.title}
            </label>
        </li>
    )
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired
}

export default Todo;