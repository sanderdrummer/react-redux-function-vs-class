import React from "react";
import { connect } from "react-redux";

import { TodoForm, TodoList } from "./components";

class TodoComponent extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.todos !== this.props.todos) {
      console.log("todos changed in lifecycle", { todos: this.props.todos });
    }
  }

  render() {
    const { title = "", todos, addTodo } = this.props;
    return (
      <>
        {title}
        <TodoForm onSubmit={addTodo} />
        <TodoList todos={todos} />
      </>
    );
  }
}
const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch({ type: "add", todo }),
});

export const ConnectedClassTodoComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoComponent);
