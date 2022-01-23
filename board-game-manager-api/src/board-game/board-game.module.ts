import { Module } from '@nestjs/common';
import { BoardGameService } from './board-game.service';
import { BoardGameController } from './board-game.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardGameSchema } from './board-game.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'BoardGame', schema: BoardGameSchema }]),
  ],
  providers: [BoardGameService],
  controllers: [BoardGameController],
})
export class BoardGameModule {}
