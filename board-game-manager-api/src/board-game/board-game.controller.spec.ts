import { Test, TestingModule } from '@nestjs/testing';
import { BoardGameController } from './board-game.controller';

describe('BoardGameController', () => {
  let controller: BoardGameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardGameController],
    }).compile();

    controller = module.get<BoardGameController>(BoardGameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
