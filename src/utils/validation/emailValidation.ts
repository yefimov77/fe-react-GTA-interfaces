import { ALLOWED_DOMAINS } from '@lib/data/constants';

export function validateEmail(email: string): string {
  const trimmed = email.trim();
  if (trimmed.length < 3) {
    return 'Email must be at least 3 characters long';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return 'Email format is invalid';
  }
  const domain = trimmed.split('@')[1]?.toLowerCase();
  if (!domain || !ALLOWED_DOMAINS.has(domain)) {
    return `Email domain must be one of: ${[...ALLOWED_DOMAINS].join(', ')}`;
  }
  return '';
}
