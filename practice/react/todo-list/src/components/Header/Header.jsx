import { ListTodo } from 'lucide-react';

import styles from './Header.module.css';

const Header = () => (
    <header className={styles.header}>
        <h1>Todo List <ListTodo size={30} className={styles.todoIcon} /> </h1>
    </header>
);

export default Header;
