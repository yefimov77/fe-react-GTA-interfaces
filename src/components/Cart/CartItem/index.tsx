import { Counter } from '@components/UI/Counter';
import type { IShopItem } from '@lib/types';
import { formatUSD } from '@utils/format/formatUsdCurrency';
import { observer } from 'mobx-react-lite';
import type { FC } from 'react';

import styles from './CartItem.module.scss';

interface Props {
  item: IShopItem;
}

export const CartItem: FC<Props> = observer(({ item }) => {
  const { name, imgUrl, price } = item;

  return (
    <li className={styles.card}>
      <div className={styles.content}>
        <img src={imgUrl} alt="logo" className={styles.img} />

        <div className={styles.box}>
          <h3 className={styles.title}>{name}</h3>
          <div className={styles.priceBox}>
            <p className={styles.price}>{formatUSD(price)}</p>
            <Counter itemId={item.id} />
          </div>
        </div>
      </div>
    </li>
  );
});
