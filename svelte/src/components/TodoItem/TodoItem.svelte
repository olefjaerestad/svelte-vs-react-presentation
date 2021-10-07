<script lang="ts">
  import type { ITodo } from '../../types';
  import { store } from '../../App.svelte';

  export let title: ITodo['title'];
  export let index: number;

  function handleDelete(e: MouseEvent) {
    store.update((state) => {
      const newTodos = [...state.todos];
      newTodos.splice(index, 1);
      return {
        ...state,
        todos: newTodos
      }
    });
  }
</script>

<li>
  {title}
  <button on:click={handleDelete}>&times;</button>
</li>

<style>
  li {
    border-bottom: 1px solid #ccc;
  }
</style>
