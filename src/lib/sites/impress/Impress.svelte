<script lang="ts">
  import { getImpressIsbn, getImpressTitle } from '.';
  import CopyButton from '../../components/CopyButton.svelte';
  import LinkButton from '../../components/LinkButton.svelte';
  

  const copyButtons = [
    { label: 'Title', getValue: getImpressTitle },
    { label: 'ISBN', getValue: getImpressIsbn }
  ]

  const linkButtons: { getUrl: () => string | undefined; iconUrl?: string; label?: string }[] = [
    {
        getUrl: () => {
            const title = getImpressTitle();
            return `https://store.shopping.yahoo.co.jp/bookoffonline/search.html?X=4&p=${title}`;
        },
        iconUrl: 'https://shopping.bookoff.co.jp/favicon.ico',
    },
    {
        getUrl: () => {
            const title = getImpressTitle();
            return `https://www.valuebooks.jp/search?keyword=${title}`
        },
        iconUrl: 'https://www.valuebooks.jp/favicon.ico',
    }
  ]
</script>

<div class="gm-booklog-container">
  {#each copyButtons as button}
    <CopyButton label={button.label} getValue={button.getValue} />
  {/each}
  {#each linkButtons as button}
    <LinkButton label={button.label} getUrl={button.getUrl} iconUrl={button.iconUrl} />
  {/each}
</div>

<style>
  .gm-booklog-container {
    --gm-button-font-size: 0.75rem;
    --gm-button-icon-size: 1.25rem;
    --gm-button-padding-y: 0.5rem;
    --gm-button-padding-x: 0.5rem;
    --gm-button-gap: 0.3rem;
  }
</style>
