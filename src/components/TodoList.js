import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import Todo from './Todo'

import { toggleTodo } from './../actions'

const TodoList = ({ todos, searchTerm, onToggle, completed }) => {

  return (
    <ul className="todo-container">
      {todos
        .filter(
          (todo) =>
            (!searchTerm ||
              todo.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (!completed || todo.completed === completed)
        )
        .map((todo) => {
          return (
            <Todo key={todo.id} todo={todo} onToggle={onToggle} />
          );
        })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  searchTerm: PropTypes.string,
  completed: PropTypes.bool,
  onToggle: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos.todos,
  searchTerm: state.search.searchTerm,
  completed: state.search.findCompleted
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onToggle: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
