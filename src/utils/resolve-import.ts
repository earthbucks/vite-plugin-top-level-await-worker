import { posix as path } from "path";

function isRelativeUrl(importUrl: string) {
  const testOrigin = new URL("https://test-relative." + Math.random() + ".com");
  const url = new URL(importUrl, testOrigin);
  return url.origin === testOrigin.origin;
}

export function resolveImport(base: string, imported: string) {
  if (!isRelativeUrl(imported)) return null;
  if (imported.indexOf("/") === -1) return null;
  return path.join(path.dirname(base), imported);
}
