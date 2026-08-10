// TODO: Adicionar animação no input ao entrar no edit mode

import { Check } from 'lucide-react';

import styles from './UncompletedTasks.module.css';
import TaskItem from '../TaskItem/TaskItem';

const UncompletedTasks = ({ uncompletedTasks, inEditMode, onDelete, onDeleteAll, onEdit, onUpdate, onCompleteTask }) => {

    const hasNoTask = uncompletedTasks.length === 0;

    const editButtonClasses = [
        styles.editButton, // Classe padrão
        inEditMode && styles.editButtonActive, // Adiciona classe, caso esteja no modo edição
        hasNoTask && styles.buttonHidden, // Adiciona classe, caso não haja tarefas
    ].filter(Boolean).join(' '); // Retorna um array sem valores booleanos e converte em strings separadas por espaço

    const deleteAllButtonClasses = [
        styles.deleteAllButton, // Classe padrão
        (hasNoTask || !inEditMode) && styles.buttonHidden, // Esconde o botão, caso não haja tarefas e não esteja no "editMode"
    ].filter(Boolean).join(' '); // Retorna um array sem valores booleanos e o converte em strings separadas por espaço

    const deleteButtonClasses = [
        styles.deleteButton,
        !inEditMode && styles.buttonHidden,
    ].filter(Boolean).join(' ');

    return (
        <section className={styles.inProgessTasks}>
            <header>
                <button
                    onClick={onEdit}
                    className={editButtonClasses}>
                    {inEditMode ? <Check /> : 'Edit'}
                </button>

                <h2>{hasNoTask ? 'No tasks' : `In progress tasks (${uncompletedTasks.length})`}</h2>

                <button
                    onClick={onDeleteAll}
                    className={deleteAllButtonClasses}>
                    {inEditMode ? 'Delete All' : 'Delete All'}
                </button>
            </header>

            {!hasNoTask && ( // Se não houver tarefa, não chega na segunda operação (renderizar)
                <ul>
                    {uncompletedTasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            inEditMode={inEditMode}
                            deleteButtonClasses={deleteButtonClasses}

                            onEdit={onEdit}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                            onCompleteTask={onCompleteTask}
                        />
                    ))}
                </ul>
            )}
        </section>
    );
};

export default UncompletedTasks;
