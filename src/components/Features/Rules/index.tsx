import { SearchTabs } from '@components/Tabs';
import type { FC } from 'react';

// import styles from './Rules.module.scss';

const TABS = [
  { id: '1', title: 'Форум', content: 'Правила игры...', accessLvl: 1 },
  {
    id: '2',
    title: 'Сервер',
    content: 'Информация по инпутам...',
    accessLvl: 2,
  },
  { id: '3', title: 'Админ', content: 'Все о еде...', accessLvl: 3 },
  {
    id: '4',
    title: 'Другое',
    content: 'Анимации и эффекты...',
    accessLvl: 4,
  },
];
export const Rules: FC = () => {
  const userAccessLevel = 2; // example

  return <SearchTabs tabs={TABS} currentAccessLevel={userAccessLevel} />;
};
