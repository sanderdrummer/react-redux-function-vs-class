import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { TodoForm, TodoList } from "./components";

const selectTodos = (state) => state.todos;

export const HookTodo = ({
  title = "react-redux with hooks and functional components",
}) => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  // replacing lifecycle with effect :)
  React.useEffect(() => {
    console.log("todos changed in effect", { todos });

    return () => {
      console.log("component is unmounted do cleanup here :)");
    };
  }, [todos]);

  return (
    <>
      {title}
      <TodoForm onSubmit={(todo) => dispatch({ type: "add", todo })} />{" "}
      <TodoList todos={todos} />
    </>
  );
};
