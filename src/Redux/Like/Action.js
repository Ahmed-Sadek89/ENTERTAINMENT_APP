import {ADD_TO_LIKE, REMOVE_FROM_LIKE, CLEAR_LIKE} from './Type';

export const add_To_Like = (id, contentType, data ) => {
    return{
        type: ADD_TO_LIKE,
        id,
        contentType,
        data
    }
}

export const remove_From_Like = (id) => {
    return{
        type: REMOVE_FROM_LIKE,
        id
    }
}

export const clear_Like = () => {
    return{
        type: CLEAR_LIKE
    }
}