import THREE = require("three");

export class WorldObject {

    private geometry = new THREE.BoxGeometry(1, 1, 1);
    private material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    public x: number;
    public y: number;
    public z: number;

    public mesh = new THREE.Mesh(this.geometry, this.material);

    constructor() {
    }

    public update(): void {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
        this.mesh.rotation.z += 0.01;
    }
}