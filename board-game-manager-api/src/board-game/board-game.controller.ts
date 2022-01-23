import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { BoardGameService } from './board-game.service';
import { CreateBoardGameDTO } from './create-board-game.dto';

@Controller('board-game')
export class BoardGameController {
  constructor(private boardGameService: BoardGameService) {}

  // add a boardGame
  @Post('create')
  async addBoardGame(
    @Res() res,
    @Body() createBoardGameDTO: CreateBoardGameDTO,
  ) {
    // eslint-disable-next-line prettier/prettier
    const boardGame = await this.boardGameService.addBoardGame(
      createBoardGameDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Jeu de société bien créé',
      boardGame,
    });
  }
}
