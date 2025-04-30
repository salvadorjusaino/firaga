// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default {
	base: './',
	build: {
		minify: "terser", // Use Terser for minification, or 'false' if you don't want to minify
		sourcemap: false, // Disable sourcemaps in production (if you don't need them)
		chunkSizeWarningLimit: 1000, // Limit chunk size to 1000KB
		assetsDir: "assets", // Change the default assets directory
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				music: resolve(__dirname, 'music.html'),
				artists: resolve(__dirname, 'artists.html'),
				artist: resolve(__dirname, 'artist.html'),
				album: resolve(__dirname, 'album.html'),
			},
			output: {
				entryFileNames: "js/app-[name]-[hash].js", // Add hashes to JS files
				chunkFileNames: "js/main-[hash].js", // Add hashes to JS files
				assetFileNames: (assetInfo) => {
					if (assetInfo.name?.endsWith(".css")) {
						return "css/style-[hash][extname]"; // Guarda los archivos CSS en la carpeta "css"
					}
					return "images/[name]-[hash][extname]"; // Otros assets en "assets"
				},
			},
		},
	},
	server: {
		// Development server configurations for a better development experience
		open: true, // Open the browser automatically when you start the server
		port: 3000, // Change the default port
		hmr: true, // Enable Hot Module Replacement for faster development
	},
};
