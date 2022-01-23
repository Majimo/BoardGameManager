import App from "./App.svelte";

const app = new App({
  target: document.body,
});

export default app;

export const server = {
  baseURL: "http://localhost:3000",
};
