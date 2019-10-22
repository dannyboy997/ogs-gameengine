import { WorldObject } from "./WorldObject";
import THREE = require("three");
export declare class Level {
    worldObjects: WorldObject[];
    Scene: THREE.Scene;
    constructor();
    addWorldObject(worldObject: WorldObject): void;
}
