import { useEffect, useState } from 'react';

// My components
import Header from './components/Header/Header.jsx';
import Form from './components/Form/Form.jsx';
import UncompletedTasks from './components/Tasks/UncompletedTasks/UncompletedTasks.jsx';
import CompletedTasks from './components/Tasks/CompletedTasks/CompletedTasks.jsx';

const App = () => {
  const [taskText, setTaskText] = useState('');
  const [allTasks, setAllTasks] = useState([]);
  const [inEditMode, setEditMode] = useState(false);

  useEffect(() => {
    console.log('All tasks:', allTasks);
    console.log('In edit mode:', inEditMode);

  }, [allTasks, inEditMode]);

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
    setAllTasks(prevTasks => { 
      // Garante o estado mais recente e permite verificar se o novo array ficou vazio para resetting automático do inEditMode
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId); // Mantém todas as tarefas cujo ID seja diferente do ID deletado

      // Se o array resultante estiver vazio, desativa o editMode
      if (updatedTasks.length === 0) {
        setEditMode(false);
      }

      return updatedTasks;
    });
  };

  const deleteAllTasks = () => {
    setAllTasks([]);
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(!inEditMode);
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
          inEditMode={inEditMode}

          onDeleteTask={deleteTask}
          onCompleteTask={toggleCompleTask}
          onEdit={handleEdit}
          onDeleteAll={deleteAllTasks}
        />
        <CompletedTasks
          completedTasks={allTasks.filter(task => task.completed)}
          inEditMode={inEditMode}

          onDeleteTask={deleteTask}
          onCompleteTask={toggleCompleTask}
          onEdit={handleEdit}
        />
      </main>
    </>
  );
};

export default App;
