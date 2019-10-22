import { Level } from "./Level";
export declare class Game {
    Name: string;
    MountElement: HTMLDivElement;
    private camera;
    private renderer;
    private currentLevel;
    constructor(width: number, height: number);
    start(): void;
    startLevel(level: Level): void;
    private gameLoop;
    private animate;
    private update;
}
