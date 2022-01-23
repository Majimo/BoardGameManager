export class CreateBoardGameDTO {
  readonly name: string;
  readonly players: Players;
  readonly publisher: string;
  readonly description: string;
  readonly created_at: Date;
}

class Players {
  readonly from: number;
  readonly to: number;
}
