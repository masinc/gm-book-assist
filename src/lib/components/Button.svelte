<script lang="ts">
  export let variant: 'default' | 'primary' | 'success' = 'default';
  export let onClick: () => void;
</script>

<button class="gm-button" class:gm-default={variant === 'default'} class:gm-primary={variant === 'primary'} class:gm-success={variant === 'success'} on:click={onClick}>
  <slot />
</button>

<style>
  .gm-button {
    display: inline-flex;
    align-items: center;
    gap: var(--gm-button-gap, 0.5rem);
    padding: var(--gm-button-padding-y, 0.5rem) var(--gm-button-padding-x, 0.75rem);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: var(--gm-button-font-size, 1.5rem);
    font-weight: 500;
    border: 1px solid;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  /* Default variant (gray) */
  .gm-button.gm-default {
    color: #374151;
    background: linear-gradient(to bottom, #ffffff, #f9fafb);
    border-color: #d1d5db;
  }

  .gm-button.gm-default:hover {
    background: linear-gradient(to bottom, #f9fafb, #f3f4f6);
    border-color: #9ca3af;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  /* Primary variant (blue) */
  .gm-button.gm-primary {
    color: #1e40af;
    background: linear-gradient(to bottom, #dbeafe, #bfdbfe);
    border-color: #93c5fd;
  }

  .gm-button.gm-primary:hover {
    background: linear-gradient(to bottom, #bfdbfe, #93c5fd);
    border-color: #60a5fa;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  /* Success variant (green) */
  .gm-button.gm-success {
    color: #059669;
    background: linear-gradient(to bottom, #d1fae5, #a7f3d0);
    border-color: #6ee7b7;
  }

  .gm-button:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
</style>
