import React from "react";
import { ObjectType } from "../models/CellState";
import { Stage, Layer, Shape } from "react-konva";
import { CELL_PX, coordToPx } from "../constants/drawing";
import { Card, CardContent, Grid } from "@material-ui/core";

const FigureColor = {};
FigureColor[ObjectType.EMPTY] = "#d1d1d1";
FigureColor[ObjectType.FOREST] = "#00ad08";
FigureColor[ObjectType.APARTAMENTS] = "#233551";
FigureColor[ObjectType.FIRE] = "#ff0000";
FigureColor[ObjectType.AIRPORT] = "#687681";
FigureColor[ObjectType.STOCK] = "#1B165F";
FigureColor[ObjectType.SANATORIUM] = "#5F2A16";
FigureColor[ObjectType.LAKE] = "#14B8FF";

const toCanvasCoord = (canvasHeight, canvasWidth, point) => [coordToPx(point.x) + canvasWidth / 2, -coordToPx(point.y) + canvasHeight / 2];

const figureToShape = (figure, height, width) => {
    return (
        <Shape sceneFunc={(context, shape) => {
            const first = figure.points[0];
            context.beginPath();
            context.moveTo(...toCanvasCoord(height, width, first));
            figure.points
                .slice(0, figure.points.length)
                .forEach(point => {
                    context.lineTo(...toCanvasCoord(height, width, point))
                });
            context.closePath();
            context.fillStrokeShape(shape);
        }}
            fill={FigureColor[figure.objectType]}
            stroke="black"
            strokeWidth={1}
        />)
};


const Field = ({ figures }) => {
    const width = 20 * CELL_PX;
    const height = 20 * CELL_PX;

    return (<Card>
        <CardContent>
            <Stage width={width} height={height}>
                <Layer>
                    {figures.map(fig => figureToShape(fig, height, width))}
                </Layer>
            </Stage>
        </CardContent>
    </Card>);
}

export default Field;
