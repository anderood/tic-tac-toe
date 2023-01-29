import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { Container, Section, InformationView, Title, InfoText } from "./styles";

interface ViewModalProps {
    title: string;
    information: string;
    visible: boolean;
    handleCloseModal: ()=>void;
}

export function ViewModal( { title, information, visible, handleCloseModal }: ViewModalProps){

    const navigation = useNavigation();

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
                        onPress={ () => navigation.goBack() }
                        style={{
                            width: '45%',
                            borderRadius: 10,
                            alignItems: 'center',
                            backgroundColor: '#ffeb3b',
                            bottom: 0,
                            marginBottom: 10,
                            marginTop: 10,
                            margin: 5,
                        }}>
                        <Text style={{color: 'black', margin: 15}}>Desistir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ handleCloseModal }
                        style={{
                            width: '45%',
                            borderRadius: 10,
                            alignItems: 'center',
                            backgroundColor: '#ffeb3b',
                            bottom: 0,
                            marginBottom: 10,
                            marginTop: 10,
                            margin: 5
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