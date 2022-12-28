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

    const [ board, setBoard ] = useState(Array(9).fill(""));
    const [ changeplayer, setChangeplayer ] = useState(true);
    const [ players, setPlayers ] = useState(InitialPlayers);
    const [ scores, setScores ] = useState([0,0]);
    const [ scoresPlayer1, setScoresPlayer1 ] = useState(1);
    const [ scoresPlayer2, setScoresPlayer2 ] = useState(1);
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        handleCheckWinner()
        handlePlayCPU();
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

        console.log(changeplayer)

        winner.forEach((elem, idx) => {
            const [x,y,z] = winner[idx];

            if(board[x] && board[x] === board[y] && board[y] === board[z] && board[z]){
                !changeplayer ? setScoresPlayer1( scoresPlayer1 => scoresPlayer1 +1) : setScoresPlayer2( scoresPlayer2 => scoresPlayer2 +1)
                console.log({ setScoresPlayer1: scoresPlayer1 })
                console.log({ setScoresPlayer2: scoresPlayer2 })
                return alert('Winner')
            }
        })

        setCount( count => count +1);

        if( count === 10 && checkBoard){
            alert('empate');
        }

    }

    const checkBoard = () => {
        return(

            board.map((elem) => {
                if(elem != ""){
                    return true;
                }
            })
        )
    }

    function handlePlayCPU(){

        const positions = [];
        
        board.map((elem, index) => {
            if(elem === ""){
                positions.push(index);
            }
        });
       

        const choseOption = positions[Math.floor(Math.random() * positions.length)];
        
        if(changeplayer == false){
            const upBoard = [...board];
            upBoard[choseOption] = "O";
            setBoard(upBoard);
            setChangeplayer(true)
        }

    }

    function handleReset(){

        setBoard(Array(9).fill(""))
        setChangeplayer(true)
        setCount(0)
    }
      
    
    return(
        <Container>
            <Header>
                {
                    players[0].players.map((player, idx) => 
                        <Player 
                            key={idx}
                            title={players[0].players[idx]}
                            scoresPoints={scores[idx]}
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
                    onPress={handleReset}
                />
            </Footer>
        </Container>
    );
}