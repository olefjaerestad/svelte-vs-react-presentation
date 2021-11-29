<script lang="ts" context="module">
  import type { ITodo } from './types';
  import { writable } from 'svelte/store';
  import AddTodo from './components/AddTodo.svelte';
  import TodoList from './components/TodoList.svelte';

  export const store = writable<{todos: ITodo[]}>({
    todos: []
  });
</script>

<script lang="ts">
  $: todos = $store.todos;
  
  $: {
    console.log('Updated todos:', todos);
  }
</script>

<AddTodo />
<TodoList {todos} />
