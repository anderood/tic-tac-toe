import React from "react";

import { Container, Title } from './styles';

interface ButtonBoardProps{
    title: string;
    onPress: ()=>void;
    disabled: boolean
}

export function ButtonBoard({ title, onPress, disabled = false }: ButtonBoardProps){
    return(
        <Container onPress={onPress} disabled={disabled}>
            <Title>{title}</Title>
        </Container>
    );
}