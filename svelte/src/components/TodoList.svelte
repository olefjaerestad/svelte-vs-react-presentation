<script lang="ts">
  import type { ITodo } from "../types";
  import TodoItem from './TodoItem.svelte';

  export let todos: ITodo[];
</script>

<ul>
  {#each todos as todo, i (i)}
    <TodoItem title={todo.title} index={i} />
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    width: 400px;
    max-width: 100%;
    padding: 0;
    margin: 0;
  }
</style>
