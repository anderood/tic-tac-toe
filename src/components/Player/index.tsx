import React from "react";
import { Container, Placar, Titulo } from "./styles";

interface PropsPlayer{
    title: string
    scoresPoints: number;
}

export function Player( { title, scoresPoints }: PropsPlayer){
    return(
        <Container>
            <Titulo>{title}</Titulo>
            <Placar>{scoresPoints}</Placar>
        </Container>
    );
}