import { mount } from "svelte";
import { sites } from "./lib/sites";

console.log(window.location.href);

const app = (async () => {
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

    const componentModule = await site.getComponent();
    mount(componentModule.default, {
      target: rootContainer,
    });
  }
})();

export default app;
