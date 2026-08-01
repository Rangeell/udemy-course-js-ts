import { Trash2 } from 'lucide-react';

import styles from './TaskList.module.css';

const TaskList = ({ allTasks, onDeleteTask, onCompleteTask }) => {
    return (
        <section className={styles.inProgessTasks}>
            <header>
                <h2>{allTasks.length === 0 ? 'No tasks' : `In progress tasks (${allTasks.length})`}</h2>
            </header>

            {allTasks.length === 0 ? (null) : (
                <ul>
                    {allTasks.map((task) => (
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

export default TaskList;
