interface ITodoActions {
  add: {
    type: 'add';
    payload: {
      todo: ITodo;
    };
  };
  delete: {
    type: 'delete';
    payload: {
      index: number;
    };
  };
}

export type TTodoAction = ITodoActions['add'] | ITodoActions['delete'];

export interface ITodo {
  title: string;
}
