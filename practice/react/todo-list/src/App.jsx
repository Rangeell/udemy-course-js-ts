/*
TODO: Criar modais de confirmação para exclusão de tarefas
TODO: Criar mensagens de erros dinâmicas
*/

import { useEffect, useState } from 'react';

// My components
import Header from './components/Header/Header.jsx';
import Form from './components/Form/Form.jsx';
import UncompletedTasks from './components/Tasks/UncompletedTasks/UncompletedTasks.jsx';
import CompletedTasks from './components/Tasks/CompletedTasks/CompletedTasks.jsx';
import { isDuplicateTask } from './utils/taskHelpers.js';

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
      [
        {
          id: generateId(allTasks),
          name: newTask,
          completed: false,
        },
        ...allTasks],
    );

    setTaskText('');
    setEditMode(false);
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

  const deleteSelectedTasks = () => {
    console.log('Oi');
  };

  const handleEditMode = () => {
    setEditMode(!inEditMode);
  };

  const handleUpdate = (taskText, taskId) => { // TODO: Enviar uma mensagem de erro como feedback para o usuário
    if (isDuplicateTask(allTasks, taskText, taskId)) return console.warn('Essa tarefa já existe!');

    setAllTasks(allTasks.map(task => {
      if (task.id === taskId) {
        return { ...task, name: taskText };
      }

      return task;
    }));
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

          onCompleteTask={toggleCompleTask}

          onEdit={handleEditMode}
          onUpdate={handleUpdate}

          onDeleteTask={deleteTask}
          onDeleteAll={deleteAllTasks}
          onDeleteSelected={deleteSelectedTasks}
        />
        <CompletedTasks
          completedTasks={allTasks.filter(task => task.completed)}
          inEditMode={inEditMode}

          onDelete={deleteTask}
          onCompleteTask={toggleCompleTask}
        />
      </main>
    </>
  );
};

export default App;
