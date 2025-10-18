import type { SiteConfig } from "../types";

export const seshopConfig: SiteConfig = {
    matcher: /^https:\/\/www\.seshop\.com\/product\/detail\/.*/,
    setup: (root) => {
        const h1 = document.querySelector(
            "#top > div.container.cx_container_contents > section:nth-child(2) > h1",
        )!;
        if (!h1) {
            throw new Error("Seshop book page title element not found");
        }

        h1.insertAdjacentElement("afterend", root);
    },
    getComponent: () => import("./Seshop.svelte"),
};
