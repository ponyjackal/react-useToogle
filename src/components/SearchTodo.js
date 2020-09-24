import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { searchTodo, findToggle } from './../actions'
import useDebounce from './../lib/useDebounce'
import useToggle from './../lib/useToggle'

const SearchTodo = ({ dispatch }) => {

    const [searchTerm, setSearchTerm] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const debouncedSearch = useDebounce(searchTerm, 500)
    const [findCompleted, toggle] = useToggle(false)

    useEffect(() => {
        dispatch(findToggle(findCompleted))
    }, [findCompleted, dispatch])

    useEffect(() => {
        dispatch(searchTodo(debouncedSearch))
    }, [debouncedSearch, dispatch])

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleToggle = () => {
        toggle()
    }
    return (
        <div className="find-todo">
            <label>
                Find Todo: <input value={searchTerm} onChange={handleChange} />
            </label>
            <label>
                Completed:{" "}
                <input
                    type="checkbox"
                    onChange={handleToggle}
                    checked={findCompleted}
                />
            </label>
            {isLoading && <span className="loading">searching ....</span>}
        </div>
    )
}

export default connect()(SearchTodo);