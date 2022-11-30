import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #DDD;
    justify-content: center;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    height: 100px;
    border-width: 2px;
    border-radius: 5px;
`;

export const Main = styled.View`
    height: 400px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`;
export const Footer = styled.View`
    height: 80px;
    justify-content: center;
    align-items: center;
`;

