// Import components to register them as custom elements
import "./lib/sites/amazon/Amazon.svelte";
import { sites } from "./lib/sites";
import { mount } from "svelte";

console.log(window.location.href);

const app = (() => {
  const href = window.location.href;

  const site = sites.find((site) => href.match(site.matcher));
  if (site) {
    const rootContainer = document.createElement("div");

    try {
      site.setup(rootContainer);
    } catch (e) {
      console.error("Error during site setup:", e);
      return;
    }

    // Create custom element instance

    mount(
      site.getComponent() as any,
      {
        target: rootContainer,
      },
    );

    return rootContainer;
  }
})();

export default app;
