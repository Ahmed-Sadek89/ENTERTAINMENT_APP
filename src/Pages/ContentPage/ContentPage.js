//matrial-ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
//tools
//components
import ContentInfo from '../../Components/ContentPageComponents/ContentInfo/ContentInfo';
//styles

const ContentPage=(props) => {
    const id = parseInt(props.match.params.id) ? parseInt(props.match.params.id) : null; 
    const type = props.match.params.type === 'person' ? '' : props.match.params.type;
    //console.log(props.match.params)
    return (
        <Container>
           {
              ( (type ==='tv' || type === 'movie') && id) ?
                <>
                    <ContentInfo id={id} type={type} />
                </>
                 : <Typography variant='h3' color='secondary' style={{textAlign: 'center'}} >Not Found</Typography>
           }
        </Container>
    )
}
export default ContentPage