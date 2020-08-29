import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Titulo } from './styles';

export default function Home() {
  return (
    <Container>
        <StatusBar style='light' />
        <Titulo>Minhas Tarefas</Titulo>
    </Container>
  );
}
