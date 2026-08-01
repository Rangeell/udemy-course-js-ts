import { use, useState } from 'react';
import styles from './Form.module.css';

const Form = ({ taskText, setTaskText, onAddTask, allTasks }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!taskText) return;
        if(allTasks.includes(taskText)) return;

        onAddTask();
    };

    return (
        <form action="#" className={styles.form} onSubmit={handleSubmit}>
            <p>
                <label htmlFor="iTask">
                    <input
                        type="text"
                        name="task"
                        id="iTask"
                        value={taskText}
                        placeholder='Type a task...'
                        onChange={e => setTaskText(e.target.value)}
                    />
                </label>
            </p>

            <button type="submit">Add +</button>
        </form>
    );
};

export default Form;
