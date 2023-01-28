import React from "react";
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { Container, Section, InformationView, Title, InfoText } from "./styles";

interface ViewModalProps {
    title: string;
    information: string;
    visible: boolean;
    handleCloseModal: ()=>void;
}

export function ViewModal( { title, information, visible, handleCloseModal }: ViewModalProps){

    return(
        <View>
            <Modal
                visible={visible}
                animationType={'fade'}
                transparent={true}
                >
            <Container>
                <Section>
                    <InformationView>
                        <Title>{title}</Title>
                        <InfoText>{information}</InfoText>
                    </InformationView>
                    <View style={{flexDirection: "row"}}>

                    <TouchableOpacity
                        // activeOpacity={0.9}
                        style={{
                            width: '45%',
                            borderRadius: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#ffeb3b',
                            // borderColor: '#ddd',
                            borderBottomWidth: 0,
                            // borderRadius: 5,
                            bottom: 0,
                            marginBottom: 10,
                            margin: 10,
                        }}>
                        <Text style={{color: 'black', margin: 15}}>Desistir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        // activeOpacity={0.9}
                        onPress={ handleCloseModal }
                        style={{
                            width: '45%',
                            borderRadius: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#ffeb3b',
                            borderBottomWidth: 0,
                            // borderRadius: 5,
                            bottom: 0,
                            marginBottom: 10,
                            marginTop: 10,
                        }}>
                        <Text style={{color: 'black', margin: 15}}>Jogar de Novo</Text>
                    </TouchableOpacity>
                    </View>
                </Section>
            </Container>
            </Modal>
      </View>
    );
}