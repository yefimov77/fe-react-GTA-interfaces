import { observer } from 'mobx-react-lite';
import type { FC } from 'react';

import styles from './Shop.module.scss';
import { ShopList } from './ShopList';

export const Shop: FC = observer(() => {
  return (
    <div className={styles.shopBox}>
      <ShopList />
    </div>
  );
});
