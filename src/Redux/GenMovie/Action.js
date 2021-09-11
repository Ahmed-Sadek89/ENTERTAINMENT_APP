import {ADD_GENNRES_MOVIE, REMOVE_GENNRES_MOVIE, REMOVE_ALL_GENNRES_MOVIE} from './Type';

export const add_Gennres_movie = (id, name) =>{
    return{
        type: ADD_GENNRES_MOVIE,
        id,
        name
    }
}
export const remove_Gennres_movie = (id) =>{
    return{
        type: REMOVE_GENNRES_MOVIE,
        id
    }
}

export const remove_all_gennres_movie = () => {
    return{
        type: REMOVE_ALL_GENNRES_MOVIE,
    }
}