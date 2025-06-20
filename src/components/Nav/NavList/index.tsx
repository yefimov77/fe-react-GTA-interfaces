import type { INavButton } from '@lib/types';
import type { FC } from 'react';

import { NavigationLink } from '../NavigationLink';
import styles from './NavList.module.scss';

interface Props {
  navLinks: INavButton[];
}

export const NavList: FC<Props> = ({ navLinks }) => {
  return (
    <nav className={styles.list}>
      {navLinks.map((navLink) => (
        <li key={navLink.id}>
          <NavigationLink navigationInfo={navLink} />
        </li>
      ))}
    </nav>
  );
};
