import Point from "./Point";

const toRadians = (angle) => {
    return angle * (Math.PI / 180);
}

export class Vector {
    constructor(start, end) {
        this.points = [start, end];
        this.start = start;
        this.end = end;
    }

    get x() {
        return this.end.x - this.start.x;
    }

    get y() {
        return this.end.y - this.start.y;
    }

    static turn(vector, angle) {
        const radAngle = toRadians(angle);
        const vectorStart = vector.points[0];

        const x1 = vector.x;
        const y1 = vector.y;
        const x2 = Math.cos(radAngle) * x1 - Math.sin(radAngle) * y1;
        const y2 = Math.sin(radAngle) * x1 + Math.cos(radAngle) * y1;
        
        return new Vector(vectorStart, new Point(vectorStart.x - x2,vectorStart.y - y2));
    }
}