import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Description from "../Components/description";
import { repoData } from "../ActionTypes";

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ repoData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Description);
