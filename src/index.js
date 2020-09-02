import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Titulo, BotaoAdd } from './styles';
import { Ionicons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';
import TaskList from './TaskList';

export default function Home() {

    const [task, setTask] = useState([
        { key: 1, task: 'Tarefa Teste'},
        { key: 2, task: 'Tarefa Teste'},
        { key: 3, task: 'Tarefa Teste'},
        { key: 4, task: 'Tarefa Teste'},
    ]);

  return (
    <Container>
      
      <Titulo>TaskList</Titulo>

      <FlatList
        marginHorizontal={15}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={ (item) => String(item.key) }
        renderItem={ ({item}) => <TaskList data={item} /> }
      />

    <Animatable.View 
        useNativeDriver
        animation="bounceInUp"
        duration={1200}
    >
      <BotaoAdd>
          <Ionicons name="ios-add" size={35} color="#fff" />
      </BotaoAdd>
    </Animatable.View>


    </Container>
  );
}
