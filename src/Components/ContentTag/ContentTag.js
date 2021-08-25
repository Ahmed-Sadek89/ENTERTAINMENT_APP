// material-ui
// components
import {img_300, unavailable} from '../config';
// tools
import { useHistory } from 'react-router';
// styles
import {Img,StyledGrid, Overlay, Vote, Title, Footer} from './Styles'

const TrendingTag = (props) => {
    const data = props.result;
    const history = useHistory()
    return (
      <StyledGrid item xs={12} sm={6} md={3} onClick={() => history.push(`/content/${data.media_type ? data.media_type : props.type}/${parseInt(data.id)}`)}>
        <Overlay>
          <Vote variant='inherit' style={{background: data.vote_average < 6 ? '#f50057' : '#3f51b5', color :'#fff' }}> 
            {data.vote_average}
          </Vote>
          <Img src={data.poster_path ? `${img_300}${data.poster_path}` : unavailable} alt='trending' style={{width:'100%'}}/>
          <Title>
            {data.original_title ? data.original_title : data.original_name}
          </Title>
          <Footer>
            <span>{data.media_type ? (data.media_type === 'tv' ? `${data.media_type} series` : data.media_type) :  (props.type === 'tv' ? `${props.type} series` : props.type) }</span>
            <span>{data.release_date ? data.release_date : data.first_air_date}</span>
          </Footer>
        </Overlay>
      </StyledGrid>
    );
  }
  
  export default TrendingTag;
  