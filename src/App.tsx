import { Todos } from "./components/Todos";
import Todo from './models/todo';

export function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn Typescript'),
  ];

  return (
    <Todos
      items={todos}
    />
  );
}
