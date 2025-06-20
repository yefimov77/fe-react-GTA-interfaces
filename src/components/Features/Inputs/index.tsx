import { CheckBoxWrapper } from '@components/UI/CheckBox';
import { InputField } from '@components/UI/InputField';
import { BaseButton } from '@components/UI/MainButton';
import { useRootStore } from '@hooks/useRootStore';
import { observer } from 'mobx-react-lite';

import styles from './Inputs.module.scss';

export const Inputs = observer(() => {
  const { formStore: store } = useRootStore();

  const handleChange =
    (field: keyof typeof store.touched) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      store.setField(field, e.target.value);
      if (!store.touched[field]) {
        store.setTouched(field);
      }
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (store.isValid) {
      console.log('submitted succesfully');
    }
    store.reset();
  };

  return (
    <div className={styles.page}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputsWrapper}>
          <InputField
            type="text"
            placeholder="Login"
            value={store.login}
            onChange={handleChange('login')}
            onBlur={() => store.setTouched('login')}
            touched={store.touched.login}
            error={store.loginError}
          />

          <InputField
            type="email"
            placeholder="Email"
            value={store.email}
            onChange={handleChange('email')}
            onBlur={() => store.setTouched('email')}
            touched={store.touched.email}
            error={store.emailError}
          />

          <InputField
            type={store.showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={store.password}
            onChange={handleChange('password')}
            onBlur={() => store.setTouched('password')}
            touched={store.touched.password}
            error={store.passwordError}
            showToggle
            isVisible={store.showPassword}
            onToggleVisibility={() => store.toggleShowPassword()}
          />

          <InputField
            type={store.showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={store.confirmPassword}
            onChange={handleChange('confirmPassword')}
            onBlur={() => store.setTouched('confirmPassword')}
            touched={store.touched.confirmPassword}
            error={store.confirmPasswordError}
            showToggle
            isVisible={store.showConfirmPassword}
            onToggleVisibility={() => store.toggleShowConfirmPassword()}
          />
        </div>

        <CheckBoxWrapper>
          <input
            type="checkbox"
            checked={store.acceptTerms}
            onChange={() => store.toggleAcceptTerm()}
          />
          Я знаком с правилами сервера и принимаю их
        </CheckBoxWrapper>

        <BaseButton type="submit" disabled={!store.isValid}>
          Проверить
        </BaseButton>
      </form>
    </div>
  );
});
