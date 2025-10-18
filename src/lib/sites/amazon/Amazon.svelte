<script lang="ts">
  import { getAmazonBookIsbn, getAmazonBookTitle } from './';
  import CopyButton from '../../components/CopyButton.svelte';
  import LinkButton from '../../components/LinkButton.svelte';
  import { getBooklogSearchUrl } from '../booklog';
  

  const copyButtons = [
    { label: 'Title', getValue: getAmazonBookTitle },
    { label: 'ISBN', getValue: getAmazonBookIsbn }
  ]

  const linkButtons: { getUrl: () => string | undefined; iconUrl?: string; label?: string }[] = [
    {
        getUrl: () => {
            const title = getAmazonBookTitle();
            return `https://store.shopping.yahoo.co.jp/bookoffonline/search.html?X=4&p=${title}`;
        },
        iconUrl: 'https://shopping.bookoff.co.jp/favicon.ico',
    },    
    {
      getUrl: () => getBooklogSearchUrl(getAmazonBookIsbn()!),
      iconUrl: 'https://booklog.jp/favicon.ico',
    },
    {
      getUrl: () => {
        const title = getAmazonBookTitle();
        return `https://www.valuebooks.jp/search?keyword=${title}`;
      },
      iconUrl: 'https://www.valuebooks.jp/favicon.ico'
    }
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
