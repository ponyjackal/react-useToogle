import React, { useState, useEffect, useRef } from "react";
import TodoList from "./TodoList";
import useDebounce from "./useDebounce";
import useToggle from "./useToggle";
import "./styles.css";

const data = [
  {
    id: 1,
    title: "Making the checkbox",
    completed: false
  },
  {
    id: 2,
    title: "class component is poorly",
    completed: false
  },
  {
    id: 3,
    title: "so easy to create such a poorly",
    completed: false
  },
  {
    id: 4,
    title: "this component is really doing",
    completed: true
  },
  {
    id: 5,
    title: "Functional components can reduce coupling",
    completed: false
  },
  {
    id: 6,
    title: "our code without impacting another",
    completed: false
  },
  {
    id: 7,
    title: "Once again, the constraints put in place by functional",
    completed: false
  },
  {
    id: 8,
    title: "management library such as Redux",
    completed: true
  },
  {
    id: 9,
    title: "The general heuristic I use",
    completed: false
  }
];

const App = () => {
  const [todos, setTodos] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [findCompleted, toggle] = useToggle(false);
  const debouncedSearch = useDebounce(searchTerm, 500);

  const index = useRef(10);
  const newTodo = useRef("");

  const onAdd = () => {
    if (newTodo.current.value) {
      setTodos([
        ...todos,
        {
          id: index.current,
          title: newTodo.current.value,
          completed: false
        }
      ]);

      index.current++;
    }

    newTodo.current.value = "";
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onToggle = (id) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updated);
  };

  return (
    <div class="TodoApp">
      <h1>Todo List</h1>
      <div className="add-new-todo">
        <label>
          Add new Todo: <input type="text" ref={newTodo} />
        </label>
        <button onClick={onAdd}>Add</button>
      </div>
      <div className="find-todo">
        <label>
          Find Todo: <input value={searchTerm} onChange={handleChange} />
        </label>
        <label>
          Completed:{" "}
          <input
            type="checkbox"
            onChange={() => toggle()}
            checked={findCompleted}
          />
        </label>
        {isLoading && <span className="loading">searching ....</span>}
      </div>
      <TodoList
        data={todos}
        completed={findCompleted}
        searchTerm={debouncedSearch}
        onToggle={onToggle}
      />
    </div>
  );
};

export default App;
