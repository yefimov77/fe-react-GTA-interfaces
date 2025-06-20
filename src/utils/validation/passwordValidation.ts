export function validatePassword(
  password: string,
  login: string,
  email: string,
): string {
  if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }
  if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
    return 'Password must contain at least one letter and one digit';
  }
  if (password === login) {
    return 'Password must not be the same as login';
  }
  if (password === email) {
    return 'Password must not be the same as email';
  }
  return '';
}

export function validateConfirmPassword(
  confirmPassword: string,
  password: string,
): string {
  if (confirmPassword !== password) {
    return 'Passwords do not match';
  }
  return '';
}
