import THREE = require("three");
export declare class WorldObject {
    private geometry;
    private material;
    x: number;
    y: number;
    z: number;
    mesh: THREE.Mesh;
    constructor();
    update(): void;
}
