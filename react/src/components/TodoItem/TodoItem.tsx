import React, {FC, MouseEvent, useContext} from 'react';
import { TodosContext } from '../../App';
import type { ITodo } from '../../types';

export const TodoItem: FC<ITodo & {index: number}> = function(props) {
  const {dispatch} = useContext(TodosContext);
  
  function handleDelete(e: MouseEvent) {
    dispatch({
      type: 'delete',
      payload: {
        index: props.index
      }
    })
  }

  return (
    <li>
      {props.title}
      <button type="button" onClick={handleDelete}>&times;</button>
    </li>
  )
}
