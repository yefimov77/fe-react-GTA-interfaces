import { Cart } from '@components/Cart';
import { Shop } from '@components/Shop';
import { PayBlock } from '@components/UI/PayBlock';
import { observer } from 'mobx-react-lite';
import type { FC } from 'react';

import styles from './Food.module.scss';

export const Food: FC = observer(() => {
  return (
    <div className={styles.shop}>
      <Shop />
      <div className={styles.block}>
        <Cart />
        <PayBlock />
      </div>
    </div>
  );
});
