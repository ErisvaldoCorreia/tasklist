import React from 'react';
import { Container, Check, Tarefa, } from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function TaskList({ data }) {
  return (
    <Container>

        <Check>
            <Ionicons name="md-checkmark-circle" color="#121212" size={30} />
        </Check>

        <Tarefa>
            {data.task}
        </Tarefa>

    </Container>
  );
}
