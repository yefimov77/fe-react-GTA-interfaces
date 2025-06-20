import styled from 'styled-components';

export const CheckBoxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: underline;

  input[type='checkbox'] {
    appearance: none;
    width: 19px;
    height: 19px;
    border: 2px solid gray;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s;
    background-color: rgba(0, 0, 0, 0.45);
    cursor: pointer;

    &:hover {
      border-color: rgba(108, 191, 182, 1);
    }

    &:checked {
      border-color: rgba(108, 191, 182, 1);
      background-image: url(/arrow-verified.svg);
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;
