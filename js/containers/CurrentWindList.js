import WindList from "../components/WindList";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    winds: state.field.winds
});

const CurrentWindList = connect(mapStateToProps)(WindList);

export default CurrentWindList;

