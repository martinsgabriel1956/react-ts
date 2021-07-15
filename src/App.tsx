import { useState } from "react";

import { Todos } from "./components/Todos";
import Todo from "./models/todo";
import { NewTodo } from "./components/Todos/NewTodo";

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
  }

  return (
    <>
    <NewTodo onAddTodo={handleAddTodo} />
      <Todos items={todos} />
    </>
  );
}
