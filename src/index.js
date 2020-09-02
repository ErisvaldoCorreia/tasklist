import React, { useState } from 'react';
import { FlatList, Modal } from 'react-native';
import { Container, Titulo, Botao, Header, Theme } from './styles';
import { Ionicons, Feather } from '@expo/vector-icons';
import TaskList from './TaskList';
import ModalContent from './ModalContent';

export default function Home() {

  const [task, setTask] = useState([
    { key: 1, task: 'Primeira Tarefa Teste' },
    { key: 2, task: 'Segunda Tarefa Teste' },
    { key: 3, task: 'Terceira Tarefa Teste' },
    { key: 4, task: 'Quarta Tarefa Teste' },
    { key: 5, task: 'Primeira Tarefa Teste' },
  ]);
  const [open, setOpen] = useState(false);

  return (
    <Container>

      <Header>
        <Titulo>Task List</Titulo>
        <Theme>
          <Feather name="moon" size={22} color="#fff" />
        </Theme>
      </Header>


      <FlatList
        marginHorizontal={15}
        showsVerticalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => <TaskList data={item} />}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={open}
      >
        <ModalContent fechaModal={(open) => setOpen(open)} />
      </Modal>

      <Botao
        animation="bounceInUp"
        useNativeDriver
        duration={1200}
        onPress={() => setOpen(true)}
      >
        <Ionicons name="ios-add" size={40} color="#fff" />
      </Botao>

    </Container>
  );
}
