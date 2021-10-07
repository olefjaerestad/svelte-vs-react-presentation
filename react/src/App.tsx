import React, { createContext, useReducer } from 'react';
import { AddTodo } from './components/AddTodo/AddTodo';
import { TodoList } from './components/TodoList/TodoList';
import { ITodo, TTodoAction } from './types';

function todosReducer(state: ITodo[], action: TTodoAction) {
  switch(action.type) {
    case 'add':
      return [...state, action.payload.todo];
    case 'delete':
      const newState = [...state];
      newState.splice(action.payload.index, 1);
      return newState;
    default:
      return state;
  }
}

export const TodosContext = createContext<{dispatch: React.Dispatch<TTodoAction>}>({
  dispatch: (action) => {}
})

export const App: React.FC = function() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <>
      <TodosContext.Provider value={{dispatch}}>
        <AddTodo />
        <TodoList todos={todos} />
      </TodosContext.Provider>
    </>
  );
}
