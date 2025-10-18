<script lang="ts">
  import { getOreillyBookIsbn, getOreillyBookTitle } from './';
  import CopyButton from '../../components/CopyButton.svelte';
  import LinkButton from '../../components/LinkButton.svelte';
  import { getBooklogSearchUrl } from '../booklog';

  const copyButtons = [
    { label: 'Title', getValue: getOreillyBookTitle },
    { label: 'ISBN', getValue: getOreillyBookIsbn }
  ]

  const linkButtons: { getUrl: () => string | undefined; iconUrl?: string; label?: string }[] = [
    {
      getUrl: () => getBooklogSearchUrl(getOreillyBookIsbn()!),
      iconUrl: 'https://booklog.jp/favicon.ico',
    },
  ]
</script>

<div class="gm-oreilly-container">
  {#each copyButtons as button}
    <CopyButton label={button.label} getValue={button.getValue} />
  {/each}
  {#each linkButtons as button}
    <LinkButton label={button.label} getUrl={button.getUrl} iconUrl={button.iconUrl} />
  {/each}
</div>

<style>
  .gm-oreilly-container {
    --gm-button-font-size: 1.25rem;
    --gm-button-icon-size: 1.75rem;
    --gm-button-padding-y: 0.25rem;
    --gm-button-padding-x: 0.5rem;
    --gm-button-gap: 0.5rem;

    margin: 0.75rem 0;
  }
</style>
