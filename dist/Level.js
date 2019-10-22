"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = require("three");
class Level {
    constructor() {
        this.worldObjects = [];
        this.Scene = new THREE.Scene();
    }
    addWorldObject(worldObject) {
        this.worldObjects.push(worldObject);
        this.Scene.add(worldObject.mesh);
    }
}
exports.Level = Level;
