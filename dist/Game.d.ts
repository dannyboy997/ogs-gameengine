import { Level } from "./Level";
export declare class Game {
    Name: string;
    private gameLoop;
    constructor(width: number, height: number);
    loadGame(): void;
    startLevel(level: Level): void;
}
