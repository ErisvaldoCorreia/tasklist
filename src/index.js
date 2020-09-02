import React, { useState } from 'react';
import { FlatList, Modal } from 'react-native';
import { Container, Titulo, Botao } from './styles';
import { Ionicons } from '@expo/vector-icons';
import TaskList from './TaskList';

export default function Home() {

    const [task, setTask] = useState([
        { key: 1, task: 'Tarefa Teste'},
        { key: 2, task: 'Tarefa Teste'},
        { key: 3, task: 'Tarefa Teste'},
        { key: 4, task: 'Tarefa Teste'},
    ]);
    const [open, setOpen] = useState(false);

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

      <Modal 
        animationType="slide" 
        transparent={false} 
        visible={open} 
      >
          <Container>
              <Titulo>Modal Aberto :)</Titulo>
              <Botao onPress={() => setOpen(false)}>
                <Ionicons name="ios-close" size={35} color="#fff" />
              </Botao>
          </Container>
      </Modal>

        <Botao animation="bounceInUp" useNativeDriver duration={1200} onPress={() => setOpen(true)}>
            <Ionicons name="ios-add" size={35} color="#fff" />
        </Botao>

    </Container>
  );
}
