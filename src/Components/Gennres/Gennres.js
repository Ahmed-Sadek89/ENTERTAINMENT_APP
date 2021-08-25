// material ui
import { Chip } from '@material-ui/core';
// tools
import {useQuery} from 'react-query';
// components
import {fetchGennres} from '../API/API';
// styles
import {useStyles} from './Styles'


const Gennres = ({
    type,
    setPage,
    SelectedGennres,
    setSelectedGennres,
}) => {
    const classes = useStyles()
    let {data} = useQuery('fetchGennres', ()=> fetchGennres(type),{
        keepPreviousData: true,
        cacheTime: 100
    })

    const handleAdd = (gennre) => {
        console.log(`${gennre.name} added to SelectedGennres`)
        setSelectedGennres([ ...SelectedGennres, gennre]) 
        data.genres = data.genres.filter((gen) => gen.id !== gennre.id);
        setPage(1)
    }

    const handleRemove = (gennre) => {
        console.log(`${gennre.name} removed from SelectedGennres`)
        setSelectedGennres(SelectedGennres.filter((gen) => gen.id !== gennre.id))
        data.genres = [...data.genres, gennre];
        setPage(1)
    }
    console.log('from gennres component => ',data )
    return (
        <>
            {
               SelectedGennres &&
               SelectedGennres.map((g) =>{
                   return(
                       <Chip 
                        key={g.name}
                        label={g.name} 
                        size='small'
                        clickable
                        onDelete={() => handleRemove(g)}
                        color="primary"
                        className={classes.chip}
                       />
                   )
               })
           }
           {
               data &&
               data.genres.map((g) =>{
                   return(
                       <Chip 
                        key={g.id}
                        label={g.name} 
                        size='small'
                        clickable
                        onClick={() => handleAdd(g)}
                        className={classes.chip}
                       />
                   )
               })
           } 
           
        </>
    )
}
export default Gennres