import React from "react";

import {
    Container,
    ContainerImg,
    Image,
    Title,
    ContainerButtons,

} from './styles';

const logo = require('../../assets/logo.jpg');

export function Home(){
    return(
        <Container>
            <ContainerImg>
                <Image source={logo}/>
                <Title>Jogo da Velha</Title>
            </ContainerImg>
            <ContainerButtons>
            </ContainerButtons>
        </Container>

    );
}