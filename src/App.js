import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import { HookTodo } from "./hook-todo";
import { ConnectedTodoComponent } from "./function-todo";
import { ConnectedClassTodoComponent } from "./class-todo";

function App() {
  return (
    <Provider store={store}>
      <div>
        <HookTodo title="Function Component using hooks" />
      </div>
      <div>
        <ConnectedTodoComponent title="Connected Function Component" />
      </div>
      <div>
        <ConnectedClassTodoComponent title="Connected Class Component" />
      </div>
    </Provider>
  );
}

export default App;
