"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameLoop_1 = require("./GameLoop");
class Game {
    constructor(width, height) {
        this.gameLoop = new GameLoop_1.GameLoop(width, height);
    }
    loadGame() {
    }
    ;
    startLevel(level) {
        this.gameLoop.startLevel(level);
    }
}
exports.Game = Game;
