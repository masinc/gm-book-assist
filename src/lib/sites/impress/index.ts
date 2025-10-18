import type { SiteConfig } from "../types";

export function getImpressIsbn() {
    // すべてのdt要素を取得
    const dts = document.querySelectorAll(".module-book-data dt");

    for (const dt of dts) {
        if (dt.textContent?.trim() === "ISBN") {
            // 次の兄弟要素（dd）を取得
            const dd = dt.nextElementSibling;
            return dd?.textContent?.trim();
        }
    }

    return undefined;
}

export function getImpressTitle() {
    const meta = document.querySelector('meta[property="og:title"]');
    const content = meta?.getAttribute("content");

    // " - インプレスブックス" を削除
    return content?.replace(/\s*-\s*インプレスブックス$/, "").trim();
}

export const impressConfig: SiteConfig = {
    matcher: /^https:\/\/book\.impress\.co\.jp\/books\/.*/,
    setup: (root) => {
        if (!getImpressTitle() || !getImpressIsbn()) {
            throw new Error("Impress book page title or ISBN not found");
        }

        const h2 = document.querySelector(".block-book-detail-head > h2");
        if (!h2) {
            throw new Error("Impress book page h2 element not found");
        }

        h2.insertAdjacentElement("afterend", root);
    },
    getComponent: () => import("./Impress.svelte"),
};
