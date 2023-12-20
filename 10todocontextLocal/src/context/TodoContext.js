/* eslint-disable no-unused-vars */
// import { createContext } from "react";
// import { useContext } from "react";
// export const TodoContext = createContext({
//   todos: [
//     {
//       id: "1",
//       todo: "Todo msg",
//       completed: false,
//     },
//   ],
//   addTodo: (todo) => {},
//   updateTodo: (id, todo) => {},
//   deleteTodo: (id, todo) => {},
//   toggleComplete: () => {},
// });

import { createContext, useContext } from "react";

// export const useTodo = () => {
//   return useContext(TodoContext);
// };

// export const TodoProvider = TodoContext.Provider;

export const TodoContext = createContext({
  todos: [
    {
      id: "1",
      todo: "Todo Msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
