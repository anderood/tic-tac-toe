import React, { useEffect, useState } from "react";

import { Player } from "../../components/Player";
import { ButtonBoard } from "../../components/ButtonBoard";
import { Button } from "../../components/Button";

import {
    Container,
    Header,
    Main,
    Footer,
} from './styles';

export function Dashboard(){

    
    const InitialPlayers = [ { players: ["Jogador 1","Jogador 2"] }]
    const InitialScorePoints = [ { score: [0,0] }]

    const [ board, setBoard ] = useState(Array(9).fill(""));
    const [ changeplayer, setChangeplayer ] = useState(true);
    const [ players, setPlayers ] = useState(InitialPlayers);
    const [ scores, setScores ] = useState(InitialScorePoints);
    const [ scoresPlayer1, setScoresPlayer1 ] = useState(1);
    const [ scoresPlayer2, setScoresPlayer2 ] = useState(1);
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        handleCheckWinner() 
        handlePlayCPU()
    }, [board])

    const winner = [
        [0,1,2],
        [3,4,5],
        [6,7,8], 
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ];

    function handleFillBoard(idx){
        
        const upBoard = [...board];
        upBoard[idx] = "X";
        setChangeplayer(!changeplayer)
        setBoard(upBoard);
    }

    function handleCheckWinner(){

        for (let i = 0; i < winner.length; i++) {
            const [x, y, z] = winner[i];

            if(board[x] && board[x] === board[y] && board[y] === board[z] && board[z]){
                alert('Winner')
            }
            
        }
    }

    function handlePlayCPU(){
        const pos = getRandomIntInclusive(0,8);

        if(changeplayer == false){

            const newBoard = [...board];
    
            newBoard[pos] == "" ? newBoard[pos]="O" : handleChekBoard();
            setChangeplayer(!changeplayer)
            setBoard(newBoard)
        }

    }

    function handleChekBoard(){


       board.forEach((elem) => {
           if(elem == ""){
               setCount((prevCount) => prevCount +1)
           }
       })

        if(count > 1){
            handlePlayCPU();
        }
        
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
      
      
    
    return(
        <Container>
            <Header>
                {
                    players[0].players.map((player, idx) => 
                        <Player 
                            key={idx}
                            title={players[0].players[idx]}
                            scoresPoints={scores[0].score[idx]}
                        />)
                }
            </Header>
            <Main>
                {
                    board.map( (elem, idx) => 
                        <ButtonBoard 
                            key={idx} 
                            title={board[idx]} 
                            onPress={ () => handleFillBoard(idx)} 
                            disabled={board[idx] ? true : false}
                        />)
                }

            </Main>
            <Footer>
                <Button 
                    title="Reset"
                    disabled={false}
                />
            </Footer>
        </Container>
    );
}