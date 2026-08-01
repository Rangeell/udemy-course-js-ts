import { useEffect, useState } from 'react';
import styles from './CompletedTaskList.module.css';

const CompletedTaskList = () => {
    
    return (
        <section className={styles.completedTasks}>
            <header>
                <h2>Completed tasks</h2>
            </header>
        </section>
    );
};

export default CompletedTaskList;
