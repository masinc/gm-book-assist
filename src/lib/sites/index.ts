import { amazonConfig } from "./amazon";
import { booklogConfig } from "./booklog";
import { oreillyConfig } from "./oreilly";
import { seshopConfig } from "./seshop";
import { type SiteConfig } from "./types";

export const sites: SiteConfig[] = [
    amazonConfig,
    booklogConfig,
    oreillyConfig,
    seshopConfig,
] as const;
