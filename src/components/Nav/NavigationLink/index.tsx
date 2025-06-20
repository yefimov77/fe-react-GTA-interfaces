import { NavButton } from '@components/UI/NavButton';
import { useRootStore } from '@hooks/useRootStore';
import type { INavButton } from '@lib/types';
import type { FC } from 'react';

interface Props {
  navigationInfo: INavButton;
}

export const NavigationLink: FC<Props> = ({ navigationInfo }) => {
  const { href, icon, hoverIcon, label, acessLvl } = navigationInfo;
  const { userStore } = useRootStore();

  const disabled = acessLvl > userStore.accessLevel;

  return (
    <NavButton
      to={disabled ? '#' : href}
      end
      alt={navigationInfo.alt}
      icon={icon}
      hoverIcon={hoverIcon}
      disabled={disabled}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
        }
      }}
    >
      {label}
    </NavButton>
  );
};
