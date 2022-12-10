import React from "react";

import { Container, Title } from './styles';

interface ButtonProps{
    title: string;
    onPress: ()=>void;
    disabled: boolean
}

export function Button({ title, onPress, disabled = false }: ButtonProps){
    return(
        <Container onPress={onPress} disabled={disabled}>
            <Title>{title}</Title>
        </Container>
    );
}