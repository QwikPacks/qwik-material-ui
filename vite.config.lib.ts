// vite.config.lib.ts
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		dts({
			outDir: "dist",
			entryRoot: "src",
			// Generate types for bundled entry point
			rollupTypes: true,
			// Explicitly include source files
			include: ["src/**/*"],
			exclude: ["src/**/*.test.*", "src/**/stories.*"],
		}),
	],
	build: {
		lib: {
			entry: "./src/index.ts",
			name: "QwikMaterialUI",
			fileName: (format) => `index.${format === "es" ? "mjs" : "js"}`,
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: ["@builder.io/qwik", "@builder.io/qwik/jsx-runtime"],
			output: {
				dir: "dist",
				// Ensure QRLs are bundled correctly
				inlineDynamicImports: true,
			},
		},
		outDir: "dist",
		emptyOutDir: true,
		// Ensure source maps for debugging
		sourcemap: true,
	},
});
