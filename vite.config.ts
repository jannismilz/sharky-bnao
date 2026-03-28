import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                projects: resolve(__dirname, "projects.html"),
                chatbot: resolve(__dirname, "chatbot.html"),
            },
        },
    },
    plugins: [tailwindcss()],
});
