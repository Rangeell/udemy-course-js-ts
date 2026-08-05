import { Trash2, Check } from 'lucide-react';

import styles from './CompletedTasks.module.css';

const CompletedTasks = ({ completedTasks, onDeleteTask, onCompleteTask}) => {
    return (
        <section className={styles.completedTasks}>
            <header>
                <h2>{completedTasks.length === 0 ? 'No task completed' : `Completed tasks (${completedTasks.length})`}</h2>
            </header>
            
            {completedTasks.length === 0 ? (null) : (
                <ul>
                    {completedTasks.map(task => (
                        <li key={task.id}>
                            <button
                                onClick={() => onCompleteTask(task.id)}
                                className={styles.checkedButton}>

                                <Check size={22} className={styles.checkIcon} />
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

export default CompletedTasks;
