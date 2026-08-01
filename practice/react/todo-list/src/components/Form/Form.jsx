import styles from './Form.module.css';

const Form = ({ taskText, setTaskText, onAddTask, allTasks }) => {

    const formatString = (string) => {
        if (!string) return;

        const cleanString = string.trim().toLowerCase();

        return cleanString.charAt(0).toUpperCase() + cleanString.slice(1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = formatString(taskText);

        if (!newTask) return;
        if (allTasks.includes(newTask)) return;

        onAddTask(newTask);
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
