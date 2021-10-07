import React, {FC} from 'react';
import type { ITodo } from '../../types';
import { TodoItem } from '../TodoItem/TodoItem';

interface IProps {
  todos: ITodo[];
}

export const TodoList: FC<IProps> = function(props) {
  return (
    <ul>
      {props.todos.map((todo, i) => <TodoItem title={todo.title} index={i} key={i} />)}
    </ul>
  )
}
