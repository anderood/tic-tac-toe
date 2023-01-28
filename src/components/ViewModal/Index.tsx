import React from "react";
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { Container, Section, InformationView, Title, InfoText } from "./styles";

interface ViewModalProps {
    title: string;
    information: string;
    visible: boolean
}

export function ViewModal( { title, information, visible }: ViewModalProps){
    return(
        <View>
            <Modal
                visible={true}
                animationType={'fade'}
                transparent={true}
                >
            <Container>
                <Section>
                    <InformationView>
                        <Title>{title}</Title>
                        <InfoText>{information}</InfoText>
                    </InformationView>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={{
                            width: '95%',
                            borderRadius: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'blue',
                            borderColor: '#ddd',
                            borderBottomWidth: 0,
                            borderRadius: 5,
                            bottom: 0,
                            marginBottom: 10,
                            marginTop: 10,
                        }}>
                        <Text style={{color: 'white', margin: 15}}>OK</Text>
                    </TouchableOpacity>
                </Section>
            </Container>
            </Modal>
      </View>
    );
}