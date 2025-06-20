import { NavList } from '@components/Nav/NavList';
import { Purse } from '@components/Purse';
import { BackLink } from '@components/UI/BackLink';
import { useRootStore } from '@hooks/useRootStore';
import type { INavButton } from '@lib/types';
import { observer } from 'mobx-react-lite';
import type { FC } from 'react';

import styles from './Header.module.scss';

const BUTTONS: INavButton[] = [
  {
    id: '1',
    label: 'Правила',
    icon: '/header/rules.png',
    hoverIcon: '/header/rules-hover.png',
    alt: 'rules-icon',
    acessLvl: 1,
    href: '/rules',
  },
  {
    id: '2',
    label: 'Инпуты',
    icon: '/header/inputs.png',
    hoverIcon: '/header/inputs-hover.png',
    alt: 'inputs-icon',
    acessLvl: 2,
    href: '/inputs',
  },
  {
    id: '3',
    label: 'Еда',
    icon: '/header/food.png',
    hoverIcon: '/header/food-hover.png',
    alt: 'food-icon',
    acessLvl: 3,
    href: '/food',
  },
  {
    id: '4',
    label: 'Анимации',
    icon: '/header/animations.png',
    hoverIcon: '/header/animations-hover.png',
    alt: 'animations-icon',
    acessLvl: 4,
    href: '/animations',
  },
];

export const Header: FC = observer(() => {
  const { userStore } = useRootStore();

  return (
    <header className={styles.header}>
      <div className={styles.headerNav}>
        <BackLink />
        <NavList navLinks={BUTTONS} />
        <img className={styles.logo} src="/header/header-logo.svg" alt="logo" />
        <h3 className={styles.title}>
          Уровень доступа: {userStore.accessLevel}
        </h3>
      </div>
      <Purse />
    </header>
  );
});
