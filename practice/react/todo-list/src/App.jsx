import { useEffect, useState } from 'react';

// My components
import Header from './components/Header/Header.jsx';
import Form from './components/Form/Form.jsx';
import TaskList from './components/TaskList/TaskList.jsx';

const App = () => {
  const [taskText, setTaskText] = useState('');
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    console.log('All tasks:', allTasks);
  }, [allTasks]);

  const generateId = (allTasks) => {
    return allTasks.length > 0 ? Math.max(...allTasks.map(task => task.id)) + 1 : 1;
  };

  const addTask = (newTask) => {

    setAllTasks(
      [...allTasks,
      {
        id: generateId(allTasks),
        task: newTask,
      },
      ],
    );
    
    setTaskText('');
  };

  return (
    <>
      <Header />
      <main>
        <Form
          taskText={taskText}
          allTasks={allTasks}
          setTaskText={setTaskText}
          onAddTask={addTask}
        />
        <TaskList allTasks={allTasks} />
      </main>
    </>
  );
};

export default App;
