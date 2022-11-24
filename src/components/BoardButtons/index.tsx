import React from "react";
import { Buttons, Title } from "./styles";

interface Props {
    item: number;
    title: string;
    onPress: (item: number) => void;
}

export function BoardButtons({ item, title, onPress }: Props ){
    return(
        <Buttons onPress={()=>onPress( item )}>
            <Title>{ title }</Title>
        </Buttons>
    );
}