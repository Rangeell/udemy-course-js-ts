/*
TODO: Criar modais de feeback de sucesso
TODO: Adicionar animação no input ao entrar no edit mode
TODO: Criar modais de confirmação para exclusão de tarefas
TODO: Criar mensagens de erros dinâmicas -> provavelmente manipular um estado para setar true ou false
*/

import { useEffect, useState } from 'react';

// My components
import Header from './components/Header/Header.jsx';
import Form from './components/Form/Form.jsx';
import UncompletedTasks from './components/Tasks/UncompletedTasks/UncompletedTasks.jsx';
import CompletedTasks from './components/Tasks/CompletedTasks/CompletedTasks.jsx';

// Utilities
import { isDuplicateTask } from './utils/taskHelpers.js';

const App = () => {
  const [taskText, setTaskText] = useState('');
  const [allTasks, setAllTasks] = useState([]);
  const [inEditMode, setEditMode] = useState(false);

  useEffect(() => { // Testes
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
          selected: false,
        },
        ...allTasks],
    );

    setTaskText('');
    setEditMode(false);
  };

  const handleToggleComplete = (taskId) => {
    setAllTasks(allTasks.map(task => { // Atualiza o estado 'allTasks' usando a versão modificada da lista
      if (task.id === taskId) { // Se for a tarefa procurada, cria um novo objeto copiado (...task)
        return { ...task, completed: !task.completed }; // e inverte o valor da propriedade 'completed' (true vira false, e vice-versa)
      }

      return task; // Se não for a tarefa procurada, retorna ela sem nenhuma alteração
    }));
  };

  const handleToggleSelect = (taskId) => {
    setAllTasks(allTasks.map(task => {
      if (taskId === task.id) {
        return { ...task, selected: !task.selected };
      }

      return task;
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

  const handleDeleteAll = () => {
    setAllTasks([]);
    setEditMode(false);
  };

  const handleDeleteSelected = () => {
    setAllTasks(allTasks.filter(task => !task.selected));
  };

  const handleEditMode = () => {
    setEditMode(!inEditMode);
    setAllTasks(prevTask => prevTask.map(task => ({ ...task, selected: false }))); // <--- Reseta o estado de selação
  };

  const handleUpdate = (taskText, taskId) => { // TODO: Enviar uma mensagem de erro como feedback para o usuário
    if (isDuplicateTask(allTasks, taskText, taskId)) {
      console.warn('Essa tarefa já existe!');

      return false; // Se der erro, retorna false para tratar no momento da edição no TaskItem
    };

    setAllTasks(prevTask => prevTask.map(task => {
      if (taskId === task.id) {
        console.log(task);
        return { ...task, name: taskText };
      }

      return task;
    }));

    return true;
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
          inEditMode={inEditMode}
          selectedTasks={allTasks.filter(task => task.selected)}
          uncompletedTasks={allTasks.filter(task => !task.completed)}

          onSelect={handleToggleSelect}
          onComplete={handleToggleComplete}

          onEdit={handleEditMode}
          onUpdate={handleUpdate}

          onDelete={deleteTask}
          onDeleteAll={handleDeleteAll}
          onDeleteSelected={handleDeleteSelected}
        />
        <CompletedTasks
          completedTasks={allTasks.filter(task => task.completed)}
          inEditMode={inEditMode}

          onDelete={deleteTask}
          onComplete={handleToggleComplete}
        />
      </main>
    </>
  );
};

export default App;
