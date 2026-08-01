import { Trash2 } from 'lucide-react';

import styles from './TaskList.module.css';

const TaskList = ({ allTasks }) => {
    return (
        <section className={styles.section}>
            <h2>{allTasks.length === 0 ? 'No have tasks' : 'In progress tasks'}</h2>
            <ul>
                {allTasks.map(task => (
                    <li key={task.id}>
                        {task.task}
                        <button className={styles.deleteButton}>
                            <Trash2 className={styles.trashIcon} />
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TaskList;
