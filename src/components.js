import React from "react";

export const TodoForm = ({ onSubmit }) => {
  const [todo, setTodo] = React.useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(todo);
        setTodo("");
      }}
    >
      <input required value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button>add todo</button>
    </form>
  );
};

export const TodoList = ({ todos = [] }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  );
};
