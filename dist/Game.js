"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = require("three");
class Game {
    constructor(width, height) {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.camera.position.x = 2;
        this.camera.position.y = 2;
        this.camera.position.z = 2;
        this.camera.up = new THREE.Vector3(0, 0, 1);
        this.gameLoop = this.gameLoop.bind(this);
    }
    start() {
        this.gameLoop();
    }
    startLevel(level) {
        this.currentLevel = level;
        this.start();
    }
    gameLoop() {
        this.update();
        this.animate();
        window.requestAnimationFrame(this.gameLoop);
    }
    animate() {
        this.renderer.render(this.currentLevel.Scene, this.camera);
    }
    ;
    update() {
        const x = this.currentLevel.worldObjects[0].x;
        const y = this.currentLevel.worldObjects[0].y;
        const z = this.currentLevel.worldObjects[0].z;
        this.camera.lookAt(new THREE.Vector3(x, y, z));
        this.currentLevel.worldObjects.forEach((worldObject) => {
            worldObject.update();
        });
    }
    ;
}
exports.Game = Game;
