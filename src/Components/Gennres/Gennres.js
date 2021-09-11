// material ui
import { Chip } from '@material-ui/core';
// tools
import {useHistory} from 'react-router-dom';
import { useEffect} from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
// components
import genresURL from '../../Components/Hooks/Hooks'
import {add_Gennres_movie} from '../../Redux/GenMovie/Action';
// styles
import {useStyles} from './Styles'


const Gennres = ({
    type, setPage, gennres, setGennres, // generally
    genresURLMovies, // props for movies route 
    genURLTV, // props for movies route 
    movieGennState, movieGennSelected, // props for movies redux 
    
}) => {
    

    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=299dc8833d0986123eff433bc007e6f4&language=en-US`)
            .then(res => setGennres(res.data.genres))
    },[])

    const history = useHistory()
    const classes = useStyles()
    
    const handleAdd = (gennre) => {
        if(type === 'movie')
        {
            movieGennSelected( gennre.id, gennre.name)
            setGennres(prev => prev.filter((gen) => gen.id !== gennre.id))
            // for routing
            const dataGen = genresURL([ ...movieGennState, gennre]) 
            if(genresURLMovies !== null)
            {
                history.push(`/movies/${1}/${dataGen ? dataGen : '0'}`);
                setPage(1)
            }
        }
        else if(type === 'tv')
        {
            movieGennSelected( gennre.id, gennre.name)
            setGennres(prev => prev.filter((gen) => gen.id !== gennre.id))
            // for routing
            const dataGen = genresURL([ ...movieGennState, gennre]) 
            if(genURLTV !== null)
            {
                history.push(`/tv_series/${1}/${dataGen ? dataGen : '0'}`);
                setPage(1)
            }
        }
        
        //
    }
    return (
        <>
           {
               gennres &&
               gennres.map((g) =>{
                   return(
                       <Chip 
                        key={g.id}
                        label={g.name}
                        onClick={() => handleAdd(g)}
                        className={classes.chip}
                        size='small'
                        clickable
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
        movieGennSelected: (id, name) => dispatch(add_Gennres_movie(id, name))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Gennres)