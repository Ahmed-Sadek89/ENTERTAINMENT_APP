import { Container } from "@material-ui/core";
import styled from "styled-components";

export const Heading = styled.div`
    @media(max-width: 576px) { // xs
        display: flex;
        flex-direction: column;
        align-items: center;
    };
    @media(min-width: 576px) { // sm
        display: flex;
        flex-direction: column;
        align-items: center;
    };
    @media(min-width: 768px) { // md
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    };
    
`;
export const Address = styled.span`
    font-size: 30px;
    @media(max-width: 576px) {
        margin:10px 0px;
        font-size: 20px;
    };
    @media(min-width: 576px){
        margin:20px 0px
    }
`;
export const Count = styled.span`
    font-size: 20px;
    background: #848484;
    padding: 5px 10px;
    border-radius: 30px;
    @media(max-width: 576px){
        font-size: 15px;
    };
`;

export const Contents = styled(Container)`
    margin: 40px 0px;
`;
export const Index = styled.div`
    &:hover > :last-child{
        opacity: 0.8;
    };
`;
export const OverLay = styled.div`
    position: absolute;
    background: #000;
    top: 0px;
    width: 100%;
    opacity: 0;
    height: 99.5%;
    transition: all 0.5s ease;
  
`;
export const Remove = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;
export const ButtonsGroup = styled.div`
    position: absolute;
    bottom:10px;
    left:10px;
    display: flex;
`;
