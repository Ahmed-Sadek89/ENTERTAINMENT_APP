import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const useStyles = makeStyles(() =>{
    return{
        content: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '140px auto'
        },
        Buttons: {
            margin: '0px 20px'
        },
        Icons: {
            fontSize: '50px',
            color: '#2d313a'
        }
    }
});

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 40px;
`;