import Point from "./Point";
import { Vector } from "./Vector";

const s = new Vector(new Point(0, 0), new Point(0, -1));
const n = new Vector(new Point(0, 0), new Point(0, 1));
const e = new Vector(new Point(0, 0), new Point(1, 0));
const w = new Vector(new Point(0, 0), new Point(-1, 0));

const directions = {
    "SE": Vector.turn(s, -45),
    "NE": Vector.turn(n, 45),
    "SW": Vector.turn(s, 45),
    "NW": Vector.turn(n, -45),
    "S": s,
    "N": n,
    "E": e,
    "W": w
}

export class Wind {
    constructor(time, speed, direction) {
        this.time = time;
        this.speed = speed;
        this.direction = direction;
        this.directionVector = directions[direction];
    }
}