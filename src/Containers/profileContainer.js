import { connect } from "react-redux";
import Profile from "../Components/profile";

const mapStateToProps = state => ({ state });
export default connect(mapStateToProps)(Profile);
