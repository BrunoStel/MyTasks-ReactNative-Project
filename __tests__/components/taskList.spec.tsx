import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {renderHook, act} from '@testing-library/react-hooks';
import {TaskProvider, useTaskList} from '../../src/context/TasksContex';
import {TaskList} from '../../src/home/components/TaskList';

describe('TaskList component', () => {
  it('Sould remove an item of the task list when task is pressed', async () => {
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TaskProvider,
    });

    render(<TaskList />, {
      wrapper: TaskProvider,
    });

    const data = {
      id: 'any_id',
      title: 'any_title',
    };

    await act(() => result.current.addTask(data));

    expect(result.current.tasks[0]).toEqual(data);

    await act(() => result.current.removeTask(data.id));

    expect(result.current.tasks.length).toBe(0);
  });
});
