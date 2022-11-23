import React from "react";

import { 
    Container,
    Title,
    Placar,
} from './styles';

export function Players(){
    return(
        <>
            <Container>
                <Title>Player 1</Title>
                <Title>Player 2</Title>
            </Container>
            
            <Container>
                <Placar>0</Placar>
                <Placar>0</Placar>
            </Container>
        </>
    );
}