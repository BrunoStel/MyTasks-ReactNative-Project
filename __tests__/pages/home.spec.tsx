import React from 'react';
import {render} from '@testing-library/react-native';
import {Home} from '../../src/home/pages';
import {renderHook, act} from '@testing-library/react-hooks';
import {TaskProvider, useTaskList} from '../../src/context/TasksContex';

describe('Home page', () => {
  it('Should renders text input correctly', () => {
    const {getByPlaceholderText} = render(<Home />);

    const inputNewTask = getByPlaceholderText('Nova Tarefa ...');

    expect(inputNewTask).toBeDefined();
    expect(inputNewTask.props.placeholder).toBeTruthy();
  });

  it('Sould insert a item in the task list ', async () => {
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TaskProvider,
    });

    const data = {
      id: 'any_id',
      title: 'any_title',
    };

    await act(() => result.current.addTask(data));

    expect(result.current.tasks).toBeTruthy();
  });
});
