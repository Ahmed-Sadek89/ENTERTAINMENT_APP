import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export const StyledGrid = styled(Grid)`
    position:relative;
`;

export const Overlay = styled.div`
    background: #2d313a;
    overflow: hidden;
    padding: 20px 10px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover{
        background-color: #fff;
        color:#2d313a
    };
    @media(min-width: 768px) { // md
        height: 90%;
    };
`;
export const Img = styled.img`
    height: 80%;
`; 
export const Vote = styled(Typography)`
    padding: 7px;
    font-weight: bolder;
    border-radius: 100%;
    position: absolute;
    right: 0px;
    top: 0px;
    width: 6%;
    text-align: center;
`;
export const Title = styled.div`
    text-align: center;
    font-weight: bolder;
    padding: 5px 0px;
`;
export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
`;
// primary: #3f51b5
// secondary: #f50057