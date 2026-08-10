import { Trash2 } from 'lucide-react';

import { formatString } from '../../../utils/taskHelpers';
import styles from './TaskItem.module.css';
import { useState } from 'react';

const TaskItem = ({ task, onCompleteTask, inEditMode, onEdit, onDelete, onUpdate}) => {
    const [taskText, setTaskText] = useState(task.name);

    const deleteButtonClasses = [
            styles.deleteButton,
            !inEditMode && styles.buttonHidden,
        ].filter(Boolean).join(' ');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!taskText) { // TODO: Enviar uma mensagem de erro como feedback para o usuário
            setTaskText(task.name);
            onEdit();
            return;
        };

        const updatedTask = formatString(taskText);

        setTaskText(updatedTask);
        onUpdate(updatedTask, task.id);
        onEdit(); // Altera edit mode para false
    };

    return (
        <li>
            <button
                onClick={() => onCompleteTask(task.id)}
                className={styles.checkButton}>
            </button>

            {inEditMode ?
                <form action="#" method="post" onSubmit={handleSubmit}>
                    <input type="text"
                        value={taskText}
                        onChange={e => setTaskText(e.target.value)}
                        onFocus={e => { e.target.select(); }}
                        name='task'
                        aria-label='Digite para atualizar a tarefa'
                    />
                </form>
                :
                <div className={styles.task}>
                    {task.name}
                </div>}

            <button
                onClick={() => onDelete(task.id)}
                className={deleteButtonClasses}>
                <Trash2 className={styles.trashIcon} />
            </button>
        </li>
    );
};

export default TaskItem;
