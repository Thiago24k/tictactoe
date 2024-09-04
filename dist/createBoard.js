"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createBoard(rows, columns) {
    const board = [];
    for (let row = 0; row < rows; row++)
        board.push(Array(columns).fill(undefined));
    return board;
}
exports.default = createBoard;
