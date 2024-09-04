"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createBoard_1 = __importDefault(require("./createBoard"));
class Game {
    constructor() {
        this.board = (0, createBoard_1.default)(3, 3);
    }
    notify(message) {
        console.log(message);
    }
    selectCell(row, column) {
        // Check if cell is marked
        if (Boolean(this.board[row][column]))
            return this.notify("Cell already used");
        this.board[row][column] = 1;
    }
}
const game = new Game();
// game.selectCell(0, 0);
// game.selectCell(0, 0);
