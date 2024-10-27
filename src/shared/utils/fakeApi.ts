import { LoginCredentials, User } from '@/shared/types';

export const fakeApiLogin = async (
  credentials: LoginCredentials,
): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.email === 'test@example.com' &&
        credentials.password === 'password'
      ) {
        resolve({ id: 1, name: 'Test User', email: credentials.email });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};
