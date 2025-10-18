<script lang="ts">
  import { getGihyoIsbn, getGihyoTitle } from '.';
  import CopyButton from '../../components/CopyButton.svelte';
  import LinkButton from '../../components/LinkButton.svelte';
  import { getBooklogSearchUrl } from '../booklog';
  

  const copyButtons = [
    { label: 'Title', getValue: getGihyoTitle },
    { label: 'ISBN', getValue: getGihyoIsbn }
  ]

  const linkButtons: { getUrl: () => string | undefined; iconUrl?: string; label?: string }[] = [
    {
      getUrl: () => getBooklogSearchUrl(getGihyoTitle()!),
      iconUrl: 'https://booklog.jp/favicon.ico',
    },    
  ]
</script>

<div class="gm-amazon-container">
  {#each copyButtons as button}
    <CopyButton label={button.label} getValue={button.getValue} />
  {/each}
  {#each linkButtons as button}
    <LinkButton label={button.label} getUrl={button.getUrl} iconUrl={button.iconUrl} />
  {/each}
</div>

<style>
  .gm-amazon-container {
    /* Customize button sizes for Amazon site */
    --gm-button-font-size: 0.8rem;
    --gm-button-icon-size: 1.5rem;
    --gm-button-padding-y: 0.25rem;
    --gm-button-padding-x: 0.5rem;
    --gm-button-gap: 0.3rem;
  }
</style>
