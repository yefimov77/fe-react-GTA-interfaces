// stores/useRootStore.ts
import { RootStoreContext } from '@stores/RootStoreContext';
import { useContext } from 'react';

export const useRootStore = () => useContext(RootStoreContext);
