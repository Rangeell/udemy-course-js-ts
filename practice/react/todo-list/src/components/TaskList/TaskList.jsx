import { Trash2 } from 'lucide-react';

import styles from './TaskList.module.css';

const TaskList = ({ allTasks, onDelete }) => {
    return (
        <section className={styles.inProgessTasks}>
            <header>
                <h2>{allTasks.length === 0 ? 'No tasks' : `In progress tasks (${allTasks.length})`}</h2>
            </header>
            
            <ul>
                {allTasks.map((task) => (
                    <li key={task.id}>
                        {task.task}
                        <button onClick={() => onDelete(task.id)} className={styles.deleteButton}>
                            <Trash2 className={styles.trashIcon} />
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TaskList;
