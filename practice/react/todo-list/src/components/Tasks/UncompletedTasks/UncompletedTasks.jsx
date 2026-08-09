// TODO: Adicionar animação no input ao entrar no edit mode

import { Check, Indent, Trash2 } from 'lucide-react';

import styles from './UncompletedTasks.module.css';

const UncompletedTasks = ({ uncompletedTasks, onDeleteTask, onDeleteAll, onDeleteSelected, onCompleteTask, inEditMode, onEdit, onUpdate }) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        onEdit(); // Altera edit mode para false
    };

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
                        <li key={task.id}>
                            <button
                                onClick={() => onCompleteTask(task.id)}
                                className={styles.checkButton}>
                            </button>

                            {inEditMode ?
                                <form action="#" method="post" onSubmit={handleSubmit}>
                                    <input type="text"
                                        value={task.task}
                                        onChange={e => onUpdate(task.id, e.target.value)}
                                        onFocus={e => { e.target.select(); }}
                                        name='task'
                                        aria-label='Digite para atualizar a tarefa'
                                    />
                                </form>
                                :
                                <div className={styles.task}>
                                    {task.task}
                                </div>}

                            <button
                                onClick={() => onDeleteTask(task.id)}
                                className={deleteButtonClasses}>
                                <Trash2 className={styles.trashIcon} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default UncompletedTasks;
