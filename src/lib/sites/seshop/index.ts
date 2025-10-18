import type { SiteConfig } from "../types";

export function getSeshopBookTitle(): string | undefined {
    // <<meta name="cxenseparse:sho-product-name">
    const elm = document.querySelector(
        "meta[name='cxenseparse:sho-product-name']",
    );
    return elm?.getAttribute("content") || undefined;
}

export function getSeshopBookIsbn(): string | undefined {
    // <meta name="cxenseparse:sho-isbn">
    const elm = document.querySelector("meta[name='cxenseparse:sho-isbn']");
    return elm?.getAttribute("content") || undefined;
}

export const seshopConfig: SiteConfig = {
    matcher: /^https:\/\/www\.seshop\.com\/product\/detail\/.*/,
    setup: (root) => {
        if (!getSeshopBookTitle() || !getSeshopBookIsbn()) {
            throw new Error("Seshop book page title or ISBN not found");
        }

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
