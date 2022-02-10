import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
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

  it('Sould enable hook useTaskList to provide addTask that inserts an item in the task list ', async () => {
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
  it('Sould enable the button to insert correct data in the task list onPress', async () => {
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TaskProvider,
    });

    const {getByPlaceholderText, getByTestId} = render(<Home />, {
      wrapper: TaskProvider,
    });

    const data = {
      id: 'any_id',
      title: 'any_title',
    };
    const inputNewTask = getByPlaceholderText('Nova Tarefa ...');
    const button = getByTestId('addButton');

    act(() => fireEvent.changeText(inputNewTask, data.title));

    await act(async () => {
      await fireEvent.press(button);
    });

    expect(result.current.tasks).toBeTruthy();
    expect(result.current.tasks[0]).toEqual(data);
  });
});
