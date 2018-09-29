import React from "react";
import { List, ListItem, Divider, Grid } from "@material-ui/core";

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
};

const windStyle = {
    width: "60px",
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
}

const WindList = ({ winds }) => (
    <List style={flexContainer}>
        {winds.map(wind => (<ListItem button style={windStyle}>
            <p>{wind.direction}</p>
            <p>{wind.speed}</p>
            <p>{wind.time}</p>
        </ListItem>))}
    </List>);

export default WindList;
