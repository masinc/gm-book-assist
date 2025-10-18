<script lang="ts">
  import Button from './Button.svelte';

  export let label: string | undefined = undefined;
  export let getUrl: () => string | undefined;
  export let iconUrl: string | undefined = undefined;

  function handleClick() {
    const url = getUrl();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
</script>

<Button variant="primary" onClick={handleClick}>
  {#if iconUrl}
    <img src={iconUrl} alt="" class="icon-img" />
  {:else}
    <span class="icon">🔗</span>
  {/if}
  {#if label}
    <span class="label">{label}</span>
  {/if}
</Button>

<style>
  .icon {
    font-size: var(--gm-button-icon-size, 1.75rem);
    line-height: 1;
  }

  .icon-img {
    width: var(--gm-button-icon-size, 1.75rem);
    height: var(--gm-button-icon-size, 1.75rem);
    object-fit: contain;
  }

  .label {
    line-height: 1;
  }
</style>
