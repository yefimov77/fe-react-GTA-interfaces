import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './BackLink.module.scss';

export const BackLink: FC = () => {
  return (
    <div className={styles.content}>
      <NavLink to="/">
        <button className={styles.backLinkButton} />
      </NavLink>
      <h3 className={styles.title}>Меню</h3>
    </div>
  );
};
