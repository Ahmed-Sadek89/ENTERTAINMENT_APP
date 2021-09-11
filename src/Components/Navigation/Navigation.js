// tools
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux'
// material-ui
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import {remove_all_gennres_movie} from '../../Redux/GenMovie/Action';
// styles
import {useStyles, Nav} from './Styles';


const Navigation = ({removeAllMovieGenn}) => {
  const history = useHistory();
  const classes = useStyles()
    return (
        <Nav 
          showLabels  
          className={classes.nav}
        >
          <BottomNavigationAction className={classes.action} label='Home' icon={<HomeIcon/>} onClick={() => {
            history.push(`/`); 
            window.scroll(0,0);
            removeAllMovieGenn()
          } 
          }/>
          <BottomNavigationAction className={classes.action} label='Trending' icon={<WhatshotIcon/>} onClick={() => {
            history.push(`/trendings/${1}`); 
            window.scroll(0,0);
            removeAllMovieGenn()
          } 
          }/>
          <BottomNavigationAction className={classes.action} label='Movies' icon={<MovieFilterIcon/>} onClick={() => {
            history.push(`/movies/${1}/${0}`); 
            window.scroll(0,0);
            removeAllMovieGenn()
          } 
          }/>
          <BottomNavigationAction className={classes.action} label='TV Series' icon={<TvIcon/>} onClick={() =>{
             history.push(`/tv_series/${1}/${0}`);
             window.scroll(0,0);
             removeAllMovieGenn()
          }
          }/>
          <BottomNavigationAction className={classes.action} label='Search' icon={<SearchIcon/>} onClick={() =>{
             history.push('/search');
             window.scroll(0,0);
             removeAllMovieGenn()
          }
          }/>
        </Nav> 
    );
  }
const mapDisatchToProps = (dispatch) => {
  return {
    removeAllMovieGenn: () => dispatch(remove_all_gennres_movie())
  }
}
export default connect(null, mapDisatchToProps)(Navigation);