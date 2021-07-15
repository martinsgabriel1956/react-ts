import { createContext, FC, useState } from "react";

import Todo from '../models/todo';

type TodosContextProps = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void,
};

export const TodosContext = createContext<TodosContextProps>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
})

export const TodosContextProvider: FC = (props) => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
  }

  
  const handleRemoveTodo = (todoId: string ) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  }

  const contextValue: TodosContextProps = {
    items: todos,
    addTodo: handleAddTodo,
    removeTodo: handleRemoveTodo,
  };

  return (
    <TodosContext.Provider value={contextValue }>
      {props.children}
    </TodosContext.Provider>
  );
}