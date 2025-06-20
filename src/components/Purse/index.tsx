import { useRootStore } from '@hooks/useRootStore';
import { formatUSD } from '@utils/format/formatUsdCurrency';
import { observer } from 'mobx-react-lite';
import type { FC } from 'react';

import styles from './Purse.module.scss';

export const Purse: FC = observer(() => {
  const { userStore } = useRootStore();

  return (
    <div className={styles.wrapper}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M9 13.5H15"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M31.2495 15H27.3465C24.669 15 22.5 17.0145 22.5 19.5C22.5 21.9855 24.6705 24 27.345 24H31.2495C31.3755 24 31.437 24 31.4895 23.997C32.2995 23.9475 32.9445 23.349 32.997 22.5975C33 22.5495 33 22.491 33 22.3755V16.6245C33 16.509 33 16.4505 32.997 16.4025C32.943 15.651 32.2995 15.0525 31.4895 15.003C31.437 15 31.3755 15 31.2495 15Z"
          stroke="white"
          stroke-width="1.5"
        />
        <path
          d="M31.4475 15C31.3305 12.192 30.9555 10.47 29.742 9.258C27.9855 7.5 25.1565 7.5 19.5 7.5H15C9.3435 7.5 6.5145 7.5 4.758 9.258C3 11.0145 3 13.8435 3 19.5C3 25.1565 3 27.9855 4.758 29.742C6.5145 31.5 9.3435 31.5 15 31.5H19.5C25.1565 31.5 27.9855 31.5 29.742 29.742C30.9555 28.53 31.332 26.808 31.4475 24"
          stroke="white"
          stroke-width="1.5"
        />
        <path
          opacity="0.5"
          d="M9 7.50006L14.6025 3.78456C15.3904 3.27206 16.3101 2.99927 17.25 2.99927C18.1899 2.99927 19.1096 3.27206 19.8975 3.78456L25.5 7.50006"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          opacity="0.5"
          d="M26.9865 19.5H27"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className={styles.textWrapper}>
        <p>{`Денег с собой`}</p>
        <h3>{formatUSD(userStore.money)}</h3>
      </div>
    </div>
  );
});
