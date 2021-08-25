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
export const Overlay = styled.div`
    overflow: hidden;
    border-radius: 20px;
`;
export const Img = styled.img`
    width: 100%;
    height: 50%;
`;
export const LineHeight = styled(Grid)`
    line-height: 2;
`;
export const Name = styled(Grid)`
    font-size: 30px;
    line-height: 1;
    font-weight: bold;
    padding-bottom: 20px;
    text-align: center;
`;
export const Tagline = styled(Grid)`
    text-align: center;
    padding-bottom: 20px;
    font-weight: bold;
    font-style: italic;
`;
export const Overview = styled(Grid)`
    box-shadow: 1px 1px 3px 2px inset #848484;
    border: 1px solid #848484;
    padding: 10px;
    height: 130px;
    overflow: auto;
    border-radius: 20px;
    font-size: 15px;
`;