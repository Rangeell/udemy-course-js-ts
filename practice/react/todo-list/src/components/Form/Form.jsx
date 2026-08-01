import { Plus } from 'lucide-react';

import styles from './Form.module.css';

const Form = ({ taskText, setTaskText, onAddTask, allTasks }) => {

    const formatString = (string) => {
        if (!string) return;

        const cleanString = string.trim().toLowerCase();

        return cleanString.charAt(0).toUpperCase() + cleanString.slice(1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const el = e.target;
        const newTask = formatString(taskText);

        if (!newTask) return;
        if (allTasks.some(task => task.task === newTask)) return;

        onAddTask(newTask);

        // Após adicionar a task, foca no elemento de atributo "task" dentro do elemento disparador do evento
        el.elements.task.focus();
    };

    return (
        <form action="#" autoComplete='off' className={styles.form} onSubmit={handleSubmit}>
            <p>
                <input
                    type="text"
                    name="task"
                    aria-label='Digite ume nova tarefa'
                    value={taskText}
                    placeholder='Type a task...'
                    onChange={e => setTaskText(e.target.value)}
                />
            </p>
            <button type="submit"> <Plus /> </button>
        </form>
    );
};

export default Form;
