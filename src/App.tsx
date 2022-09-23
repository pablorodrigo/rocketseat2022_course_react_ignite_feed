import styles from './App.module.css';

import './global.css';
import { Header } from '~/components/header/Header';
import { Sidebar } from '~/components/siderBar/SideBar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      </div>
    </div>
  );
}
