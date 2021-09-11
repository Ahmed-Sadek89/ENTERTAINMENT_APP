// tools
import {useHistory} from 'react-router'
// styles
import {SetFlex} from './Styles';
import {StyledPagination} from './Styles'


const CustomPagination = (
  {
    count, page, setPage,
    pageTrendingNum, trendingPath, // props for trending routes
    pageMoviesNumber, moviesPath, genURLMovies, // props for movies routes
    pageTVNumber, TVPath, genURLTV, // props for tv_series routes
    searchPath // props for search routes 
  }
  ) => {
    const history = useHistory();

    // get page according to routes
    let pageValue = null
    if(pageTrendingNum)
    {
      pageValue = pageTrendingNum 
    }
    else if(pageMoviesNumber)
    {
      pageValue = pageMoviesNumber
    }
    else if(pageTVNumber)
    {
      pageValue = pageTVNumber
    }
    else{
      pageValue = page
    }
    //

    const handleChange = (e, value) => {
      if(trendingPath)
      {
          setPage(value);
          history.push(`/trendings/${value}`)
          window.scroll(0,0);
      }
      else if(moviesPath)
      {
        setPage(value);
        history.push(`/movies/${value}/${genURLMovies ? genURLMovies : '0'}`)
        window.scroll(0,0);
      }
      else if(TVPath)
      {
        setPage(value);
        history.push(`/tv_series/${value}/${genURLTV ? genURLTV : '0'}`)
        window.scroll(0,0);
      }
      else if(searchPath)
      {
        setPage(value);
        history.push(`/search`)
        window.scroll(0,0);
      }
      else
      {
          console.log('error routing')
      }
     
    }
    return (
            <SetFlex>
              <StyledPagination
                count={count}
                color='primary'
                page={pageValue ? pageValue : page}
                onChange={handleChange}
                size='small'
              />
            </SetFlex>
    );
  }
  
  export default CustomPagination;
  