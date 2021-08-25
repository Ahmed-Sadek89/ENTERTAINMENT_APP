//material-ui
import { Grid, TextField, Typography, Button, Tabs, Tab } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core';
//tools
import {useState} from 'react';
import {useQuery} from 'react-query';
//components
import {fetchSearch} from '../../Components/API/API';
import ContentTag from '../../Components/ContentTag/ContentTag';
import CustomPagination from '../../Components/CustomPagination/CustomPagination';
//styles
import {useStyles} from './Styles'
import {theme} from './Styles'

//fetchSearch = async (type, searchText, page)

const Search = () => {
  const classes = useStyles();
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const {data, status} = useQuery(
    ['fetchSearch', type, searchText, page ],
    () => fetchSearch(type, searchText, page),{
      keepPreviousData: true,
      cacheTime:500
    }
  );
  const handleChange = (e, value) =>{
    setPage(1)
    setType(value)
  }
  console.log(data)

    return (
      <Container>
        <ThemeProvider theme={theme} >
            <TextField fullWidth label="Search" variant="filled" onChange={(e) => {setSearchText(e.target.value) ; setPage(1)}}/> 
            <Tabs value={type} onChange={handleChange} textColor="primary" indicatorColor="primary" style={{marginBottom: '20px'}} >
              <Tab label="movie" />
              <Tab label="tv series" />
            </Tabs>
        </ThemeProvider>
        {
          status === 'loading' &&
          <Typography variant='h2'  className={classes.statusMSG}>
            loading...,Refresh the page if necessary.
          </Typography>
        }
        {
          status === 'success' &&          
            searchText !== '' &&
            data.total_results === 0 &&
              <Typography variant='h2'color='secondary' style={{textAlign:'center'}}>
                Not Found !
              </Typography>
        }
        {
          status === 'success' &&          
            searchText !== '' &&
            data.results &&
            <Container>
              <Grid container spacing={3}>
              {
                
                data.results.map( (index) =>{
                  return(
                    <ContentTag key={index.id} result={index} type={type ? "tv" : "movie"} />
                  )
                })
              }
              </Grid>

              {/*  set button up */}
              {
              data.total_results > 2 && 
              <Button
              color='secondary'
              variant='contained'
              className={classes.up}
              onClick={() => window.scroll(0,0)}
              >
                  Up
              </Button>
              }
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
  
  export default Search;
  