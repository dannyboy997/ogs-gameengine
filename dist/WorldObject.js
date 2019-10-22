"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = require("three");
class WorldObject {
    constructor() {
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }
    update() {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
        this.mesh.rotation.z += 0.01;
    }
}
exports.WorldObject = WorldObject;
