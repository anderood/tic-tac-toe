import React, { useState } from "react";

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

    
    const initialValues = [ { board: ["","","","","","","","","",] }]
    const InitialPlayers = [ { players: ["Jogador 1","Jogador 2"] }]
    const InitialScorePoints = [ { score: [0,0] }]

    const [ item, setItem ] = useState(initialValues);
    const [ changeplayer, setChangeplayer ] = useState(true);
    const [ players, setPlayers ] = useState(InitialPlayers);
    const [ scores, setScores ] = useState(InitialScorePoints);
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

    function handleCheckPlayer(idx: number){

        const newState = item[0].board.map((elem, index, arr) => {
            if(idx === index) {
                changeplayer ? arr[idx] = "X" : arr[idx] = "O";  
            } 
            return {...item[0], arr};
        });

        setItem([...newState])
        setChangeplayer(!changeplayer)
        handleCheckWinner();
        handleBoardFull();
        
    }

    function handleCheckWinner(){

        for (let i = 0; i < winner.length; i++) {
            const [x, y, z] = winner[i];
            
            if(item[0].board[x] && item[0].board[x] === item[0].board[y] && item[0].board[y] === item[0].board[z] ){
                handleScorePoints();
                handleReset();
                return item[0].board[x];
            }
            
        }
    }

    function handleBoardFull(){
        let checkTied = true;

        item[0].board.forEach((item) => {
            if(item == ""){
                checkTied = false;
            }
        })

        if(checkTied){
            alert('empate')
            handleReset();
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
                        <ButtonBoard 
                            key={idx} 
                            title={item[0].board[idx]} 
                            onPress={ () => handleCheckPlayer(idx)} 
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