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
import SelectedGenn from '../../Components/SelectedGenn/SelectedGenn';
// tools
import { useQuery } from "react-query";
import { useState } from 'react';
// styles
import {Address} from './Styles';
import {useStyles} from './Styles'


const Movies = (props) => {
  const classes = useStyles()
  const [page, setPage] = useState(1);
  // for gennres
  const [gennres, setGennres] = useState([]);
  //
  // for routing 
  const pageMoviesNumber = parseInt(props.match.params.page);
  const moviesPath = props.match.path === '/movies/:page/:genURL' ? true : false;
  const genURLMovies = props.match.params.genURL === '0' ? '' : props.match.params.genURL;
  // for insure that gennrus is empty or not
    const checkEmptyGenn = props.match.params.genURL === '0' ? true : false  
  //
  const {data, status} = useQuery(['fetchMovies', pageMoviesNumber, genURLMovies], () => fetchMovies(pageMoviesNumber, genURLMovies),
  {
  keepPreviousData: true,
  cacheTime: 100 // time to get fetching
  })
  //
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
              className={classes.gen}
              genURLMovies={genURLMovies}
              gennres={gennres} 
              setGennres={setGennres}
            />
           { 
            checkEmptyGenn !==true &&
            <>
              <h1 style={{margin:'0px', marginBottom:'3px'}}>selected Gennres</h1>
              <SelectedGenn
                type='movie'
                page={page}
                setPage={setPage}
                className={classes.gen}
                gennres={gennres} 
                setGennres={setGennres}
              />
            </>
            }
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
              <CustomPagination
               count={data.total_pages}
               page={page}
               setPage={setPage}
               pageMoviesNumber={pageMoviesNumber}
               moviesPath={moviesPath}
               genURLMovies={genURLMovies}
               />
            }
            {/*  set pagination */}

          </Container>
          
        }
      </Container>
    );
  }
  
  export default Movies;