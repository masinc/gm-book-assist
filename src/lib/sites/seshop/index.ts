import type { SiteConfig } from "../types";

export function getSeshopBookTitle(): string | undefined {
    const ogTitle = document
        .querySelector('meta[property="og:title"]')
        ?.getAttribute("content");
    if (ogTitle) {
        return ogTitle.replace(/\s*[|｜]\s*SEshop.*$/i, "").trim();
    }

    const gtmTitle = document
        .querySelector("#gtm-product-data")
        ?.getAttribute("data-title");
    if (gtmTitle) {
        return gtmTitle.trim();
    }

    const h1 = document.querySelector(".cx_container_contents section h1, section h1, h1");
    if (h1) {
        const clone = h1.cloneNode(true) as HTMLElement;
        clone.querySelectorAll(".badge").forEach((el) => el.remove());
        return clone.textContent?.trim();
    }

    return undefined;
}

export function getSeshopBookIsbn(): string | undefined {
    const dts = document.querySelectorAll(".dl-horizontal dt, dl dt");
    for (const dt of dts) {
        if (dt.textContent?.trim() === "ISBN") {
            const dd = dt.nextElementSibling;
            return dd?.textContent?.trim().replace(/-/g, "") || undefined;
        }
    }
    return undefined;
}

export const seshopConfig: SiteConfig = {
    matcher: /^https:\/\/www\.seshop\.com\/product\/detail\/.*/,
    setup: (root) => {
        if (!getSeshopBookTitle() || !getSeshopBookIsbn()) {
            throw new Error("Seshop book page title or ISBN not found");
        }

        const h1 = document.querySelector(
            ".cx_container_contents section h1, section h1, h1",
        );
        if (!h1) {
            throw new Error("Seshop book page title element not found");
        }

        h1.insertAdjacentElement("afterend", root);
    },
    getComponent: () => import("./Seshop.svelte"),
};

