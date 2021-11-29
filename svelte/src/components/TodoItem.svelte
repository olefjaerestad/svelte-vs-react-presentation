<script lang="ts">
  import { store } from '../App.svelte';
  
  export let title: string;
  export let index: number;

  function handleDelete() {
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
  <button type="button" on:click={handleDelete}>&times;</button>
</li>

<style>
  li {
    border-bottom: 1px solid #ccc;
  }
</style>
