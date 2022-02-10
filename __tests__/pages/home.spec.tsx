import React from 'react';
import {render} from '@testing-library/react-native';
import {Home} from '../../src/home/pages';

describe('Home page', () => {
  it('Should renders text input correctly', () => {
    const {getByPlaceholderText} = render(<Home />);

    const inputNewTask = getByPlaceholderText('Nova Tarefa ...');

    expect(inputNewTask).toBeDefined();
    expect(inputNewTask.props.placeholder).toBeTruthy();
  });
});
