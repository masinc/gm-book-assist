<script lang="ts">
  import { getBooklogIsbn, getBooklogTitle } from '.';
  import CopyButton from '../../components/CopyButton.svelte';
  import LinkButton from '../../components/LinkButton.svelte';
  

  const copyButtons = [
    { label: 'Title', getValue: getBooklogTitle },
    { label: 'ISBN', getValue: getBooklogIsbn }
  ]

  const linkButtons: { getUrl: () => string | undefined; iconUrl?: string; label?: string }[] = [
    {
        getUrl: () => {
            const title = getBooklogTitle();
            return `https://store.shopping.yahoo.co.jp/bookoffonline/search.html?X=4&p=${title}`;
        },
        iconUrl: 'https://shopping.bookoff.co.jp/favicon.ico',
    },
    {
        getUrl: () => {
            const title = getBooklogTitle();
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
    --gm-button-font-size: 2.0rem;
    --gm-button-icon-size: 2.5rem;
    --gm-button-padding-y: 0.5rem;
    --gm-button-padding-x: 0.5rem;
    --gm-button-gap: 0.3rem;

    /* 共通レイアウト */
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  /* for mobile */
  @media (max-width: 768px) {
    .gm-booklog-container {
      --gm-button-font-size: 1.5rem;
      --gm-button-icon-size: 2.0rem;
      --gm-button-padding-y: 0.5rem;
      --gm-button-padding-x: 0.5rem;
      --gm-button-gap: 0.3rem;

      display: flex;
      flex-wrap: nowrap;
      gap: 0.5rem;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
    }
  }
</style>
