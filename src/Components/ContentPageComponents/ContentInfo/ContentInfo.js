//matrial-ui
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//tools
import {useQuery} from 'react-query';
//components
import ContentCasts from '../ContentCasts/ContentCasts';
import ContentControl from '../ContentControl/ContentControl';
import ContentTrailer from '../ContentTrailer/ContentTrailer';
import {fetchContentInfo} from '../../API/API';
import {img_500, unavailable} from '../../config';
//styles
import { useStyles } from './Styles';
import {Overlay, Img, LineHeight, Name, Tagline, Overview, ButtonContent} from './Styles';


const ContentInfo = ({type, id}) => {
    const classes = useStyles()
    const {data, status} = useQuery(['fetchContentInfo', type, id], 
        () => fetchContentInfo(type, id),{
            keepPreviousData: true,
            cacheTime: 500
        }
    );
    return (
        <>
            {
                status === 'loading' &&
                <Typography variant='h2'  className={classes.statusMSG}>
                loading...,Refresh the page if necessary.
                </Typography>
            }
            
            {
                status === 'success' &&
                    data.id === id ?
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Overlay>
                            <Img src={data.poster_path ? `${img_500}/${data.poster_path}` : unavailable} />
                        </Overlay>
                    </Grid>
                    <LineHeight item xs={12} sm={12} md={6} lg={6} >
                        <Name item xs={12} sm={12} md={12} lg={12} >
                            {` ${ data.original_title ? data.original_title : ( data.original_name ? data.original_name : 'year is not found' ) } ( ${ data.release_date ? data.release_date.substring(0,4) : (data.first_air_date ? data.first_air_date.substring(0,4) : 'year is not found' ) } )` }
                        </Name>
                        <Tagline item xs={12} sm={12} md={12} lg={12} >
                            {data.tagline}
                        </Tagline>
                        <Overview item xs={12} sm={12} md={12} lg={12}>
                            {data.overview ? data.overview : <h5 style={{margin:'0px', fontSize: '15px',}}>Overview Not Found..</h5>}
                        </Overview>
                        <Grid item xs={12} sm={12} md={12} lg={12}  style={{margin: '20px 0px'}} >
                            <ContentCasts type={type} id={id} />
                        </Grid>
                        <ButtonContent item xs={12} sm={12} md={12} lg={12} style={{margin: '20px 0px'}} >
                            <ContentControl type={type} id={id} data={data} />
                        </ButtonContent>
                    </LineHeight>
                    
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{margin: '20px 0px'}} >
                            <ContentTrailer type={type} id={id} />
                    </Grid>
                </Grid>
                :
                null
            }
        </>
    )
}
export default ContentInfo