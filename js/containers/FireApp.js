import App from "../components/App";
import { connect } from "react-redux";
import { windBlow, setWindScale } from "../actions/field";

const mapStateToProps = state => ({
    windScale: state.field.windScale
})

const mapDispatchToProps = dispatch => ({
    setWindScale: (windScale) => dispatch(setWindScale(windScale)),
    blow: () => dispatch(windBlow())
});

const FireApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default FireApp;