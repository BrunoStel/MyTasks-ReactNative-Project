import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {stylesHome} from './styles';

interface Task {
  id: string;
  title: string;
}

export const Home = () => {
  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleAddNewTask = () => {
    const data = {
      id: new Date().getTime().toString(),
      title: newTask ? newTask : 'Task empty',
    };

    setTaskList([...taskList, data]);
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
          style={stylesHome.button}
          activeOpacity={0.7}
          onPress={handleAddNewTask}>
          <Text style={stylesHome.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={stylesHome.titleTasks}>Minhas Tarefas</Text>
        {taskList.map(task => (
          <TouchableOpacity style={stylesHome.buttonTask} key={task.id}>
            <Text style={stylesHome.taskTextContent}>{task.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};
