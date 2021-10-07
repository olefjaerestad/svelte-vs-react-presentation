<script lang="ts">
  import TodoItem from '../TodoItem/TodoItem.svelte';
  import { store } from '../../App.svelte';
</script>

<ul>
  {#each $store.todos as todo, index}
    <TodoItem title={todo.title} {index} />
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
