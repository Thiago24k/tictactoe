import createBoard from "./createBoard";

class Game {
  private board: Array<any>;

  constructor() {
    this.board = createBoard(3, 3);
  }

  notify(message: string) {
    console.log(message);
  }

  selectCell(row: number, column: number) {
    // Check if cell is marked
    if (Boolean(this.board[row][column]))
      return this.notify("Cell already used");

    this.board[row][column] = 1;
  }
}

const game = new Game();

// game.selectCell(0, 0);
// game.selectCell(0, 0);
