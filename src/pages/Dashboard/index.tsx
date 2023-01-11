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

    // const [ board, setBoard ] = useState(["O","O","","X","","","X","",""]);
    const [ board, setBoard ] = useState(Array(9).fill(''));
    const [ changeplayer, setChangeplayer ] = useState(true);
    const [ players, setPlayers ] = useState(InitialPlayers);
    const [ scores, setScores ] = useState([0,0]);
    const [ scoresPlayer1, setScoresPlayer1 ] = useState(1);
    const [ scoresPlayer2, setScoresPlayer2 ] = useState(1);

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

    useEffect(() => {

        handleChangePlayer();
       
    }, [board]);

    function handleClickButton(idx){
        
        if(checkWin()){
            return;
        }else {
            if(changeplayer){
                const upBoard = [...board];
                upBoard[idx] = "X";
                setBoard(upBoard);
                setChangeplayer(false)
            }
            
            
        }
    }

    function handleChangePlayer(){
        if(checkWin()){
            return;
        }else {
            if(changeplayer === false){

                const pos = [];
                    
                    board.map((elem, index) => {
                        if(elem === ""){
                            pos.push(index);
                        }
                    })
                    const choseOption = pos[Math.floor(Math.random() * pos.length)];
    
                    const upBoard = [...board];
                    upBoard[choseOption] = "O";
                    setBoard(upBoard);
                    setChangeplayer(true)
            }
        }
    }

    const checkWin = () => {

        for (let i = 0; i < winner.length; i++) {
            const [x, y, z] = winner[i];

            if( board[x] && board[x] === board[y] && board[y] === board[z] ){
                !changeplayer ? setScoresPlayer1(scoresPlayer1 +1) : setScoresPlayer2(scoresPlayer2 +1)
                return true
            }
        }

        return false;
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
                            onPress={ () => handleClickButton(idx)} 
                            disabled={board[idx] ? true : false}
                        />)
                }

            </Main>
            <Footer>
                {/* <Button 
                    title="Reset"
                    disabled={false}
                    // onPress={handleReset}
                /> */}
            </Footer>
        </Container>
    );
}