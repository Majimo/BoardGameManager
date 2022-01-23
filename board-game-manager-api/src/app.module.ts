import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardGameModule } from './board-game/board-game.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/board-game-manager', {
      useNewUrlParser: true,
    }),
    BoardGameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
