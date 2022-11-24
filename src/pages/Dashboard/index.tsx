import React, { useState } from "react";
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

    const initialValues = {
        content: {
            board: ["","","","","","","","","",],
            player: ["X", "O"],
            isDisabled: true
        }
    }

    const [ item, setItem ] = useState(initialValues);

    function handlePressButtons(idx: number){
        console.log(idx)
    }
    
    return(
        <Container>
            <Header>
                <Players />
            </Header>
            <Main>
                {
                    item.content.board.map((item, idx) => (
                        <BoardButtons 
                            key={idx}
                            item={idx}
                            title={"X"}
                            onPress={()=>handlePressButtons(idx)}
                        />
                    ))
                }
            </Main>
            <Footer>
                <Button title={"Reset"}></Button>
            </Footer>
        </Container>
    );
}