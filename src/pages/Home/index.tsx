import React from "react";

import {
    Container,
    ContainerImg,
    ContainerTitle,
    Image,
    Title,
    ContainerButtons,

} from './styles';

const logo = require('../../assets/logo.jpg');
import { Button } from '../../components/Button';

export function Home({ navigation }){
    return(
        <Container>
            <ContainerImg>
                <Image source={logo}/>
            </ContainerImg>
            <ContainerTitle>
                <Title>Jogo da Velha</Title>
            </ContainerTitle>
            <ContainerButtons>
                <Button 
                    title="Iniciar"
                    onPress={ ()=> navigation.navigate('Dashboard') }
                />
                <Button 
                    title="Dois Jogadores"
                    onPress={ ()=> navigation.navigate('Dashboard', { isMulti: true }) }
                />
            </ContainerButtons>
        </Container>

    );
}