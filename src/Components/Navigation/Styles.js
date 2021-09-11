import {makeStyles} from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import styled from 'styled-components'

export const useStyles = makeStyles((theme) =>{
    return {
        nav:{
            background: '#2d313a',
        },
        action:{
            color: '#fff',
            lineHeight: '29px',
            margin: '-10px'
        }
    }
})

export const Nav = styled(BottomNavigation)`
   
    padding-top: 10px;
    position: fixed;
    bottom: 0px;
    width: 100%;
`;