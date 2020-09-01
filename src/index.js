import React from 'react';
import { Container, Titulo, BotaoAdd } from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <Container>
      
      <Titulo>TaskList</Titulo>

      <BotaoAdd>
          <Ionicons name="ios-add" size={35} color="#fff" />
      </BotaoAdd>
      
    </Container>
  );
}
