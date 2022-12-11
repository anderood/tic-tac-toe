import React, { useState } from "react";

import { Player } from "../../components/Player";
import { Button } from "../../components/Button";

import {
    Container,
    Header,
    Main,
    Footer,
} from './styles';

export function Dashboard(){

    
    const initialValues = [ { board: ["","","","","","","","","",] }]
    const InitialPlayers = [ { players: ["Jogador 1","Jogador 2"] }]
    const InitialScorePoints = [ { score: [0,0] }]

    const [ item, setItem ] = useState(initialValues);
    const [ changeplayer, setChangeplayer ] = useState(true);
    const [ players, setPlayers ] = useState(InitialPlayers);
    const [ scores, setScores ] = useState(InitialScorePoints);
    const [ scoresPlayer1, setScoresPlayer1 ] = useState(1);
    const [ scoresPlayer2, setScoresPlayer2 ] = useState(1);

    function handleTeste(idx: number){

        const newState = item[0].board.map((elem, index, arr) => {
            if(idx === index) {
                changeplayer ? arr[idx] = "X" : arr[idx] = "O";  
            } 
            return {...item[0], arr};
        });

        setItem([...newState])
        setChangeplayer(!changeplayer)
        handleCheckWinner()
    }

    function handleCheckWinner(){

        if(item[0].board[0] == "X" && item[0].board[1] == "X" && item[0].board[2] == "X" || item[0].board[0] == "O" && item[0].board[1] == "O" && item[0].board[2] == "O"){
            handleScorePoints();
            handleReset();
            setChangeplayer(true)
        }
        if(item[0].board[3] == "X" && item[0].board[4] == "X" && item[0].board[5] == "X" || item[0].board[3] == "O" && item[0].board[4] == "O" && item[0].board[5] == "O"){
            handleScorePoints();
            handleReset();
            setChangeplayer(true)
        }
        if(item[0].board[6] == "X" && item[0].board[7] == "X" && item[0].board[8] == "X" || item[0].board[6] == "O" && item[0].board[7] == "O" && item[0].board[8] == "O"){
            handleScorePoints();
            handleReset();
            setChangeplayer(true)
        }
        
        if(item[0].board[0] == "X" && item[0].board[3] == "X" && item[0].board[6] == "X" || item[0].board[0] == "O" && item[0].board[3] == "O" && item[0].board[6] == "O"){
            handleScorePoints();
            handleReset();
            setChangeplayer(true)
            
        }
        if(item[0].board[1] == "X" && item[0].board[4] == "X" && item[0].board[7] == "X" || item[0].board[1] == "O" && item[0].board[4] == "O" && item[0].board[7] == "O"){
            handleScorePoints();
            handleReset();
            setChangeplayer(true)
        }
        if(item[0].board[2] == "X" && item[0].board[5] == "X" && item[0].board[8] == "X" || item[0].board[2] == "O" && item[0].board[5] == "O" && item[0].board[8] == "O"){
            handleScorePoints();
            handleReset();
            setChangeplayer(true)
        }
        
        if(item[0].board[0] == "X" && item[0].board[4] == "X" && item[0].board[8] == "X" || item[0].board[0] == "O" && item[0].board[4] == "O" && item[0].board[8] == "O"){
            handleScorePoints();
            handleReset();
            setChangeplayer(true)
        }
        if(item[0].board[6] == "X" && item[0].board[4] == "X" && item[0].board[2] == "X" || item[0].board[6] == "O" && item[0].board[4] == "O" && item[0].board[2] == "O"){
            handleScorePoints();
            handleReset();
            setChangeplayer(true)
        }

    }

    function handleReset(){

        setItem([ {board: ["","","","","","","","","",]}])
        setChangeplayer(true)
    }

    function handleScorePoints(){

        scores[0].score.map((item, idx, arr) => {
            if(changeplayer === true){
                setScoresPlayer1(scoresPlayer1 +1)
                arr[0] = scoresPlayer1;
                alert("Player 1, Ganhou")
            }else {
                setScoresPlayer2(scoresPlayer2 +1)
                arr[1] = scoresPlayer2;
                alert("Player 2, Ganhou")
            }
        })
        
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
                    item[0].board.map( (elem, idx) => 
                        <Button 
                            key={idx} 
                            title={item[0].board[idx]} 
                            onPress={ () => handleTeste(idx)} 
                            disabled={item[0].board[idx] ? true : false}
                            />)
                        }

            </Main>
            <Footer>
                <Button 
                    title="Reset"
                    onPress={handleReset}
                    disabled={false}
                />
            </Footer>
        </Container>
    );
}