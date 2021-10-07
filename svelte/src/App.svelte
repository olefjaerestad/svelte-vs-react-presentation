<script lang="ts" context="module">
  import type { ITodo } from './types';
  import AddTodo from './components/AddTodo/AddTodo.svelte';
  import TodoList from './components/TodoList/TodoList.svelte';
  import { writable } from 'svelte/store';

  export const store = writable<{todos: ITodo[]}>({
    todos: []
  });
</script>

<script lang="ts">
  $: todos = $store.todos;
</script>

<AddTodo />
<TodoList {todos} />
