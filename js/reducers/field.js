import { ObjectType } from "../models/CellState";
import Figure from "../models/Figure";
import Point from "../models/Point";
import convexHull from "convexhull-js";
import { Y_MIN, Y_MAX, X_MIN, X_MAX } from "../constants/drawing";
import { Wind } from "../models/Wind";

const axisY = new Figure([
    new Point(0, Y_MIN),
    new Point(0, Y_MAX)
])
const axisX = new Figure([
    new Point(X_MIN, 0),
    new Point(X_MAX, 0)
])

const fire = new Figure([
    new Point(-0.05, -0.05),
    new Point(0.05, -0.05),
    new Point(0.05, 0.05),
    new Point(-0.05, 0.05)
], ObjectType.FIRE)

const apartaments = new Figure([
    new Point(-2, Y_MAX),
    new Point(-2, 6),
    new Point(-6, 2),
    new Point(X_MIN, 2),
    new Point(X_MIN, Y_MAX)
], ObjectType.APARTAMENTS)

const airport = new Figure([
    new Point(X_MIN, -2),
    new Point(-8, -2),
    new Point(-6, -4),
    new Point(-6, Y_MIN),
    new Point(X_MIN, Y_MIN)
], ObjectType.AIRPORT)

const stock = new Figure([
    new Point(4, -4),
    new Point(8, -4),
    new Point(8, -6),
    new Point(4, -6)
], ObjectType.STOCK)

const sanatorium = new Figure([
    new Point(4, Y_MAX),
    new Point(4, 6),
    new Point(6, 6),
    new Point(6, 8),
    new Point(5, Y_MAX)
], ObjectType.SANATORIUM)

const lake = new Figure([
    new Point(6, 8),
    new Point(5, Y_MAX),
    new Point(X_MAX, Y_MAX),
    new Point(X_MAX, 9)
], ObjectType.LAKE)

const initState = {
    windScale: 0.1,
    figures: [
        axisX,
        axisY,
        fire,
        apartaments,
        airport,
        stock,
        sanatorium,
        lake
    ],
    winds: [
        new Wind(0.9, 1.5, "SE"),
        new Wind(0.5, 1, "NE"),
        new Wind(1.1, 0.3, "NW"),
        new Wind(0.4, 1, "E"),
        new Wind(1, 2, "S"),
        new Wind(0.6, 0.5, "N"),
        new Wind(1, 2.5, "SW"),
        new Wind(0.4, 0.5, "W"),
    ],
    fire: fire
}

const movePoints = (points, vector, amount) => {
    console.log(vector.x, vector.y);
    return points.map(p => new Point(p.x + amount * vector.x, p.y + amount * vector.y))
};

const mergeFire = (fire, blewPoints) => {
    const newFirePoints = convexHull(fire.points.concat(blewPoints));
    return new Figure(newFirePoints, ObjectType.FIRE);
};

const blow = (fire, wind, windScale) => {
    const secondsBlew = wind.time * 60 * 60;
    const fireSpeed = wind.speed * windScale;
    const kmIncreased = secondsBlew * fireSpeed / 1000;
    const blewPoints = movePoints(fire.points, wind.directionVector, kmIncreased);

    return mergeFire(fire, blewPoints);
};

const field = (state = initState, action) => {
    switch (action.type) {
        case "SET_WIND_SCALE":
            return Object.assign({}, state, {
                windScale: action.data.windScale
            })
        case "WIND_BLOW":
            const newFire = blow(state.fire, state.winds.shift(), state.windScale);
            return Object.assign({}, state, {
                figures: state.figures
                    .filter(fig => fig.objectType != ObjectType.FIRE)
                    .concat([newFire]),
                winds: [...state.winds],
                fire: newFire
            });
        default:
            return state;
    }
};

export default field;
