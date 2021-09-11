// styles
import { MainHeader } from "./Styles";
// tools
import { useHistory } from "react-router";
import {connect} from 'react-redux'
import {remove_all_gennres_movie} from '../../Redux/GenMovie/Action';

const Header = ({removeAllMovieGenn}) => {
  const history = useHistory()
  return (
    <MainHeader onClick={() =>{history.push('/'); removeAllMovieGenn() }} title='Home Page'>
      🎬 Entertainment Hub 🎥 
    </MainHeader>
  );
}

const mapDisatchToProps = (dispatch) => {
  return {
    removeAllMovieGenn: () => dispatch(remove_all_gennres_movie())
  }
}
export default connect(null, mapDisatchToProps)(Header);
  