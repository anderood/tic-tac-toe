import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Player } from "../../components/Player";
import { ButtonBoard } from "../../components/ButtonBoard";

import {
    Container,
    Header,
    Main,
} from './styles';
import { ViewModal } from "../../components/ViewModal/Index";

export function Dashboard(){

    const navigation = useNavigation();
    const InitialPlayers = [ { players: ["Jogador 1","Jogador 2"] }]

    // const [ board, setBoard ] = useState(["O","O","X","X","","O","O","",""]);
    const [ board, setBoard ] = useState(Array(9).fill(''));
    const [ changeplayer, setChangeplayer ] = useState(true);
    const [ players, setPlayers ] = useState(InitialPlayers);
    const [ scores, setScores ] = useState([0,0]);
    const [ isOpenWin, SetIsOpenWin ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);
    const [ isMultPlayer, setIsMultiPlayer ] = useState(false);

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

    const { routes } = navigation.getState();


    useEffect(() => {
        routes[1].params ? handleMultiPlayer() : ''
        
    }, []);
    
    useEffect(() => {

        handleChangePlayer();
       
    }, [board]);

    function handlePressButton(idx: number){
        
        if(checkWin()){
            return;
        }else {
            if(isMultPlayer){

                const upBoard = [...board];
                upBoard[idx] = changeplayer ? "X": "O";
                setBoard(upBoard);
                setChangeplayer(!changeplayer)

            }else {

                if(changeplayer){
                    const upBoard = [...board];
                    upBoard[idx] = "X";
                    setBoard(upBoard);
                    setChangeplayer(false)
                }
            }
        }
    }

    function handleChangePlayer(){

        if(checkWin() || checkBoard()){
            return;
        }else {

            if(isMultPlayer){
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
    }

    const checkWin = () => {

        for (let i = 0; i < winner.length; i++) {
            const [x, y, z] = winner[i];

            if( board[x] && board[x] === board[y] && board[y] === board[z] ){
                
                const changeScores = [...scores];

                changeScores[Number(changeplayer)] +=1;

                setScores(changeScores)
                SetIsOpenWin(true)

                return true
            }
        }

        return false;
    }

    const checkBoard = () => {
        const pos = [];
                        
        board.map((elem, index) => {
            if(elem === ""){
                pos.push(index);
            }
        })

        if(pos.length === 0){
            setIsOpen(true)
            return true;
        }else{
            return false;
        }

    }

    function handleCloseModal(){
        setIsOpen(false)
        SetIsOpenWin(false)
        setBoard(Array(9).fill(''));
        setChangeplayer(true)
    }

    function handleMultiPlayer(){
        setIsMultiPlayer(true);
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
                            onPress={ () => handlePressButton(idx)} 
                            disabled={board[idx] ? true : false}
                        />)
                }

            </Main>
            <ViewModal 
                title="Vencedor!" 
                information={ !changeplayer ? 'Ponto para Jogador 1' : 'Ponto para Jogador 2'} 
                visible={isOpenWin} 
                handleCloseModal={handleCloseModal}
            />
            <ViewModal 
                title="Atenção!" 
                information={ 'Empate Tecnico'} 
                visible={isOpen} 
                handleCloseModal={handleCloseModal}
            />
            
        </Container>
    );
}