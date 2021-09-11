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
import { remove_From_DisLike } from '../../Redux/Dislike/Action';
import {img_300, unavailable} from '../../Components/config'
// styles
import {Heading, Address, Count, Contents, Index, OverLay, Remove, ButtonsGroup} from './Styles'

const DisLikes = (props) =>  {
    // global variables
    const history = useHistory();
    //
    return (
        <Container>
            <Heading>
                <Address>
                    Dislike List
                </Address>
                <Count>
                    {props.disLikeLength ? props.disLikeLength : '0'} Content
                </Count>
            </Heading>

            <Contents>
                <Grid container spacing={3}>
                    {
                        props.disLike &&
                        props.disLike.map(index => {
                            return(
                                <Grid item key={index.id} xs={12} sm={6} md={4} lg={3}>
                                    <Index style={{position:'relative', overflow:'hidden'}}>
                                        <img src={index.data.poster_path ? `${img_300}${index.data.poster_path}` : unavailable} alt='watchlist' style={{width:'100%'}}/>
                                        <OverLay>
                                            <Remove>
                                                <DeleteForeverOutlinedIcon
                                                    color='secondary'
                                                    style={{cursor:'pointer'}} 
                                                    onClick={() => props.removeFromDisLike(index.id)}
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
        disLike: state.disLike,
        disLikeLength: state.disLike.length
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        removeFromDisLike: (id) => dispatch(remove_From_DisLike(id)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DisLikes);