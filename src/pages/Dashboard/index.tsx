import React, { useState } from "react";
import { Players } from "../../components/Players";

import { Button } from "../../components/Button";



import {
    Container,
    Header,
    Main,
    Footer,
} from './styles';
import { ContainerButtons } from "../Home/styles";

export function Dashboard(){

    
    const initialValues = [
        {
            board: ["","","","","","","","","",],
        }
    ]

    const [ item, setItem ] = useState(initialValues);
    const [ status, setStatus ] = useState(true);

    function handleTeste(idx: number){
        
        const newState = item[0].board.map((elem, index, arr) => {
            if(idx === index) {
                status ? arr[idx] = "X" : arr[idx] = "O";  
            } 
            return {...item[0], arr};
        });

        setItem([...newState])
        setStatus(!status)
    }

    function handleReset(){

        const nextReset = item[0].board.map((elem, i, arr) => {
            return arr;
        })

        setItem(nextReset => [...nextReset])
    }
    
    return(
        <Container>
            <Header>
                <Players />
            </Header>
            <Main>
                {
                    item[0].board.map( (elem, idx) => 
                        <Button 
                            key={idx} 
                            title={item[0].board[idx]} 
                            onPress={ () => handleTeste(idx)} 
                        />)
                }

            </Main>
            <Footer>
                <Button 
                    title="Reset"
                    onPress={handleReset}
                />
            </Footer>
        </Container>
    );
}