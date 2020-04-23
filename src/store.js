import { createStore, combineReducers } from "redux";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.todo];
    default:
      return state;
  }
};

export const store = createStore(combineReducers({ todos: todoReducer }));
