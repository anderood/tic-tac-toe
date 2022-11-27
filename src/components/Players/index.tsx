import React from "react";

import { 
    Container,
    Title,
    Placar,
} from './styles';


interface PlayersProps {
    points: {
        point: number
    }
}

export function Players({ points }: PlayersProps){
    console.log(points.point)
    return(
        <>
            <Container>
                <Title>Player 1</Title>
                <Title>Player 2</Title>
            </Container>
            
            <Container>
                <Placar>{points.point}</Placar>
                <Placar>{points.point}</Placar>
            </Container>
        </>
    );
}