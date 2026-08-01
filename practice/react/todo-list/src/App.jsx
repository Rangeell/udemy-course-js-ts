import { useEffect, useState } from 'react';

// My components
import Header from './components/Header/Header.jsx';
import Form from './components/Form/Form.jsx';
import TaskList from './components/TaskList/TaskList.jsx';
import CompletedTaskList from './components/CompletedTaskList/CompletedTaskList.jsx';

const App = () => {
  const [taskText, setTaskText] = useState('');
  const [allTasks, setAllTasks] = useState([]);
  const [completedTaskList, setCompletedTaskList] = useState([]);

  useEffect(() => {
    console.log('All tasks:', allTasks);
    console.log('Completed tasks:', completedTaskList);
  }, [allTasks, completedTaskList]);

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

  const deleteTask = (taskId) => {
    setAllTasks(allTasks.filter(task => task.id !== taskId)); // Mantém todas as tarefas cujo ID seja diferente do ID deletado
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
        <TaskList
          allTasks={allTasks}
          onDelete={deleteTask}
        />
        <CompletedTaskList />
      </main>
    </>
  );
};

export default App;
