import styled from 'styled-components';

export const BaseButton = styled.button`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #072a26;
  background: linear-gradient(225deg, #40877f 0%, #6cbfb6 100%);

  border: none;
  border-radius: 10px;

  cursor: pointer;

  transition:
    color 0.3s ease,
    background-color 0.3s ease;

  &:disabled {
    cursor: auto;
    background: #a6a6a6;
    color: rgba(0, 0, 0, 0.45);
  }
  &:not(:disabled):hover {
    background-color: #fff;
    color: #00000073;
  }
`;
