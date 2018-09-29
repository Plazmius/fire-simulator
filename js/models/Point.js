class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static isInside (point, polygon) {
        
        var x = point.x, y = point.y;
        
        var inside = false;
        for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            var xi = polygon[i].x, yi = polygon[i].y;
            var xj = polygon[j].y, yj = polygon[j].y;
            
            var intersect = ((yi > y) != (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }
        
        return inside;
    };
}

export default Point;