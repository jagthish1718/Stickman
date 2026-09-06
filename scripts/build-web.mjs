// Copies the game into www/, the folder Capacitor bundles into the app.
// index.html at the repo root stays the single source of truth; run
// `npm run build:web` (or `npm run sync`) after editing it.
import { mkdir, copyFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "www");

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

const source = join(root, "index.html");
if (!existsSync(source)) {
  throw new Error("index.html not found at repo root");
}
await copyFile(source, join(outDir, "index.html"));

console.log("build-web: copied index.html -> www/index.html");
