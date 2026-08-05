import { useEffect, useState } from 'react';

// My components
import Header from './components/Header/Header.jsx';
import Form from './components/Form/Form.jsx';
import UncompletedTasks from './components/Tasks/UncompletedTasks/UncompletedTasks.jsx';
import CompletedTasks from './components/Tasks/CompletedTasks/CompletedTasks.jsx';

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
    setAllTasks(allTasks.map(task => { // Atualiza o estado 'allTasks' usando a versão modificada da lista
      if (task.id === taskId) { // Se for a tarefa procurada, cria um novo objeto copiado (...task)
        return { ...task, completed: !task.completed }; // e inverte o valor da propriedade 'completed' (true vira false, e vice-versa)
      }

      return task; // Se não for a tarefa procurada, retorna ela sem nenhuma alteração
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
        <UncompletedTasks
          uncompletedTasks={allTasks.filter(task => !task.completed)}
          onDeleteTask={deleteTask}
          onCompleteTask={toggleCompleTask}
        />
        <CompletedTasks
          completedTasks={allTasks.filter(task => task.completed)}
          onDeleteTask={deleteTask}
          onCompleteTask={toggleCompleTask}
        />
      </main>
    </>
  );
};

export default App;
