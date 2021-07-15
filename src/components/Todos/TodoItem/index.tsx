import { FC } from 'react';

type TodoItemProps = {
  text: string;
}


export const TodoItem: FC<TodoItemProps> = (props) => {
  return (
    <>
      <li>{props.text}</li>
    </>
  );
}


