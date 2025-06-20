import { useRootStore } from '@hooks/useRootStore';
import { formatUSD } from '@utils/format/formatUsdCurrency';
import { observer } from 'mobx-react-lite';
import type { FC } from 'react';

import { BaseButton } from '../MainButton';
import styles from './PayBlock.module.scss';

export const PayBlock: FC = observer(() => {
  const { userStore } = useRootStore();
  return (
    <div className={styles.payBlock}>
      <div className={styles.payBlockHeader}>
        <p className={styles.payBlockDescription}>к оплате</p>
        <p className={styles.payBlockPrice}>{formatUSD(userStore.cartTotal)}</p>
      </div>

      <div className={styles.payBlockFooter}>
        <button
          className={styles.resetBtn}
          onClick={() => userStore.clearCart()}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.625 7.5H4.375M23.5413 10.625L22.9662 19.25C22.745 22.5675 22.635 24.2263 21.5538 25.2375C20.4725 26.25 18.81 26.25 15.4838 26.25H14.5162C11.1912 26.25 9.52875 26.25 8.44625 25.2375C7.365 24.2263 7.255 22.5675 7.03375 19.25L6.45875 10.625"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              opacity="0.5"
              d="M11.875 13.75L12.5 20M18.125 13.75L17.5 20"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              opacity="0.5"
              d="M8.125 7.5H8.2625C8.76556 7.48715 9.25303 7.32278 9.66115 7.02839C10.0693 6.734 10.3791 6.3233 10.55 5.85L10.5925 5.72125L10.7138 5.3575C10.8175 5.04625 10.87 4.89125 10.9388 4.75875C11.074 4.49924 11.2681 4.27499 11.5056 4.10395C11.7431 3.93291 12.0173 3.81983 12.3063 3.77375C12.4525 3.75 12.6162 3.75 12.9437 3.75H17.0563C17.3838 3.75 17.5475 3.75 17.6937 3.77375C17.9827 3.81983 18.2569 3.93291 18.4944 4.10395C18.7319 4.27499 18.926 4.49924 19.0612 4.75875C19.13 4.89125 19.1825 5.04625 19.2862 5.3575L19.4075 5.72125C19.5659 6.24784 19.8935 6.70751 20.3396 7.02908C20.7857 7.35064 21.3253 7.51616 21.875 7.5"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>
        </button>
        <BaseButton
          disabled={!userStore.canPay(userStore.cartTotal)}
          onClick={() => userStore.pay()}
        >
          Оплатить
        </BaseButton>
      </div>
    </div>
  );
});
