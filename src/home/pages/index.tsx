import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTaskList} from '../../context/TasksContex';
import {TaskList} from '../components/TaskList';
import {stylesHome} from './styles';

export const Home = () => {
  const [newTask, setNewTask] = useState('');
  const {addTask} = useTaskList();

  const handleAddNewTask = () => {
    const data = {
      id: new Date().getTime().toString(),
      title: newTask ? newTask : 'Task empty',
    };
    addTask(data);
  };

  return (
    <SafeAreaView style={stylesHome.safeArea}>
      <View style={stylesHome.container}>
        <Text style={stylesHome.title}>Oá dev!</Text>
        <TextInput
          onChangeText={setNewTask}
          placeholderTextColor="#555"
          placeholder="Nova Tarefa ..."
          style={stylesHome.input}
        />
        <TouchableOpacity
          testID="addButton"
          style={stylesHome.button}
          activeOpacity={0.7}
          onPress={handleAddNewTask}>
          <Text style={stylesHome.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={stylesHome.titleTasks}>Minhas Tarefas</Text>
        <TaskList />
      </View>
    </SafeAreaView>
  );
};
