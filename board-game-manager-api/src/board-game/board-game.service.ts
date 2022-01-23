import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BoardGame } from './board-game.interface';
import { CreateBoardGameDTO } from './create-board-game.dto';

@Injectable()
export class BoardGameService {
  constructor(
    @InjectModel('BoardGame')
    private readonly boardGameModel: Model<CreateBoardGameDTO>,
  ) {}

  async addBoardGame(createBoardGame: CreateBoardGameDTO): Promise<BoardGame> {
    const newBoardGame = await new this.boardGameModel(createBoardGame);
    return newBoardGame.save();
  }
}
