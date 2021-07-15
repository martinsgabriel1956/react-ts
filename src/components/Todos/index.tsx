import { FC } from 'react';
import Todo from '../../models/todo';
import { TodoItem } from './TodoItem';

import classes from './styles.module.css';

type TodosProps = {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}

export const Todos: FC<TodosProps> = props => {
  return (
    <ul className={classes.todos}>
      {props.items.map(item => (
        <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
      ))}
    </ul>
  );
}