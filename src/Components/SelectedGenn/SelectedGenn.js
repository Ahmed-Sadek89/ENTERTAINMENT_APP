// material ui
import { Chip } from '@material-ui/core';
// tools

import {useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
// components
import genresURL from '../../Components/Hooks/Hooks'
import {remove_Gennres_movie} from '../../Redux/GenMovie/Action';
// styles
import {useStyles} from './Styles'


const Gennres = ({
    type, setPage, gennres, setGennres, // general
    genresURLMovies, // for movie routes
    genURLTV, // for tv_series routes
    movieGennState, removeMovieGenn, // redux
}) => {
    const classes = useStyles();
    const history = useHistory()
    
    const handleRemove = (gennre) => {
        removeMovieGenn( gennre.id)
        setGennres([gennre, ...gennres.filter((gen) => gen.id !== gennre.id)])
        const dataGen = genresURL(movieGennState.filter((gen) => gen.id !== gennre.id)) 
        // for routing
        if(type === 'movie')
        {
            if(genresURLMovies !== null){
                history.push(`/movies/${1}/${dataGen ? dataGen : '0'}`);
                setPage(1)
            }
        }
        else
        {
            if(genURLTV !== null){
                history.push(`/tv_series/${1}/${dataGen ? dataGen : '0'}`);
                setPage(1)
            }
        }
    }
  
    return (
        <>
         {
                movieGennState &&
                movieGennState.map((g) =>{
                    return(
                        <Chip 
                        key={g.id}
                        onDelete={() => handleRemove(g)}
                        color="primary"
                        label={g.name}
                        size='small'
                        clickable
                        className={classes.chip}
                        />
                    )
                })
           }
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        movieGennState: state.gennres
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        removeMovieGenn: (id) => dispatch(remove_Gennres_movie(id))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Gennres)