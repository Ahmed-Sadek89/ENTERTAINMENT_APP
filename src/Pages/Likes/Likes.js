// tools
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
// material ui
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
// components
import { remove_From_Like } from '../../Redux/Like/Action';
import {img_300, unavailable} from '../../Components/config'
// styles
import {Heading, Address, Count, Contents, Index, OverLay, Remove, ButtonsGroup} from './Styles'

const Likes = (props) =>  {
    // global variables
    const history = useHistory();
    //
    return (
        <Container>
            <Heading>
                <Address>
                    Like List
                </Address>
                <Count>
                    {props.likeLength ? props.likeLength : '0'} Content
                </Count>
            </Heading>

            <Contents>
                <Grid container spacing={3}>
                    {
                        props.like &&
                        props.like.map(index => {
                            return(
                                <Grid item key={index.id} xs={12} sm={6} md={4} lg={3}>
                                    <Index style={{position:'relative', overflow:'hidden'}}>
                                        <img src={index.data.poster_path ? `${img_300}${index.data.poster_path}` : unavailable} alt='watchlist' style={{width:'100%'}}/>
                                        <OverLay>
                                            <Remove>
                                                <DeleteForeverOutlinedIcon
                                                    color='secondary'
                                                    style={{cursor:'pointer'}} 
                                                    onClick={() => props.removeFromLike(index.id)}
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
        like: state.like,
        likeLength: state.like.length,
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        removeFromLike: (id) => dispatch(remove_From_Like(id)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Likes);