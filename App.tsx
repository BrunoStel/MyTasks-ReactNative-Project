import React from 'react';
import {TaskProvider} from './src/context/TasksContex';
import {Home} from './src/home/pages';

const App = () => {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
};

export default App;
