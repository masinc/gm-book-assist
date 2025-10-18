import type { SiteConfig } from "../types";

export function getAmazonBookTitle() {
    const productTitleElm = document.querySelector("#productTitle");
    if (productTitleElm) {
        return productTitleElm?.textContent?.trim();
    }

    // mobile
    const titleElm = document.querySelector("h1#title");
    return titleElm?.textContent?.trim();
}

export function getAmazonBookIsbn() {
    // Try to find ISBN in product details
    const detailBullets = document.querySelectorAll(
        "#detailBullets_feature_div .a-list-item",
    );
    for (const bullet of detailBullets) {
        const text = bullet.textContent;
        if (text?.includes("ISBN-13") || text?.includes("ISBN-10")) {
            const isbnMatch = text.match(/(\d{10,13})/);
            if (isbnMatch) {
                return isbnMatch[1];
            }
        }
    }

    // Try alternative product details section
    const productDetails = document.querySelectorAll(
        "#productDetails_techSpec_section_1 tr, #productDetails_detailBullets_sections1 tr",
    );
    for (const row of productDetails) {
        const text = row.textContent;
        if (text?.includes("ISBN")) {
            const isbnMatch = text.match(/(\d{10,13})/);
            if (isbnMatch) {
                return isbnMatch[1];
            }
        }
    }

    return undefined;
}

export const amazonConfig: SiteConfig = {
    matcher: /^https:\/\/www\.amazon\.co\.jp\/(.*\/)?dp\/.*/,
    setup: (root) => {
        // Check if this is a book page
        const isBook = getAmazonBookIsbn() && getAmazonBookTitle();
        if (!isBook) {
            throw new Error("Not an Amazon book page");
        }

        const h1 = document.querySelector("#productTitle") || // desktop
            document.querySelector("h1#title"); // mobile
        if (!h1) {
            throw new Error("Amazon book page title element not found");
        }

        h1.insertAdjacentElement("afterend", root);
    },
    getComponent: () => import("./Amazon.svelte"),
};
