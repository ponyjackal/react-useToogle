import React, { useEffect } from "react"

import TodoList from "./components/TodoList"
import AddTodo from './components/AddTodo'
import SearchTodo from './components/SearchTodo'
import DarkTheme from './components/DarkTheme'
import ThemeProvider from './components/ThemeProvider'


import "./styles.css"

const App = () => {

  return (
    <ThemeProvider>
      <div className="TodoApp">
        <h1>Todo List</h1>
        <DarkTheme />
        <AddTodo />
        <SearchTodo />
        <TodoList />
      </div>
    </ThemeProvider>
  )
}

export default App
