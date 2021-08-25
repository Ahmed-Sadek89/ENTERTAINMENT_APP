import styled from 'styled-components';



export const MainHeader = styled.span`
    background-color: #39445a;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    box-shadow: 0px 1px 13px #000;
    z-index: 100;
    position: fixed;
    width: 100%;
    cursor: pointer;
    @media(max-width: 576px) { // xs
        font-size: 20px;
        padding: 10px 0px;
    };
    @media(min-width: 576px) { // sm
        font-size: 40px;
        padding: 10px 0px;
    };
    @media(min-width: 768px) { // md
        font-size: 54px;
        padding: 17px 0px;
    };
    @media(min-width: 992px) { // lg
        font-size: 63px;
        padding: 10px 0px;
    };
`;