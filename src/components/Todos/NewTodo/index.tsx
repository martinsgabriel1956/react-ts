import { useRef, FormEvent, FC } from 'react';

type NewTodoProps = {
  onAddTodo: (text: string) => void
}

export const NewTodo: FC<NewTodoProps> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const text = todoTextInputRef.current!.value;

    if(text.trim().length === 0) return;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
}