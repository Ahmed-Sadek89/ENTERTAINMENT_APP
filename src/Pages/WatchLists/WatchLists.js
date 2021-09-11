// tools
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
// material ui
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
// components
import { add_to_watchlist, remove_from_watchlist } from '../../Redux/WatchList/Action';
import { add_To_Like, remove_From_Like } from '../../Redux/Like/Action';
import { add_To_DisLike, remove_From_DisLike } from '../../Redux/Dislike/Action';
import {img_300, unavailable} from '../../Components/config'
// styles
import {Heading, Address, Count, Contents, Index, OverLay, Remove, ButtonsGroup} from './Styles'

const WatchLists = (props) =>  {
    // global variables
    const history = useHistory();
    //
    return (
        <Container>
            <Heading>
                <Address>
                    My Watchlists
                </Address>
                <Count>
                    {props.watchlistLength ? props.watchlistLength : '0'} Content
                </Count>
            </Heading>

            <Contents>
                <Grid container spacing={3}>
                    {
                        props.wathlist &&
                        props.wathlist.map(index => {
                            // for like handling
                            const isInLike = props.like.find(item => item.id === index.id ? true : false);
                            const likeDisabled = isInLike ? true : false
                            const handleAddToLike = () => {
                                props.addToLike(index.id, index.contentType, index.data);
                                props.removeFromDisLike(index.id)
                            }
                            const handleRemoveFromLike = () => {
                                props.removeFromLike(index.id)
                            }
                            //
                            //for dislike handling 
                            const isInDisLike = props.disLike.find(item => item.id === index.id ? true : false);
                            const dislikeDisabled = isInDisLike ? true : false;
                            const handleAddToDisLike = () => {
                                props.addToDisLike(index.id, index.contentType, index.data);
                                props.removeFromLike(index.id);
                            }
                            const handleRemoveFromDisLike = () => {
                                props.removeFromDisLike(index.id)
                            }
                            //
                            return(
                                <Grid item key={index.id} xs={12} sm={6} md={4} lg={3}>
                                    <Index style={{position:'relative', overflow:'hidden'}}>
                                        <img src={index.data.poster_path ? `${img_300}${index.data.poster_path}` : unavailable} alt='watchlist' style={{width:'100%'}}/>
                                        <OverLay>
                                            <Remove>
                                                <DeleteForeverOutlinedIcon
                                                    color='secondary'
                                                    style={{cursor:'pointer'}} 
                                                    onClick={() => props.removeFromWatchlist(index.id)}
                                                />
                                            </Remove>
                                            <ButtonsGroup>
                                                <Button 
                                                    variant='text' 
                                                    color='inherit'
                                                    title='View'
                                                    onClick={() => history.push(`/content/${index.contentType}/${index.id}`)}
                                                >
                                                    <VisibilityOutlinedIcon />
                                                </Button>

                                                {/* check if this content added in likeState or not */}
                                                {
                                                    likeDisabled ===false &&
                                                    <Button 
                                                        variant='text' 
                                                        color='inherit'
                                                        title='Like'
                                                        onClick={handleAddToLike}
                                                    >
                                                        <ThumbUpAltOutlinedIcon />
                                                    </Button>
                                                }
                                                {
                                                    likeDisabled ===true &&
                                                    <Button 
                                                        variant='text' 
                                                        color='inherit'
                                                        onClick={handleRemoveFromLike}
                                                    >
                                                        <ThumbUpAltOutlinedIcon color='primary' />
                                                    </Button>
                                                }
                                                {/* check if this content added in likeState or not */}

                                                {/* check if this content added in dislikeState or not */}
                                                {   
                                                    dislikeDisabled === false &&
                                                    <Button 
                                                        variant='text' 
                                                        color='inherit'
                                                        title='dislike'
                                                        onClick={handleAddToDisLike}
                                                    >
                                                        <ThumbDownOutlinedIcon />
                                                    </Button>
                                                }
                                                {   
                                                    dislikeDisabled === true &&
                                                    <Button 
                                                        variant='text' 
                                                        color='inherit'
                                                        onClick={handleRemoveFromDisLike}
                                                    >
                                                        <ThumbDownOutlinedIcon color='secondary' />
                                                    </Button>
                                                }
                                                {/* check if this content added in dislikeState or not */}
                                            </ButtonsGroup>
                                        </OverLay>
                                    </Index>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Contents>
        </Container>
    )
}







const mapStateToProps = (state) => {
    return{
        wathlist: state.watchlist,
        watchlistLength: state.watchlist.length,

        like: state.like,

        disLike: state.disLike,
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
export default connect(mapStateToProps, mapDispatchToProps)(WatchLists);