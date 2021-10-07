<script lang="ts">
  const title: string = '';

  function handleSubmit() {
    console.log('handleSubmit()');
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input bind:value={title}>
</form>
