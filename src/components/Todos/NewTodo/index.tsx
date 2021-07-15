import { useRef, FormEvent } from 'react';

export const NewTodo = () => {
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