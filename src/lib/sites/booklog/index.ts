import type { SiteConfig } from "../types";

export function getBooklogDetailUrl(isbn: string) {
    return `https://booklog.jp/item/1/${isbn}`;
}

export function getBooklogSearchUrl(keyword: string) {
    return `https://booklog.jp/search?service_id=1&keyword=${keyword}&db=b`;
}

export function getBooklogTitle() {
    // desktop
    let elm = document.querySelector(
        "#item-area > div.inner > div.item-info-area > h1",
    );

    if (!elm) {
        // mobile
        elm = document.querySelector(
            "#main > div > section.item-area.ruled-line.b20P > div.item-info-container > div.right-area > h1",
        );
    }
    return elm?.textContent;
}

export function getBooklogIsbn() {
    // <a id="external-site-honto">
    const elm = document.querySelector(
        "a#external-site-honto",
    ) as HTMLAnchorElement;
    const match = elm?.href.match(/%2F([0-9]+)$/);
    return match ? match[1] : undefined;
}

export const booklogConfig: SiteConfig = {
    matcher: /^https:\/\/booklog\.jp\/item\/1\/.*/,
    setup: (root) => {
        // desktop
        let h1 = document.querySelector(
            "#item-area > div.inner > div.item-info-area > h1",
        );

        if (!h1) {
            // mobile
            h1 = document.querySelector(
                "#main > div > section.item-area.ruled-line.b20P > div.item-info-container > div.right-area > h1",
            );

            if (!h1) {
                throw new Error("Booklog book page title element not found");
            }
        }

        h1.insertAdjacentElement("afterend", root);
    },
    getComponent: () => import("./Booklog.svelte"),
};
