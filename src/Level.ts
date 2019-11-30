import { WorldObject } from "./WorldObject";
import THREE = require("three");

export class Level {
    
    public worldObjects:WorldObject[] = [];

    public Scene:THREE.Scene = new THREE.Scene();
    
    constructor() {
    }

    public addWorldObject(worldObject:WorldObject): void {
        this.worldObjects.push(worldObject);

        this.Scene.add(worldObject.mesh);
    }
}