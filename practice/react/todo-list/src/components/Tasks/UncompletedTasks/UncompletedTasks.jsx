import { Trash2 } from 'lucide-react';

import styles from './UncompletedTasks.module.css';

const UncompletedTasks = ({ uncompletedTasks, onDeleteTask, onCompleteTask }) => {
    return (
        <section className={styles.inProgessTasks}>
            <header>
                <h2>{uncompletedTasks.length === 0 ? 'No tasks' : `In progress tasks (${uncompletedTasks.length})`}</h2>
            </header>

            {uncompletedTasks.length === 0 ? (null) : (
                <ul>
                    {uncompletedTasks.map((task) => (
                        <li key={task.id}>
                            <button
                                onClick={() => onCompleteTask(task.id)}
                                className={styles.checkedButton}>
                            </button>

                            <div className={styles.task}>
                                {task.task}
                            </div>

                            <button
                                onClick={() => onDeleteTask(task.id)}
                                className={styles.deleteButton}>

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
