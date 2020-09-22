import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './../actions'

const AddTodo = ({ dispatch }) => {

    const newTodo = useRef('')

    const handleAdd = () => {
        if (newTodo.current.value) {
            dispatch(addTodo(newTodo.current.value))
        }

        newTodo.current.value = ""
        newTodo.current.focus()
    }

    return (
        <div className="add-new-todo">
            <label>
                Add Todo: <input type="text" ref={newTodo} />
            </label>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default connect()(AddTodo);