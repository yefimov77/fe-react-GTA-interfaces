import type { FC } from 'react';

import styles from './Cart.module.scss';
import { CartList } from './CartList';

export const Cart: FC = () => {
  return (
    <div className={styles.shopBag}>
      <CartList />
    </div>
  );
};
