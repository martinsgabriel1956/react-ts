import { FC, useContext } from 'react';
import { TodosContext } from '../../context/TodosContext';
import { TodoItem } from './TodoItem';

import classes from './styles.module.css';

export const Todos: FC = props => {
  const { removeTodo, items } = useContext(TodosContext)

  return (
    <ul className={classes.todos}>
      {items.map(item => (
        <TodoItem key={item.id} text={item.text} onRemoveTodo={removeTodo.bind(null, item.id)} />
      ))}
    </ul>
  );
}