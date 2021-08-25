//matrial-ui
import Grid from '@material-ui/core/Grid';
//tools
import {useQuery} from 'react-query';
//components
import {img_300,noPicture} from '../../config';
import {fetchContentCasts} from '../../API/API';
//styles
import {SetFlex, Overview,ForImg , Img, Name} from './Styles';


const ContentCasts = ({type, id}) => {
    const {data, status} = useQuery(['fetchContentCasts', type, id],
        () => fetchContentCasts(type, id),{
            keepPreviousData: true,
            cacheTime: 500
        }
    );
    console.log('casts => ' , data)
    return (
        <>
        <h5 style={{margin:'0px', fontSize: '15px', textAlign: 'center'}}>Casts..</h5>
        <Overview>
            <Grid container spacing={3}>
                {
                    status === 'loading' &&
                    <span>loading....</span>
                }
                {
                    status === 'success' &&
                     data.cast.length === 0 &&
                     <h5 style={{margin:'0px', fontSize: '15px', textAlign: 'center'}}>Casts Not Found..</h5>
                }
                {
                    status === 'success' &&
                    data.cast.map((index) => {
                        return(
                            <SetFlex item xs={4} sm={4} md={4} lg={4} key={index.id}>
                                <ForImg>
                                    <Img src={ index.profile_path ? `${img_300}/${index.profile_path}` : noPicture} />
                                </ForImg>
                                <Name>{index.name}</Name>
                                <span style={{fontSize: '10px'}}>{index.character}</span>
                            </SetFlex>
                        )
                    })
                }
            </Grid>
        </Overview>
        </>
    )
}
export default ContentCasts