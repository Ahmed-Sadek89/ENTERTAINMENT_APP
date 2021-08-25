// tools
import {useHistory} from 'react-router-dom'
// material-ui
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
// styles
import {useStyles, Nav} from './Styles';


const Navigation = () => {
  const history = useHistory();
  const classes = useStyles()
    return (
        <Nav 
          showLabels  
          className={classes.nav}
        >
          <BottomNavigationAction className={classes.action} label='Trending' icon={<WhatshotIcon/>} onClick={() => history.push('/') } />
          <BottomNavigationAction className={classes.action} label='Movies' icon={<MovieFilterIcon/>} onClick={() => history.push('/Movies') } />
          <BottomNavigationAction className={classes.action} label='TV Series' icon={<TvIcon/>} onClick={() => history.push('/TV_Series') } />
          <BottomNavigationAction className={classes.action} label='Search' icon={<SearchIcon/>} onClick={() => history.push('/Search') } />
        </Nav> 
    );
  }
  
  export default Navigation;
  