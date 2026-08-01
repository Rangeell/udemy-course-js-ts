import { Trash2 } from 'lucide-react';

import styles from './TaskList.module.css';

const TaskList = ({ allTasks, onDelete }) => {
    return (
        <section className={styles.inProgessTasks}>
            <header>
                <h2>{allTasks.length === 0 ? 'No tasks' : `In progress tasks (${allTasks.length})`}</h2>
            </header>

            {allTasks.length === 0 ? (null) : (
                <ul>
                    {allTasks.map((task) => (
                        <li key={task.id}>
                            <button className={styles.checkedButton}></button>
                            
                            <div className={styles.task}>
                                {task.task}
                            </div>

                            <button onClick={() => onDelete(task.id)} className={styles.deleteButton}>
                                <Trash2 className={styles.trashIcon} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default TaskList;
