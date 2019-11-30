"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = require("three");
class WorldObject {
    constructor() {
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }
    collitionHappened(worldObject) {
        this.collisionEvent(worldObject);
    }
    checkCollition(worldObject) {
        return (this.minX <= worldObject.maxX && this.maxX >= worldObject.minX) &&
            (this.minY <= worldObject.maxY && this.maxY >= worldObject.minY) &&
            (this.minZ <= worldObject.maxZ && this.maxZ >= worldObject.minZ);
    }
    update() {
        this.mesh.position.x = this.positionX;
        this.mesh.position.y = this.positionY;
        this.mesh.position.z = this.positionZ;
        this.mesh.rotation.x += this.rotationX;
        this.mesh.rotation.y += this.rotationY;
        this.mesh.rotation.z += this.rotationZ;
    }
}
exports.WorldObject = WorldObject;
