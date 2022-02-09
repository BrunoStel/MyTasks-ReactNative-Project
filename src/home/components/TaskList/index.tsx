import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {ITask, useTaskList} from '../../../context/TasksContex';
import {taskListStyles} from './styles';

export const TaskList = () => {
  const {tasks} = useTaskList();

  const renderItem = ({item}: {item: ITask}) => (
    <TouchableOpacity style={taskListStyles.buttonTask}>
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
