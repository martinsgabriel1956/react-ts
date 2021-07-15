import { Todos } from "./components/Todos";
import Todo from "./models/todo";
import { NewTodo } from "./components/Todos/NewTodo";

export function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  const handleAddTodo = (todoText: string) => {

  }

  return (
    <>
    <NewTodo onAddTodo={handleAddTodo} />
      <Todos items={todos} />
    </>
  );
}
