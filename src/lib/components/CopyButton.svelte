<script lang="ts">
  import Button from './Button.svelte';

  export let label: string;
  export let getValue: () => string | undefined;

  let copied = false;

  function handleClick() {
    const value = getValue();
    if (value) {
      navigator.clipboard.writeText(value);
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 1000);
    }
  }
</script>

<Button variant={copied ? 'success' : 'default'} onClick={handleClick}>
  <span class="gm-icon">{copied ? '✓' : '📋'}</span>
  <span class="gm-label">{copied ? 'Copied!' : label}</span>
</Button>

<style>
  .gm-icon {
    font-size: var(--gm-button-icon-size, 1.75rem);
    line-height: 1;
  }

  .gm-label {
    line-height: 1;
    white-space: nowrap;
  }
</style>
