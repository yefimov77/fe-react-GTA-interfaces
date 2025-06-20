export function validateLogin(login: string): string {
  const trimmed = login.trim();
  if (trimmed.length < 3 || trimmed.length > 16) {
    return 'Login must be between 3 and 16 characters';
  }
  if (!/^[a-zA-Z0-9]+$/.test(trimmed)) {
    return 'Login can contain only English letters and digits';
  }
  return '';
}
