import React from 'react';
import { View, Text } from 'react-native';
import { Container, Check, Tarefa, } from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function TaskList() {
  return (
    <Container>
        <Check>
            <Ionicons name="md-checkmark-circle" color="#121212" size={30} />
        </Check>
        <Tarefa>
            teste
        </Tarefa>
    </Container>
  );
}
