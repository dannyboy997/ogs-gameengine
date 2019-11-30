import THREE = require("three");

export class WorldObject {

    private geometry = new THREE.BoxGeometry(1, 1, 1);
    private material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    public mesh = new THREE.Mesh(this.geometry, this.material);

    private minX: number;
    private maxX: number;
    private minY: number;
    private maxY: number;
    private minZ: number;
    private maxZ: number;
    
    public positionX: number;
    public positionY: number;
    public positionZ: number;
    public rotationX: number;
    public rotationY: number;
    public rotationZ: number;


    public collisionEvent: (worldObject: WorldObject) => void;

    constructor() {
    }

    public collitionHappened(worldObject: WorldObject): void {
        this.collisionEvent(worldObject);
    }

    public checkCollition(worldObject: WorldObject): boolean{
        return (this.minX <= worldObject.maxX && this.maxX >= worldObject.minX) &&
            (this.minY <= worldObject.maxY && this.maxY >= worldObject.minY) &&
            (this.minZ <= worldObject.maxZ && this.maxZ >= worldObject.minZ);
    }

    public update(): void {
        this.mesh.position.x = this.positionX;
        this.mesh.position.y = this.positionY;
        this.mesh.position.z = this.positionZ;

        this.mesh.rotation.x += this.rotationX;
        this.mesh.rotation.y += this.rotationY;
        this.mesh.rotation.z += this.rotationZ;
    }
}