import { useRootStore } from '@hooks/useRootStore';
import { observer } from 'mobx-react-lite';
import type { FC } from 'react';

import { ShopCard } from '../ShopCard';
import styles from './ShopList.module.scss';

export const ShopList: FC = observer(() => {
  const { shopStore } = useRootStore();
  return (
    <ul className={styles.shopList}>
      {shopStore.products.map((item) => (
        <ShopCard item={item} key={item.id} />
      ))}
    </ul>
  );
});
