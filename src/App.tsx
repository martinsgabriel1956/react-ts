import { Todos } from "./components/Todos";
import { NewTodo } from "./components/Todos/NewTodo";

import { TodosContextProvider } from "./context/TodosContext";

export function App() {
  return (
    <>
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </>
  );
}
