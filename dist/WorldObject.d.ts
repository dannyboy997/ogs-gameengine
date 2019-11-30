import THREE = require("three");
export declare class WorldObject {
    private geometry;
    private material;
    mesh: THREE.Mesh;
    private minX;
    private maxX;
    private minY;
    private maxY;
    private minZ;
    private maxZ;
    positionX: number;
    positionY: number;
    positionZ: number;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
    collisionEvent: (worldObject: WorldObject) => void;
    constructor();
    collitionHappened(worldObject: WorldObject): void;
    checkCollition(worldObject: WorldObject): boolean;
    update(): void;
}
