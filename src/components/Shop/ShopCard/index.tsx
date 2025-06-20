import { useRootStore } from '@hooks/useRootStore';
import type { IShopItem } from '@lib/types';
import { formatUSD } from '@utils/format/formatUsdCurrency';
import { observer } from 'mobx-react-lite';
import type { FC } from 'react';

import styles from './ShopCard.module.scss';

interface Props {
  item: IShopItem;
}

export const ShopCard: FC<Props> = observer(({ item }) => {
  const { name, imgUrl, price } = item;
  const { userStore } = useRootStore();

  return (
    <li className={styles.card} onClick={() => userStore.addToCart(item.id)}>
      <div className={styles.content}>
        <img src={imgUrl} alt="item" className={styles.img} />
        <h3 className={styles.title}>{name}</h3>
        <div className="">
          <p className={styles.price}>{formatUSD(price)}</p>
          <p>{item.count}</p>
        </div>
      </div>
    </li>
  );
});
