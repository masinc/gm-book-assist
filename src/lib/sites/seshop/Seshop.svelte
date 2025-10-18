<script lang="ts">
  import CopyButton from '../../components/CopyButton.svelte';
  import LinkButton from '../../components/LinkButton.svelte';
  import { getBooklogSearchUrl } from '../booklog';

  function getBookTitle(): string | undefined {
    // <<meta name="cxenseparse:sho-product-name">
    const elm = document.querySelector("meta[name='cxenseparse:sho-product-name']")
    return elm?.getAttribute("content") || undefined
  }

  function getBookIsbn(): string | undefined {
    // <meta name="cxenseparse:sho-isbn">
    const elm = document.querySelector("meta[name='cxenseparse:sho-isbn']")
    return elm?.getAttribute("content") || undefined
  }

  const copyButtons = [
    { label: 'Title', getValue: getBookTitle },
    { label: 'ISBN', getValue: getBookIsbn }
  ]

  const linkButtons: { getUrl: () => string | undefined; iconUrl?: string; label?: string }[] = [
    {
      getUrl: () => getBooklogSearchUrl(getBookIsbn()!),
      iconUrl: 'https://booklog.jp/favicon.ico',
    },
  ]

</script>

<div class="gm-seshop-container">
  {#each copyButtons as button}
    <CopyButton label={button.label} getValue={button.getValue} />
  {/each}
  {#each linkButtons as button}
    <LinkButton label={button.label} getUrl={button.getUrl} iconUrl={button.iconUrl} />
  {/each}
</div>

<style>
  .gm-seshop-container {
    --gm-button-font-size: 1.5rem;
    --gm-button-icon-size: 2.0rem;
    --gm-button-padding-y: 0.5rem;
    --gm-button-padding-x: 0.5rem;
    --gm-button-gap: 0.5rem;

    margin: 0.75rem 0;
    
  }
</style>
