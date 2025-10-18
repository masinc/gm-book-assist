import type { SiteConfig } from "../types";

export function getGihyoIsbn() {
    // ISBNのdt要素を探す
    const dts = document.querySelectorAll(".bookdata dt");

    for (const dt of dts) {
        if (dt.textContent?.trim() === "ISBN") {
            // 次の兄弟要素（dd）を取得
            const dd = dt.nextElementSibling as HTMLElement;
            // 紙版のISBN（最初のspan）を取得
            const paperIsbn = dd?.querySelector("span.paper");
            return paperIsbn?.textContent?.trim().replace(/-/g, "") ||
                undefined;
        }
    }

    return undefined;
}

export function getGihyoTitle() {
    const meta = document.querySelector('meta[property="og:title"]');
    const content = meta?.getAttribute("content");

    // " | 技術評論社" を削除
    return content?.replace(/\s*\|\s*技術評論社$/, "").trim() || undefined;
}

export const gihyoConfig: SiteConfig = {
    matcher: /^https:\/\/gihyo.jp\/book\/.*/,
    setup: (root) => {
        if (!getGihyoTitle() || !getGihyoIsbn()) {
            throw new Error("Gihyo book page title or ISBN not found");
        }

        const bookData = document.querySelector(".bookinfo--data");
        if (!bookData) {
            throw new Error(
                "Gihyo book page .bookinfo--data element not found",
            );
        }

        bookData.insertAdjacentElement("afterend", root);
    },
    getComponent: () => import("./Gihyo.svelte"),
};
