import * as THREE from "three";
import { Level } from "./Level";
export declare class GameLoop {
    Name: string;
    camera: THREE.PerspectiveCamera;
    private renderer;
    private currentLevel;
    constructor(width: number, height: number);
    startLevel(level: Level): void;
    private gameLoop;
    private update;
    private checkCollision;
    private animate;
}
