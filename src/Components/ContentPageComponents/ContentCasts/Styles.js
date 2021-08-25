import styled from 'styled-components';
import {Grid, makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => {
    return{
        statusMSG:{
            textAlign:'center',
            fontSize:'30px'
        },
        
    }
});
export const SetFlex = styled(Grid)`
    display: flex;
    flex-direction: column;
    line-height: 1;
`;
export const Overview = styled(Grid)`
    box-shadow: 1px 1px 3px 2px inset #848484;
    border: 1px solid #848484;
    padding: 25px;
    overflow: auto;
    border-radius: 20px;
    @media(max-width: 576px) {
        height: 180px;
    };
    @media(min-width: 576px) {
        height: 260px;
    };
    @media(min-width: 768px) { // md
        height: 220px;
    };
    @media(min-width: 992px) { // lg
        height: 500px;
    };
`;
export const ForImg = styled.div`
    overflow: hidden;
    border-radius: 50px;
`;
export const Img = styled.img`
 
    @media(max-width: 576px) {
        width: 100%;
        height: 100%;
    };
    @media(min-width: 576px) {
        width: 100%;
        height: 100%;
    };
    @media(min-width: 768px) { // md
        width: 80%;
        height: 80%;
    };
    @media(min-width: 992px) { // lg
        width: 100%;
        height: 100%;
    };
`;
export const Name = styled.p`
    margin: 0px;
    margin: 12px 0px;
    margin-bottom: 6px;
`;