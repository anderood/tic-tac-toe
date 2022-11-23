import React from "react";
import { Button } from "../../components/Button";


import {
    Container,
    Header,
    Main,
    Footer,
    Player,
    Placar,

} from './styles';

export function Dashboard(){
    return(
        <Container>
            <Header>
                <Player>Jogo1</Player>
                <Player>Jogo2</Player>
                <Placar>Placar1</Placar>
                <Placar>Placar2</Placar>
            </Header>
            <Main>
                
            </Main>
            <Footer>
                <Button></Button>
            </Footer>
        </Container>
    );
}