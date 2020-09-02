import React, { useState } from 'react';
import { Container, Titulo, Botao } from './styles';
import { Ionicons } from '@expo/vector-icons';


export default function ModalContent({ fechaModal }) {

    return (
        <Container>

            <Titulo>Modal Aberto :)</Titulo>
            <Botao onPress={() => fechaModal(false)}>
                <Ionicons name="ios-close" size={35} color="#fff" />
            </Botao>

        </Container>
    );
}
