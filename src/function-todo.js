import React from "react";
import { connect } from "react-redux";

import { TodoForm, TodoList } from "./components";

const TodoComponent = ({ title = "", todos, addTodo }) => {
  return (
    <>
      {title}
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} />
    </>
  );
};
const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch({ type: "add", todo }),
});

export const ConnectedTodoComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoComponent);
