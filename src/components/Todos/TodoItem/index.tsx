import { FC, } from 'react';

import classes from './styles.module.css';

type TodoItemProps = {
  text: string;
  onRemoveTodo: () => void;
}

export const TodoItem: FC<TodoItemProps> = (props) => {
  return (
    <>
      <li className={classes.item} onClick={props.onRemoveTodo} >{props.text}</li>
    </>
  );
}


