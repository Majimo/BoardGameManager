export interface BoardGame {
  name: string;
  players: Players;
  publisher: string;
  description: string;
}

export interface Players {
  from: number;
  to: number;
}
