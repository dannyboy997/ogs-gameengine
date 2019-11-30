import * as THREE from "three";
import { Level } from "./Level";
import { WorldObject } from "./WorldObject";

export class GameLoop {
    public Name: string;

    public camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    private renderer = new THREE.WebGLRenderer({ antialias: true });

    private currentLevel: Level;

    constructor(width: number, height: number) {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.camera.position.x = -2;
        this.camera.position.y = -2;
        this.camera.position.z = -2;

        this.camera.up = new THREE.Vector3(0, 0, 1);
        
        this.gameLoop = this.gameLoop.bind(this);
    }

    public startLevel(level: Level): void {
        this.currentLevel = level;

        this.gameLoop();
    }

    private gameLoop(): void {
        this.update();
        this.checkCollision();
        this.animate();

        window.requestAnimationFrame(this.gameLoop);
    }

    private update(): void {
        const x = this.currentLevel.worldObjects[0].positionX;
        const y = this.currentLevel.worldObjects[0].positionY;
        const z = this.currentLevel.worldObjects[0].positionZ;

        this.camera.lookAt(new THREE.Vector3(x, y, z));

        this.currentLevel.worldObjects.forEach((worldObject: WorldObject) => {
            worldObject.update();
        });
    };

    private checkCollision(): void {
        this.currentLevel.worldObjects.forEach((worldObjectA: WorldObject) => {
            this.currentLevel.worldObjects.forEach((worldObjectB: WorldObject) => {
                if (worldObjectA != worldObjectB && worldObjectA.checkCollition(worldObjectB)){
                    worldObjectA.collitionHappened(worldObjectB);
                }
            });
        });
    };

    private animate(): void {
        this.renderer.render(this.currentLevel.Scene, this.camera);
    };
}