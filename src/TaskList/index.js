import React from 'react';
import { Container, Check, Tarefa, } from './styles';
import { Ionicons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';

export default function TaskList({ data }) {
  return (
    <Animatable.View 
        animation="fadeInDown"
        duration={1500}
        useNativeDriver
    >
        <Container>

        <Check>
            <Ionicons name="md-checkmark-circle" color="#121212" size={30} />
        </Check>

        <Tarefa>
            {data.task}
        </Tarefa>

        </Container>
    </Animatable.View>
  );
}
