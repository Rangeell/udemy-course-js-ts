import { useEffect, useState } from 'react';

// My components
import Header from './components/Header/Header.jsx';
import Form from './components/Form/Form.jsx';
import TaskList from './components/TaskList/TaskList.jsx';
import CompletedTaskList from './components/CompletedTaskList/CompletedTaskList.jsx';

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
        completed: false,
      },
      ],
    );

    setTaskText('');
  };

  const toggleCompleTask = (taskId) => {
    setAllTasks(allTasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
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
          allTasks={allTasks.filter(task => !task.completed)}
          onDeleteTask={deleteTask}
          onCompleteTask={toggleCompleTask}
        />
        <CompletedTaskList
          completedTasks={allTasks.filter(task => task.completed)}
          onDeleteTask={deleteTask}
          onCompleteTask={toggleCompleTask}
        />
      </main>
    </>
  );
};

export default App;
