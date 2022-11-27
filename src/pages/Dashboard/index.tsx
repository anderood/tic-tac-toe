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

    
    const initialPoints = [1,0]
    const initialValues = [
        {
            board: ["","","","","","","","","",],
        }
    ]

    const [ item, setItem ] = useState(initialValues);
    const [ status, setStatus ] = useState(true);
    const [ points, setPoints ] = useState(initialPoints);

    function handleTeste(idx: number){
        
        const newState = item[0].board.map((elem, index, arr) => {
            if(idx === index) {
                status ? arr[idx] = "X" : arr[idx] = "O";  
            } 
            return {...item[0], arr};
        });

        handleCheckWinner()
        setItem([...newState])
        setStatus(!status)
    }

    function handleCheckWinner(){

        // Primeira, segunda e terceira Coluna
        if(item[0].board[0] == "X" && item[0].board[1] == "X" && item[0].board[2] == "X" || item[0].board[0] == "O" && item[0].board[1] == "O" && item[0].board[2] == "O"){
            status == true ? alert('Player 1 ganhou') : alert('Player 2 ganhou')
        }
        if(item[0].board[3] == "X" && item[0].board[4] == "X" && item[0].board[5] == "X" || item[0].board[3] == "O" && item[0].board[4] == "O" && item[0].board[5] == "O"){
            status == true ? alert('Player 1 ganhou') : alert('Player 2 ganhou')
        }
        if(item[0].board[6] == "X" && item[0].board[7] == "X" && item[0].board[8] == "X" || item[0].board[6] == "O" && item[0].board[7] == "O" && item[0].board[8] == "O"){
            status == true ? alert('Player 1 ganhou') : alert('Player 2 ganhou')
        }
        
        // Primeira SEgunda e Terceira Linha
        if(item[0].board[0] == "X" && item[0].board[3] == "X" && item[0].board[6] == "X" || item[0].board[0] == "O" && item[0].board[3] == "O" && item[0].board[6] == "O"){
            status == true ? alert('Player 1 ganhou') : alert('Player 2 ganhou')
            
        }
        if(item[0].board[1] == "X" && item[0].board[4] == "X" && item[0].board[7] == "X" || item[0].board[1] == "O" && item[0].board[4] == "O" && item[0].board[7] == "O"){
            status == true ? alert('Player 1 ganhou') : alert('Player 2 ganhou')
        }
        if(item[0].board[2] == "X" && item[0].board[5] == "X" && item[0].board[8] == "X" || item[0].board[2] == "O" && item[0].board[5] == "O" && item[0].board[8] == "O"){
            status == true ? alert('Player 1 ganhou') : alert('Player 2 ganhou')
        }
        
        // 
        if(item[0].board[0] == "X" && item[0].board[4] == "X" && item[0].board[8] == "X" || item[0].board[0] == "O" && item[0].board[4] == "O" && item[0].board[8] == "O"){
            status == true ? alert('Player 1 ganhou') : alert('Player 2 ganhou')
        }
        if(item[0].board[6] == "X" && item[0].board[4] == "X" && item[0].board[2] == "X" || item[0].board[6] == "O" && item[0].board[4] == "O" && item[0].board[2] == "O"){
            status == true ? alert('Player 1 ganhou') : alert('Player 2 ganhou')
        }

    }


    function handleReset(){

        setItem([ {board: ["","","","","","","","","",]}])
        setStatus(true)
    }
    
    return(
        <Container>
            <Header>
                {
                    points.map(point => (<Players points={point} />))
                }
            </Header>
            {/* <Main>
                {
                    item[0].board.map( (elem, idx) => 
                        <Button 
                            key={idx} 
                            title={item[0].board[idx]} 
                            onPress={ () => handleTeste(idx)} 
                        />)
                }

            </Main> */}
            <Footer>
                <Button 
                    title="Reset"
                    onPress={handleReset}
                />
            </Footer>
        </Container>
    );
}