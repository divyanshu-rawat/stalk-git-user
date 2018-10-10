
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from '../Components/profile';

const mapStateToProps = state => ({ state });
export default connect(mapStateToProps)(Profile);
