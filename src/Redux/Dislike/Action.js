import {ADD_TO_DISLIKE, REMOVE_FROM_DISLIKE, CLEAR_DISLIKE} from './Type';

export const add_To_DisLike = (id, contentType, data ) => {
    return{
        type: ADD_TO_DISLIKE,
        id,
        contentType,
        data
    }
}

export const remove_From_DisLike = (id) => {
    return{
        type: REMOVE_FROM_DISLIKE,
        id
    }
}

export const clear_DisLike = () => {
    return{
        type: CLEAR_DISLIKE
    }
}