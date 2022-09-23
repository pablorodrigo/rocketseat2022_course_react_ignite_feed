import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from '~/components/avatar/Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
        alt='header'
      />

      <div className={styles.profile}>
        <Avatar src='https://avatars3.githubusercontent.com/u/6105149?s=460&v=4' />

        <strong>Pablo Silva</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
