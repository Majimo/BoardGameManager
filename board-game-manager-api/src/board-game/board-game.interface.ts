import { Document } from 'mongoose';

export interface BoardGame extends Document {
  readonly name: string;
  readonly players: Players;
  readonly publisher: string;
  readonly description: string;
  readonly created_at: Date;
}

interface Players {
  readonly from: number;
  readonly to: number;
}
