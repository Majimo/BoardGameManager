import { writable, get } from "svelte/store";

export const boardGame = writable({
  name: "",
  players: { from: 1, to: 1 },
  publisher: "",
  description: "",
});

boardGame.subscribe((b) => {
  return b;
});

export const getBoardGame = () => get(boardGame);
