import {makeStyles} from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles((theme) => {
    return{
        chip:{
            margin:'3px',
            marginBottom:'10px'
        },
        
    }
});

export const SelectedChips = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`