function createBoard(rows: number, columns: number) {
  const board = [];

  for (let row = 0; row < rows; row++)
    board.push(Array(columns).fill(undefined));

  return board;
}

export default createBoard;
