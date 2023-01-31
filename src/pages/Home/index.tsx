import React, { useState } from "react";
import { Alert } from 'react-native';

import {
    Container,
    ContainerImg,
    ContainerTitle,
    Image,
    Title,
    ContainerButtons,
    Footer, 
    Text

} from './styles';

const logo = require('../../assets/logo.jpg');
import { Button } from '../../components/Button';

export function Home({ navigation }){

    const onPressTitle = () => {
        Alert.alert( 'Autor: Anderson Santos', "Agradeço primeiramente a Deus pelo o privilegio, e também minha familia pelo o apoio e incentivo.")
    }

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
            <Footer>
                <Text onPress={onPressTitle}>Versão 1.0</Text>
            </Footer>
        </Container>

    );
}