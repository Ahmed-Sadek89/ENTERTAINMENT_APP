// tools
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
// material ui
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
// components
// styles
import {useStyles} from './Styles'
import { Item } from './Styles'

const Home = ({watchListItems, likeItems, disLikeItems }) => {
    // global variable
    const classes = useStyles();
    const history = useHistory();
    //
    return (
        <Container className={classes.content}>
            <Typography variant='h4' >welcome in hub</Typography>
            <Item>

                <IconButton className={classes.Buttons} title='your watchlist' onClick={() => history.push('/watchlists')} >
                  <Badge badgeContent={watchListItems} color="secondary">
                    <PlaylistAddCheckIcon className={classes.Icons} style={{color:'#fff'}} />
                  </Badge>
                </IconButton >

                <IconButton className={classes.Buttons} title='contents you like' onClick={() => history.push('/likes')} >
                  <Badge badgeContent={likeItems} color="secondary">
                    <ThumbUpAltIcon className={classes.Icons} style={{color:'#fff'}} />
                  </Badge>
                </IconButton>

                <IconButton className={classes.Buttons} title='contents you don`t like' onClick={() => history.push('/dislikes')} >
                  <Badge badgeContent={disLikeItems} color="secondary">
                    <ThumbDownIcon className={classes.Icons} style={{color:'#fff'}}  />
                  </Badge>
                </IconButton>
                
         
            </Item>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        watchListItems: state.watchlist.length,
        likeItems: state.like.length,
        disLikeItems: state.disLike.length
    }
};
export default connect(mapStateToProps, null)(Home) 