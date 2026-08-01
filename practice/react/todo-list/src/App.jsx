import { useEffect, useState } from 'react';
import Header from './components/Header/Header.jsx';
import Form from './components/Form/Form.jsx';

const App = () => {
  const [taskText, setTaskText] = useState('');
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    console.log('All tasks:', allTasks);
  }, [allTasks]);

  const addTask = (newTask) => {

    setAllTasks([...allTasks,  newTask]);
    setTaskText('');
  };

  return (
    <>
      <Header />
      <Form
        taskText={taskText}
        allTasks={allTasks}
        setTaskText={setTaskText}
        onAddTask={addTask}
      />
    </>
  );
};

export default App;
