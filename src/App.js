import React from "react"

import TodoList from "./components/TodoList"
import AddTodo from './components/AddTodo'
import SearchTodo from './components/SearchTodo'

import "./styles.css"

const App = () => {

  return (
    <div className="TodoApp">
      <h1>Todo List</h1>
      <AddTodo />
      <SearchTodo />
      <TodoList />
    </div>
  )
}

export default App
