import {makeStyles,createTheme} from '@material-ui/core';

export const theme = createTheme({
    palette:{
      primary: {
        main: '#fff',
      },
      text:{
        primary: '#fff'
      }
    }
})

export const useStyles = makeStyles(() => {
    return{
        statusMSG:{
            textAlign:'center',
            fontSize:'30px'
        },
        Pagination: {
            margin:'20px 0px'
        },
        
        up:{
            position: 'fixed',
            bottom: '82px',
            right: '10px',
            borderRadius: '100px',
            transition: 'all 0.5s ease-in-out',
            '&:hover': {
                backgroundColor:'rgb(63, 81, 181)'
            }
        }
    }
});

