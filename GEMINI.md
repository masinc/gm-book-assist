# gm-book-assist

## Overview
**gm-book-assist** is a UserScript (GreaseMonkey/TamperMonkey) designed to enhance book-related websites by injecting custom UI components. It primarily targets Amazon.co.jp and technical book publisher sites in Japan.

## Tech Stack
- **Framework:** Svelte 5 (Runes mode)
- **Language:** TypeScript
- **Build Tool:** Vite 7
- **UserScript Plugin:** `vite-plugin-monkey`
- **Package Manager:** pnpm

## Architecture
The application follows a dynamic injection pattern:

1.  **Entry Point** (`src/main.ts`):
    - Observes `window.location.href`.
    - Matches the current URL against defined `sites`.
    - If a match is found, it creates a container element and mounts the corresponding Svelte site component.

2.  **Site Definitions** (`src/lib/sites/`):
    - Each supported site has a dedicated configuration implementing `SiteConfig`.
    - **`matcher`**: Regex to identify the target page.
    - **`setup`**: Logic to find an anchor element in the DOM and insert the script's root container.
    - **`getComponent`**: Dynamic import of the Svelte component (lazy loaded).

## Supported Sites
- **Amazon.co.jp** (`src/lib/sites/amazon`)
- **Booklog** (`src/lib/sites/booklog`)
- **O'Reilly Japan** (`src/lib/sites/oreilly`)
- **SE Shop** (`src/lib/sites/seshop`)
- **Impress** (`src/lib/sites/impress`)
- **Gihyo.jp** (`src/lib/sites/gihyo`)

## Development
- `pnpm dev`: Starts the Vite development server.
- `pnpm build`: Builds the UserScript for production.
