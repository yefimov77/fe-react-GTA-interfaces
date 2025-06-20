import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

const InputFielWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input<{ hasError?: boolean; isValid?: boolean }>`
  width: 100%;
  height: 50px;
  background-color: #00000073;
  color: white;
  padding: 0 40px 0 15px;
  font-size: 14px;
  border-radius: 10px;
  border: ${({ hasError, isValid }) => {
    if (hasError) return '1px solid #f92a4d';
    if (isValid) return '1px solid #6cbfb6';
    return 'none';
  }};

  &::placeholder {
    color: #a6a6a6;
  }

  &:focus {
    outline: none;
    border: ${({ hasError, isValid }) => {
      if (hasError) return '1px solid #f92a4d';
      if (isValid) return '1px solid #6cbfb6';
      return '1px solid #a6a6a6';
    }};
  }
`;

const ToggleIcon = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #aaa;
  cursor: pointer;
`;

const Error = styled.span`
  color: #f92a4d;
  font-size: 12px;
`;

interface Props {
  type?: string;
  value: string;
  placeholder: string;
  touched: boolean;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  showToggle?: boolean;
  isVisible?: boolean;
  onToggleVisibility?: () => void;
}

export const InputField = observer(
  ({
    type = 'text',
    value,
    placeholder,
    touched,
    error,
    onChange,
    onBlur,
    showToggle = false,
    onToggleVisibility,
  }: Props) => {
    return (
      <InputFielWrapper>
        <Wrapper>
          <Input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            hasError={!!error && touched}
            isValid={!error && touched}
          />
          {showToggle && onToggleVisibility && (
            <ToggleIcon type="button" onClick={onToggleVisibility}>
              <img src="/eye-icon.svg" alt="Toggle visibility" />
            </ToggleIcon>
          )}
        </Wrapper>
        {touched && error && <Error>{error}</Error>}
      </InputFielWrapper>
    );
  },
);
