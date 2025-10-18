export interface SiteConfig {
  matcher: RegExp;
  setup: (root: HTMLElement) => void;
  getComponent: () => Promise<{ default: any }>;
}
