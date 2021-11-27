import React, { FC, FormEvent, useContext, useState } from 'react';
import { TodosContext } from '../../App';

export const AddTodo: FC = function() {
  const {dispatch} = useContext(TodosContext);
  const [title, setTitle] = useState<string>('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    dispatch({
      type: 'add',
      payload: {
        todo: {
          title
        }
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add todo</button>
    </form>
  )
}
