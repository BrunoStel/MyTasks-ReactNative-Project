import React from 'react';
import {Alert, FlatList, Text, TouchableOpacity} from 'react-native';
import {ITask, useTaskList} from '../../../context/TasksContex';
import {taskListStyles} from './styles';

export const TaskList = () => {
  const {tasks, removeTask} = useTaskList();

  const handleRemoveTask = (id: string): void => {
    Alert.alert('Tem certeza?', 'Deseja realmente excluir a tarefa', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Excluir',
        onPress: () => removeTask(id),
      },
    ]);
  };

  const renderItem = ({item}: {item: ITask}) => (
    <TouchableOpacity
      style={taskListStyles.buttonTask}
      onPress={() => handleRemoveTask(item.id)}>
      <Text style={taskListStyles.taskTextContent}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};
