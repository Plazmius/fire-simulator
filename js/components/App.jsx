import React from "react";
import ActiveField from "../containers/ActiveField";
import Button from '@material-ui/core/Button';
import { Grid, TextField } from "@material-ui/core";
import CurrentWindList from "../containers/CurrentWindList";

const marginBottom = { marginBottom: 10 };
const getRowGrid = (el) => (<Grid item style={marginBottom}>
    {el}
</Grid>);
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({ windScale: this.props.windScale });
    }

    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center">

                    {getRowGrid((<CurrentWindList />))}
                    {getRowGrid((<TextField outlined
                        value={this.state.windScale}
                        inputProps={{pattern:"[0-9]"}}
                        onChange={e => this.setState({windScale: e.target.value})}
                        onBlur={e => this.props.setWindScale(parseFloat(e.target.value))}
                    />))}
                    {getRowGrid((<Button variant="contained" color="primary" onClick={() => { this.props.blow(); }}>Blow!</Button>))}
                    {getRowGrid((<ActiveField />))}
                </Grid>
            </Grid>);
    }
}

export default App;
