import { FC } from 'react';

import classes from './styles.module.css';

type TodoItemProps = {
  text: string;
}

export const TodoItem: FC<TodoItemProps> = (props) => {
  return (
    <>
      <li className={classes.item} >{props.text}</li>
    </>
  );
}


