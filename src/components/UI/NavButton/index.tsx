import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface INavButtonProps {
  icon: string;
  hoverIcon: string;
  alt?: string;
  disabled?: boolean;
}

export const NavButton = styled(NavLink).attrs<INavButtonProps>((props) => ({
  'aria-disabled': props.disabled ? 'true' : undefined,
  tabIndex: props.disabled ? -1 : undefined,
}))<INavButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 150px;
  height: 49px;

  color: #a6a6a6;
  background-color: #00000073;

  font-size: 16px;
  line-height: 22px;
  font-weight: 500;

  border-radius: 10px;

  &::before {
    content: '';
    height: 24px;
    width: 24px;
    background-image: url(${(props) => props.icon});
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
  }

  &:hover,
  &.active {
    color: #6cbfb6;
    background-color: #fff;

    &::before {
      background-image: url(${(props) => props.hoverIcon});
    }
  }

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      color: #a6a6a6;
      background-color: transparent !important;
      cursor: default;
      border: 1px solid #a6a6a6;

      &::before {
        background-image: url('/lock.svg');
      }

      &:hover,
      &.active {
        color: #999999;
        background-color: transparent !important;
        &::before {
          background-image: url('/lock.svg');
        }
      }
    `}
`;
