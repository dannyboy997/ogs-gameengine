import * as THREE from "three";
import { Level } from "./Level";
import { WorldObject } from "./WorldObject";
import { GameLoop } from "./GameLoop";

export class Game {
    public Name: string;

    private gameLoop: GameLoop;

    constructor(width: number, height: number) {
        this.gameLoop = new GameLoop(width, height);
    }
    
    public loadGame(): void {
    };

    public startLevel(level: Level): void {
        this.gameLoop.startLevel(level);
    }
}