import * as mongoose from 'mongoose';

const PlayersSchema = new mongoose.Schema({ from: Number, to: Number });

export const BoardGameSchema = new mongoose.Schema({
  name: String,
  players: String,
  publisher: String,
  description: String,
  created_at: { type: Date, default: Date.now },
});
