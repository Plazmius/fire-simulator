import Field from "../components/Field";
import { connect } from "react-redux";
import { windBlow } from "../actions/field";

const mapStateToProps = state => {
    return {
        figures: state.field.figures,
        winds: state.field.winds
    }
}
const ActiveField = connect(mapStateToProps)(Field);

export default ActiveField;