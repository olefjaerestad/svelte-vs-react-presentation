<script lang="ts">
  import { store } from '../../App.svelte';
  
  let title: string = '';

  function handleSubmit() {
    store.update((state) => {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title
          }
        ]
      }
    });
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input bind:value={title}>
  <button type="submit">Add todo</button>
</form>
