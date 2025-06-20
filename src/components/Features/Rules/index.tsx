import { SearchTabs } from '@components/Tabs';
import { useRootStore } from '@hooks/useRootStore';
import { TABS } from '@lib/data/constants';
import type { FC } from 'react';

export const Rules: FC = () => {
  const { userStore } = useRootStore();

  return <SearchTabs tabs={TABS} currentAccessLevel={userStore.aceesLvl} />;
};
