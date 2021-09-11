// tools
import {connect} from 'react-redux';
// material ui
import { Button } from '@material-ui/core';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
// components
import {add_to_watchlist, remove_from_watchlist} from '../../../Redux/WatchList/Action';
import {add_To_Like, remove_From_Like} from '../../../Redux/Like/Action';
import {add_To_DisLike, remove_From_DisLike} from '../../../Redux/Dislike/Action';
// styles
import {useStyles} from './Styles';


const ContentControl = (props) => {
    // styles variable
    const classes = useStyles();
    //
    // props needed
    const id = props.id;
    const type = props.type;
    const data = props.data;
    //
    // check if added or not
    const isWatchList = props.watchListState.find(item => item.id === id ? true : false);
    const DisabledWatchList = isWatchList ? true : false;

    const isLike = props.likeState.find(item => item.id === id ? true : false);
    const DisabledLike = isLike ? true : false;

    const isDisLike = props.disLikeState.find(item => item.id === id ? true : false);
    const DisabledDisLike = isDisLike ? true : false;
    //
    // functions
    const handleAddWatchList = () => {
        props.addToWatchlist(id, type, data);
    }
    const handleRemoveWatchList = () => {
        props.removeFromWatchlist(id)
    }

    const handleAddLike = () => {
        props.addToLike(id, type, data)
        props.removeFromDisLike(id)
    }
    const handleRemoveLike = () => {
        props.removeFromLike(id)
    }

    const handleAddDisLike = () => {
        props.addToDisLike(id, type, data);
        props.removeFromLike(id);
    }
    const handleRemoveDisLike = () => {
        props.removeFromDisLike(id)
    }
    //

    return (
        <> 
            {/* watchList */}
            { 
                DisabledWatchList === false &&
                <Button 
                    title='Add To Watchlist'
                    variant='contained' 
                    className={classes.btnStyle}
                    onClick={handleAddWatchList}
                >
                    <PlaylistAddIcon />
                </Button>
            }
            {
                DisabledWatchList === true &&
                <Button 
                    variant='contained' 
                    className={classes.btnStyle}
                    onClick={handleRemoveWatchList}
                >
                    <PlaylistAddCheckIcon color='secondary' />
                </Button>
            }
            {/* watchList */}

            {/* like */}
            {
                DisabledLike === false &&
                <Button 
                    title='Like'
                    variant='contained' 
                    className={classes.btnStyle}
                    onClick={handleAddLike}
                >
                    <ThumbUpAltIcon />
                </Button>
            }
            {
                DisabledLike === true &&
                <Button 
                    variant='contained' 
                    className={classes.btnStyle}
                    onClick={handleRemoveLike}
                >
                    <ThumbUpAltIcon color='primary' />
                </Button>
            }
            {/* like */}

            {/* disLike */}
            {
                DisabledDisLike === false &&
                <Button 
                    title='Dislike'
                    variant='contained' 
                    className={classes.btnStyle}
                    onClick={handleAddDisLike}
                >
                    <ThumbDownIcon />
                </Button>
            }
            {
                DisabledDisLike === true &&
                <Button 
                    variant='contained' 
                    className={classes.btnStyle}
                    onClick={handleRemoveDisLike}
                >
                    <ThumbDownIcon color='error' />
                </Button>
            }
            {/* disLike */}
        </>
    )
}
const mapStateToProps = (state) => {
    return{
        watchListState: state.watchlist,
        likeState: state.like,
        disLikeState: state.disLike
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        addToWatchlist: (id, contentType, data) => dispatch(add_to_watchlist(id, contentType, data)),
        removeFromWatchlist: (id) => dispatch(remove_from_watchlist(id)),

        addToLike : (id, contentType, data) => dispatch(add_To_Like(id, contentType, data)),
        removeFromLike: (id) => dispatch(remove_From_Like(id)),

        addToDisLike : (id, contentType, data) => dispatch(add_To_DisLike(id, contentType, data)),
        removeFromDisLike: (id) => dispatch(remove_From_DisLike(id)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ContentControl);