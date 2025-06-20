import { useRootStore } from '@hooks/useRootStore';
import { observer } from 'mobx-react-lite';
import type { FC } from 'react';

import { CartItem } from '../CartItem';
import styles from './CartList.module.scss';

export const CartList: FC = observer(() => {
  const { userStore } = useRootStore();

  return (
    <ul className={styles.list}>
      {userStore.cart.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </ul>
  );
});
