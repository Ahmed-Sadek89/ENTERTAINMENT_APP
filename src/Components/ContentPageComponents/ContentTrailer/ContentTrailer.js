//tools
import {useQuery} from 'react-query';
import YouTube from 'react-youtube';
//components
import {fetchContentTrailer} from '../../API/API';



const ContentTrailer = ({type,id}) => {
    const opts = {
        height: '490',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
      const {data, status} = useQuery(['fetchContentTrailer',type,id],
        () => fetchContentTrailer(type,id),{
            keepPreviousData: true,
            cacheTime:500
        }
      );
      console.log('vedio => ',data)
      //const vedID = data.results[0].key
    return (
        <>
           {
               status === 'loading' &&
               <p>loading...</p>
           }
           {
               status === 'success' &&
                data.results.length !== 0 ?
               <>
                <h5 style={{margin:'0px', fontSize: '15px', textAlign: 'center'}}>Trailer.</h5>
                <YouTube videoId={data.results[0].key} opts={opts} onReady={onReady} /> 
               </>
               : <h5 style={{margin:'0px', fontSize: '15px', textAlign: 'center'}}>Trailer not found</h5>
           }
        </>
    )
}
export default ContentTrailer