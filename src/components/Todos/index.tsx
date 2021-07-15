import { FC } from 'react';


export const Todos: FC<{items: string[]}> = props => {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}