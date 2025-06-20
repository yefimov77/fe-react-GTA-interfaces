import { Header } from '@components/Features/Header';
import { Outlet } from 'react-router-dom';

import styles from './App.module.scss';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.bodySection}>
        <Outlet />
      </main>
    </div>
  );
};
