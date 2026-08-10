import { Trash2, Check } from 'lucide-react';
import { useState } from 'react';

import styles from './TaskItem.module.css';
import { formatString } from '../../../utils/taskHelpers';

const TaskItem = ({ task, inEditMode, onComplete, onSelect, onEdit, onUpdate, onDelete }) => {
    const [taskText, setTaskText] = useState(task.name);
    const [isSelected, setIsSelected] = useState(false);
    const [prevInEditMode, setPrevInEditMode] = useState(inEditMode); // Guarda na memória o 'inEditMode' da renderização anterior

    // Se o status do modo de edição mudou (entrou ou saiu da edição)
    if (inEditMode !== prevInEditMode) {
        setPrevInEditMode(inEditMode); // Atualiza a memória para a próxima checagem
        setTaskText(task.name); // <--- Reseta qualquer rascunho e restaura o nome oficial da tarefa
        setIsSelected(false); // <--- Reseta o estado de seleção
    }

    // CLASSES
    const checkButtonClasses = [
        styles.checkButton,
        inEditMode && styles.seletecButton,
        isSelected && styles.seletecButtonActice,
    ].filter(Boolean).join(' ');

    const checkIconClasses = [
        styles.checkIcon,
        isSelected && styles.checkIconActive,
    ].filter(Boolean).join(' ');

    const deleteButtonClasses = [
        styles.deleteButton,
        !inEditMode && styles.buttonHidden,
    ].filter(Boolean).join(' ');

    // FUNCTIONS
    const handleClick = () => {
        handleToggleSelect();
        inEditMode ? onSelect(task.id) : onComplete(task.id);
    };

    const handleToggleSelect = () => {
        setIsSelected(!isSelected);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!taskText.trim()) { // TODO: Enviar uma mensagem de erro como feedback para o usuário
            setTaskText(task.name);
            onEdit();
            return console.warn('Erro no modo edição(TaskItem): Campo não pode ficar vazio!');;
        };

        const updatedTask = formatString(taskText);
        const sucess = onUpdate(updatedTask, task.id);

        if (!sucess) { // TODO: Enviar uma mensagem de erro como feedback para o usuário
            return console.warn('Erro no modo edição(TaskItem): Essa tarefa já existe! ');
        }

        setTaskText(updatedTask);
        onEdit(); // Altera edit mode para false
    };

    return (
        <li>
            <button
                onClick={handleClick}
                className={checkButtonClasses}>
                <Check className={checkIconClasses}/>
            </button>

            {inEditMode ?
                <form action="#" method="post" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name='task'
                        value={taskText}
                        aria-label='Digite para atualizar a tarefa'

                        onChange={e => setTaskText(e.target.value)}
                        onFocus={e => { e.target.select(); }}
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
