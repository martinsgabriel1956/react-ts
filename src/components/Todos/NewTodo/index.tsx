import { useRef, FormEvent, FC, useContext } from 'react';

import { TodosContext } from '../../../context/TodosContext';

import classes from './styles.module.css';

export const NewTodo: FC = () => {
  const { addTodo } = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const text = todoTextInputRef.current!.value;

    if(text.trim().length === 0) return;

    addTodo(text);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
}