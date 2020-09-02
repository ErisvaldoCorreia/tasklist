import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Titulo, BotaoAdd } from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {

    const [task, setTask] = useState([
        { key: 1, task: 'Tarefa Teste'},
        { key: 2, task: 'Tarefa Teste'},
        { key: 3, task: 'Tarefa Teste'},
    ]);

  return (
    <Container>
      
      <Titulo>TaskList</Titulo>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={ (item) => String(item.key) }
        renderItem={ ({item}) => <TaskList data={item} /> }
      />

      <BotaoAdd>
          <Ionicons name="ios-add" size={35} color="#fff" />
      </BotaoAdd>

    </Container>
  );
}
