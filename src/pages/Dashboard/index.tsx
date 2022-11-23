import React from "react";
import { BoardButtons } from "../../components/BoardButtons";
import { Button } from "../../components/Button";
import { Players } from "../../components/Players";



import {
    Container,
    Header,
    Main,
    Footer,
   

} from './styles';

export function Dashboard(){
    return(
        <Container>
            <Header>
                <Players />
            </Header>
            <Main>
                <BoardButtons />
                <BoardButtons />
                <BoardButtons />
                <BoardButtons />
                <BoardButtons />
                <BoardButtons />
                <BoardButtons />
                <BoardButtons />
                <BoardButtons />
            </Main>
            <Footer>
                <Button></Button>
            </Footer>
        </Container>
    );
}