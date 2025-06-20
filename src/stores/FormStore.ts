import type { FormField } from '@lib/types';
import {
  validateConfirmPassword,
  validateEmail,
  validateLogin,
  validatePassword,
} from '@utils/validation';
import { makeAutoObservable } from 'mobx';

export class FormStore {
  login = '';
  email = '';
  password = '';
  confirmPassword = '';
  acceptTerms = false;
  touched = {
    login: false,
    email: false,
    password: false,
    confirmPassword: false,
  };

  showPassword = false;
  showConfirmPassword = false;

  constructor() {
    makeAutoObservable(this);
  }

  setField(field: FormField, value: string) {
    this[field] = value;
  }

  setTouched(field: keyof typeof this.touched) {
    this.touched[field] = true;
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  toggleShowConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  toggleAcceptTerm() {
    this.acceptTerms = !this.acceptTerms;
  }

  reset() {
    this.login = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.touched = {
      login: false,
      email: false,
      password: false,
      confirmPassword: false,
    };
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.acceptTerms = false;
  }

  get loginError() {
    return validateLogin(this.login);
  }

  get emailError() {
    return validateEmail(this.email);
  }

  get passwordError() {
    return validatePassword(this.password, this.login, this.email);
  }

  get confirmPasswordError() {
    return validateConfirmPassword(this.confirmPassword, this.password);
  }

  get isValid() {
    return (
      !this.loginError &&
      !this.emailError &&
      !this.passwordError &&
      !this.confirmPasswordError &&
      this.acceptTerms
    );
  }
}
