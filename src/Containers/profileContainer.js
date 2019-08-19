import { connect } from "react-redux";
import Profile from "../Components/profileComponent";

const mapStateToProps = state => ({ state });
export default connect(mapStateToProps)(Profile);
