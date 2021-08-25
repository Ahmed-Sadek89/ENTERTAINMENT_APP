// material-ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// components
import { fetchMovies } from '../../Components/API/API';
import ContentTag from '../../Components/ContentTag/ContentTag';
import CustomPagination from '../../Components/CustomPagination/CustomPagination';
import Gennres from '../../Components/Gennres/Gennres'
import genresURL from '../../Components/Hooks/Hooks'
// tools
import { useQuery } from "react-query";
import { useState } from 'react';
// styles
import {Address} from './Styles';
import {useStyles} from './Styles'


const Movies = () => {
  const classes = useStyles()
  const [page, setPage] = useState(1);
  let [SelectedGennres, setSelectedGennres] = useState([]);
  const genresURL1 = genresURL(SelectedGennres);
  const {data, status} = useQuery(['fetchMovies', page, genresURL1], () => fetchMovies(page, genresURL1),
  {
  keepPreviousData: true,
  cacheTime: 100 // time to get fetching
  })
  
  console.log(data)
  
  console.log('page now is ', page)
    return (
      <Container>
        <Address variant='h4'>
          discover movies
        </Address>
        
        {
          status === 'loading' && 
          <Typography variant='h2'  className={classes.statusMSG}>
            loading...,Refresh the page if necessary.
          </Typography>
        }
        {
          status === 'success' &&          
          <Container>
            {/*  set Gennres according to type */}
            <Gennres
              type='movie'
              setPage={setPage}
              SelectedGennres={SelectedGennres}
              setSelectedGennres={setSelectedGennres}
              className={classes.gen}
            />
            {/*  set Gennres according to type */}

            <Grid container spacing={3}>
            {
              data.results.map( (index) =>{
                return(
                  <ContentTag key={index.id} result={index} type='movie' />
                )
              })
            }
            </Grid>

            {/*  set button up */}
            <Button
             color='secondary'
             variant='contained'
             className={classes.up}
             onClick={() => window.scroll(0,0)}
             >
                Up
            </Button>
            {/*  set button up */}

            {/*  set pagination */}
            {
              data.total_pages > 1 && 
              <CustomPagination count={data.total_pages} page={page} setPage={setPage} />
            }
            {/*  set pagination */}

          </Container>
          
        }
      </Container>
    );
  }
  
  export default Movies;
  