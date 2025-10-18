import type { SiteConfig } from "../types";

export function getOreillyBookTitle() {
    const titleElement = document.querySelector('h1[itemprop="name"]');
    return titleElement?.textContent?.trim();
}

export function getOreillyBookIsbn() {
    const isbnElement = document.querySelector('dd[itemprop="isbn"]');
    return isbnElement?.textContent?.trim().replace(/-/g, "");
}

export const oreillyConfig: SiteConfig = {
    matcher: /^https:\/\/www\.oreilly\.co\.jp\/(.*\/)?books\/.*/,
    setup: (root) => {
        // Check if this is a book page by looking for title and ISBN
        const isBook = getOreillyBookTitle() && getOreillyBookIsbn();
        if (!isBook) {
            throw new Error("Not an O'Reilly Japan book page");
        }

        // Find a suitable place to insert the component
        const titleElement = document.querySelector("h1");
        if (!titleElement) {
            throw new Error("O'Reilly Japan book page title element not found");
        }

        titleElement.insertAdjacentElement("afterend", root);
    },
    getComponent: () => import("./Oreilly.svelte"),
};
